import { useState, useEffect } from '@lynx-js/react';
import type {
    PokemonDetail,
    PokeApiPokemon,
    PokeApiSpecies,
    PokeApiEvolutionChain,
} from '../../shares/pokemon.model';
import { capitalize } from '../../helpers/capitalize';
import { useLocation, useNavigate } from 'react-router';
import './Details.css';

export function Details() {
    const location = useLocation();
    const [detail, setDetail] = useState<PokemonDetail | null>(null);
    const [loading, setLoading] = useState(true);
    const [evoLoadingId, setEvoLoadingId] = useState<number | null>(null);
    const pokemonId = new URLSearchParams(location.search).get("id");
    const navigate = useNavigate();

    const onClose = () => {
        navigate("/");
    };

    const goToEvolution = (id: number) => {
        setEvoLoadingId(id);
        navigate(`/details?id=${id}`);
        lynx.createSelectorQuery()
            .select(`#scroll`)
            .invoke({
                method: 'scrollTo',
                params: {
                    offset: 0,
                    index: 0,
                    smooth: true
                },
            })
            .exec();
    };

    useEffect(() => {
        const fetchDetail = async () => {
            try {
                setLoading(true);

                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
                const data: PokeApiPokemon = await response.json();

                const speciesResponse = await fetch(data.species.url);
                const speciesData: PokeApiSpecies = await speciesResponse.json();

                const description = speciesData.flavor_text_entries
                    .find((entry) => entry.language.name === 'en')
                    ?.flavor_text.replace(/\f/g, ' ') || 'No description available.';

                const moves = data.moves
                    .slice(0, 20)
                    .map((m) => ({
                        name: m.move.name,
                        level: m.version_group_details[0]?.level_learned_at || 0,
                        power: m.move.power,
                        accuracy: m.move.accuracy
                    }))
                    .sort((a, b) => a.level - b.level);

                const evolutionResponse = await fetch(speciesData.evolution_chain.url);
                const evolutionData: PokeApiEvolutionChain = await evolutionResponse.json();

                const evolutionChain: { id: number; name: string; imageUrl: string }[] = [];
                let currentEvolution = evolutionData.chain;

                while (currentEvolution) {
                    const speciesUrl = currentEvolution.species.url;
                    const id = parseInt(speciesUrl.split('/').slice(-2, -1)[0]);
                    evolutionChain.push({
                        id,
                        name: currentEvolution.species.name,
                        imageUrl: `https://img.pokemondb.net/sprites/home/normal/${currentEvolution.species.name}.png`
                    });
                    currentEvolution = currentEvolution.evolves_to[0];
                }

                const detailData: PokemonDetail = {
                    id: data.id,
                    name: data.name,
                    imageUrl: data.sprites.other.home.front_default,
                    types: data.types.map((t) => t.type.name),
                    stats: data.stats.map((s) => ({
                        name: s.stat.name,
                        value: s.base_stat
                    })),
                    height: data.height / 10,
                    weight: data.weight / 10,
                    abilities: data.abilities.map((a) => a.ability.name),
                    evolutionChain,
                    description,
                    moves: moves,
                };

                setDetail(detailData);
            } catch (error) {
                console.error('Error fetching detail:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDetail();
    }, [pokemonId]);

    useEffect(() => {
        setEvoLoadingId(null);
    }, [detail]);

    if (!detail && loading) {
        return (
            <view className="DetailContent" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <view className='dflex'>
                    <image mode="aspectFit" src={'https://mpaas.vercel.app/assets/images/loading-ball.gif'} className="LoadingSpinner" />
                    <text className="StatusText">Memuat detail...</text>
                </view>
            </view>
        );
    }

    if (!detail) return null;

    const primaryType = detail.types[0] || 'unknown';

    return (
        <view className="DetailContent">
            <view className="PopupClose" bindtap={onClose}>
                <text>✕</text>
            </view>
            <scroll-view id="scroll" scroll-orientation="vertical" className="DetailScroll">
                <view className={`PopupHeader Type-${primaryType}`}>
                    <image src={detail.imageUrl} className="PopupImage" />
                    <text className="PopupName">{capitalize(detail.name)}</text>
                    <text className="PopupId">#{detail.id.toString().padStart(3, '0')}</text>
                    <view className="TypeContainer">
                        {detail.types.map(type => (
                            <text key={type} className={`TypeBadge Type-${type}`}>{type.toUpperCase()}</text>
                        ))}
                    </view>
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Pokédex Entry</text>
                    <text className="Description">{detail.description}</text>
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Informasi Fisik</text>
                    <view className="InfoGrid">
                        <view className="InfoItem">
                            <text className="InfoLabel">Tinggi</text>
                            <text className="InfoValue">{detail.height} m</text>
                        </view>
                        <view className="InfoItem">
                            <text className="InfoLabel">Berat</text>
                            <text className="InfoValue">{detail.weight} kg</text>
                        </view>
                    </view>
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Kemampuan</text>
                    <view className="AbilitiesContainer">
                        {detail.abilities.map(ability => (
                            <text key={ability} className="AbilityBadge">{capitalize(ability.replace('-', ' '))}</text>
                        ))}
                    </view>
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Base Stats</text>
                    {detail.stats.map(stat => (
                        <view key={stat.name} className="StatRow">
                            <text className="StatName">{capitalize(stat.name.replace('-', ' '))}</text>
                            <view className="StatBarContainer">
                                <view
                                    className={`StatBar Type-${primaryType}`}
                                    style={{ width: `${(stat.value / 255) * 100}%` }}
                                />
                            </view>
                            <text className="StatValue">{stat.value}</text>
                        </view>
                    ))}
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Moves</text>
                    <scroll-view scroll-orientation="vertical" className="MovesContainer">
                        {[...detail.moves]
                            .filter(move => move.level > 0)
                            .sort((a, b) => b.level - a.level)
                            .map(move => (
                                <view key={move.name} className="MoveItem">
                                    <text className="MoveName">{capitalize(move.name.replace('-', ' '))}</text>
                                    <text className="MoveLevel">Lv.{move.level}</text>
                                    {move.power && <text className="MovePower">Power: {move.power}</text>}
                                    {move.accuracy && <text className="MoveAccuracy">Acc: {move.accuracy}%</text>}
                                </view>
                            ))
                        }
                    </scroll-view>
                </view>

                <view className="DetailSection">
                    <text className="SectionTitle">Rantai Evolusi</text>
                    <view className="EvolutionContainer">
                        {detail.evolutionChain.map((evo, index) => (
                            <view key={evo.id} className="EvolutionGroup">
                                <view className="EvolutionItem" bindtap={() => goToEvolution(evo.id)}>
                                    {evoLoadingId === evo.id ? (
                                        <image
                                            className="EvolutionImage"
                                            style={{ opacity: 0.5 }}
                                        />
                                    ) : (
                                        <image
                                            src={evo.imageUrl}
                                            className="EvolutionImage"
                                        />
                                    )}
                                    <text className="EvolutionName">{capitalize(evo.name)}</text>
                                </view>
                                {index < detail.evolutionChain.length - 1 && (
                                    <text className="EvolutionArrow">→</text>
                                )}
                            </view>
                        ))}
                    </view>
                </view>
            </scroll-view>
        </view>
    );
};