import { create } from 'zustand';
import type {
  PokeAPIBasicResult,
  Pokemon,
  PokeApiPokemon,
  PokemonDetail,
  PokeApiSpecies,
  PokeApiEvolutionChain,
} from '../shares/pokemon.model';
import { shallow } from 'zustand/shallow';
interface PokemonState {
  masterPokemonList: PokeAPIBasicResult[];
  pokemonList: Pokemon[];
  searchTerm: string;
  loading: boolean;
  loadingMore: boolean;
  error: string | null;
  offset: number;
  hasMore: boolean;
  searchResult: Pokemon | null;
  searchError: string | null;
  suggestions: Pokemon[];
  suggestLoading: boolean;
  searchLoading: boolean;
  headerVisible: boolean;
  lastScroll: number;
  setPokemonList: (pokemonList: Pokemon[]) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setOffset: (offset: number) => void;
  setHasMore: (hasMore: boolean) => void;
  setSearchResult: (searchResult: Pokemon | null) => void;
  setSearchError: (searchError: string | null) => void;
  setSuggestions: (suggestions: Pokemon[]) => void;
  setHeaderVisible: (headerVisible: boolean) => void;
  setLastScroll: (lastScroll: number) => void;
  fetchMasterList: () => Promise<void>;
  fetchInitialPokemons: () => Promise<void>;
  loadMorePokemons: () => Promise<void>;
  searchPokemons: (term: string) => Promise<void>;
  setSearchTerm: (term: string) => void;
  fetchPokemonDetail: (id: string) => Promise<void>;
  detail: PokemonDetail | null;
}

