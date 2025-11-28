import { useState, useEffect } from '@lynx-js/react';
import { usePokemonStore } from '../../store/pokemonStore';
import { capitalize } from '../../helpers/capitalize';
import { useLocation, useNavigate } from 'react-router';
import './Details.css';

export function Details() {
    const location = useLocation();
    const { detail, loading, fetchPokemonDetail } = usePokemonStore();
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
        if (pokemonId) {
            fetchPokemonDetail(pokemonId);
        }
    }, [pokemonId, fetchPokemonDetail]);

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
                    {detail.moves && detail.moves.length > 0 && <scroll-view scroll-orientation="vertical" className="MovesContainer">
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
                    </scroll-view>}
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