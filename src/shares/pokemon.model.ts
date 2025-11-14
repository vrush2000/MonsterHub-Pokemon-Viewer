export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    types: string[];
}

export interface PokemonDetail extends Pokemon {
    stats: { name: string; value: number }[];
    height: number;
    weight: number;
    abilities: string[];
    evolutionChain: { id: number; name: string; imageUrl: string }[];
    description: string;
    moves: {
        name: string;
        level: number;
        power: number | null;
        accuracy: number | null;
    }[];
}

export interface PokeAPIBasicResult {
    name: string;
    url: string;
}

export interface PokeApiPokemon {
    id: number;
    name: string;
    sprites: { other: { home: { front_default: string } } };
    species: { url: string };
    moves: PokeApiMove[];
    types: { type: { name: string } }[];
    stats: { base_stat: number; stat: { name: string } }[];
    abilities: { ability: { name: string } }[];
    height: number;
    weight: number;
}

export interface PokeApiMove {
    move: {
        name: string;
        power: number | null;
        accuracy: number | null;
    };
    version_group_details: {
        level_learned_at: number;
    }[];
}

export interface PokeApiSpecies {
    flavor_text_entries: {
        flavor_text: string;
        language: { name: string };
    }[];
    evolution_chain: {
        url: string;
    };
}

export interface PokeApiEvolutionChain {
    chain: PokeApiChainLink;
}

export interface PokeApiChainLink {
    species: {
        name: string;
        url: string;
    };
    evolves_to: PokeApiChainLink[];
}