export const usePokemonStore = create<PokemonState>((set, get) => ({
  masterPokemonList: [],
  pokemonList: [],
  searchTerm: '',
  loading: false,
  loadingMore: false,
  error: null,
  offset: 0,
  hasMore: true,
  searchResult: null,
  detail: null,
  searchError: null,
  suggestions: [],
  suggestLoading: false,
  searchLoading: false,
  headerVisible: true,
  lastScroll: 0,
  setPokemonList: (pokemonList) => set({ pokemonList }),
  setSearchTerm: (searchTerm) => set({ searchTerm }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setOffset: (offset) => set({ offset }),
  setHasMore: (hasMore) => set({ hasMore }),
  setSearchResult: (searchResult) => set({ searchResult }),
  setSearchError: (searchError) => set({ searchError }),
  setSuggestions: (suggestions) => set({ suggestions }),
  setHeaderVisible: (headerVisible) => set({ headerVisible }),
  setLastScroll: (lastScroll) => set({ lastScroll }),

  fetchMasterList: async () => {
    if (get().masterPokemonList.length > 0) return; // Hanya fetch sekali
    try {
      // Ambil semua pokemon (API memiliki batas, jadi kita set limit tinggi)
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=1302',
      );
      if (!response.ok) throw new Error('Gagal memuat daftar master Pokémon.');
      const data: { results: PokeAPIBasicResult[] } = await response.json();
      set({ masterPokemonList: data.results });
    } catch (e) {
      console.error(
        'Gagal mengambil daftar master Pokémon di latar belakang:',
        e,
      );
    }
  },
  fetchInitialPokemons: async () => {
    if (get().loading || get().pokemonList.length > 0) return;
    set({ loading: true, error: null });
    try {
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0',
      );
      if (!response.ok) throw new Error('Gagal memuat data Pokémon.');
      const data: { results: PokeAPIBasicResult[] } = await response.json();
      const detailPromises = data.results.map((p) => fetchPokemonDetail(p.url));
      const fullList = await Promise.all(detailPromises);
      set({
        pokemonList: fullList,
        offset: 100,
        hasMore: true,
      });
    } catch (e) {
      if (e instanceof Error) {
        set({ error: e.message });
      } else {
        set({ error: 'Terjadi kesalahan yang tidak diketahui' });
      }
    } finally {
      set({ loading: false });
    }
  },

  loadMorePokemons: async () => {
    const { hasMore, offset, searchTerm, pokemonList } = get();
    if (get().loadingMore || !hasMore || searchTerm) return;
    set({ loadingMore: true });
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=100&offset=${offset}`,
      );
      if (!response.ok) throw new Error('Gagal memuat lebih banyak.');
      const data: { results: PokeAPIBasicResult[] } = await response.json();
      if (data.results.length === 0) {
        set({ hasMore: false });
        return;
      }
      const detailPromises = data.results.map((p) => fetchPokemonDetail(p.url));
      const newPokemon = await Promise.all(detailPromises);
      const newList = [...pokemonList, ...newPokemon];
      set({
        pokemonList: newList,
        offset: offset + 100,
        hasMore: offset + 100 < 1000,
      });
    } catch (error) {
      // Handle error silently for load more
      console.error('Gagal memuat lebih banyak Pokémon:', error);
    } finally {
      set({ loadingMore: false });
    }
  },

  searchPokemons: async (term: string) => {
    if (!term.trim()) {
      set({
        searchTerm: term,
        searchResult: null,
        searchError: null,
        suggestions: [],
        searchLoading: false,
      });
      return;
    }

    const { masterPokemonList } = get();
    set({ searchLoading: true, suggestions: [], searchError: null });

    const lowerTerm = term.toLowerCase();
    const results = masterPokemonList
      .filter(
        (p) =>
          p.name.toLowerCase().includes(lowerTerm) || p.name.startsWith(lowerTerm),
      )
      .slice(0, 50); // Batasi hasil saran hingga 50

    try {
      const detailPromises = results.map((p) => fetchPokemonDetail(p.url));
      const suggestionDetails = await Promise.all(detailPromises);
      set({ suggestions: suggestionDetails });
    } catch (error) {
      console.error('Gagal mengambil detail saran:', error);
      set({ searchError: 'Gagal memuat saran.' });
    } finally {
      set({ searchLoading: false });
    }
  },

  fetchPokemonDetail: async (id: string) => {
    try {
      set({ loading: true, error: null, detail: null });
      console.time(`Fetching detail for ${id}`);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      if (!response.ok) throw new Error('Failed to fetch Pokemon detail.');

      const data: PokeApiPokemon = await response.json();
      const speciesResponse = await fetch(data.species.url);
      const speciesData: PokeApiSpecies = await speciesResponse.json();

      console.time(`Fetching evolution chain for ${id}`);
      const evolutionResponse = await fetch(speciesData.evolution_chain.url);
      const evolutionData: PokeApiEvolutionChain =
        await evolutionResponse.json();

      console.timeEnd(`Fetching evolution chain for ${id}`);
      const description =
        speciesData.flavor_text_entries
          .find((entry) => entry.language.name === 'en')
          ?.flavor_text.replace(/\f/g, ' ') || 'No description available.';

      const evolutionChain: { id: number; name: string; imageUrl: string }[] =
        [];
      let currentEvolution = evolutionData.chain;

      while (currentEvolution) {
        const speciesUrl = currentEvolution.species.url;
        const evoId = parseInt(speciesUrl.split('/').slice(-2, -1)[0]);
        evolutionChain.push({
          id: evoId,
          name: currentEvolution.species.name,
          imageUrl: `https://img.pokemondb.net/sprites/home/normal/${currentEvolution.species.name}.png`,
        });
        currentEvolution = currentEvolution.evolves_to[0];
      }

      const detailData: PokemonDetail = {
        id: data.id,
        name: data.name,
        imageUrl:
          data.sprites.other.home.front_default || data.sprites.front_default,
        types: data.types.map((t) => t.type.name),
        stats: data.stats.map((s) => ({
          name: s.stat.name,
          value: s.base_stat,
        })),
        height: data.height / 10,
        weight: data.weight / 10,
        abilities: data.abilities.map((a) => a.ability.name),
        evolutionChain,
        description,
        moves: [],
      };

      set({ detail: detailData });
      console.timeEnd(`Fetching detail for ${id}`);
    } catch (error) {
      if (error instanceof Error) {
        set({ error: error.message });
      } else {
        set({ error: 'Gagal memuat detail Pokémon.' });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

const fetchPokemonDetail = async (url: string): Promise<Pokemon> => {
  const detailResponse = await fetch(url);
  if (!detailResponse.ok) {
    throw new Error(`Detail fetch error for ${url}`);
  }
  const details: PokeApiPokemon = await detailResponse.json();
  const officialImageUrl = `https://img.pokemondb.net/sprites/home/normal/${details.name}.png`;
  return {
    id: details.id,
    name: details.name,
    imageUrl: officialImageUrl,
    types: details.types.map((t) => t.type.name),
  };
};

export const usePokemon = () =>
  usePokemonStore((state: PokemonState) => state, shallow);
