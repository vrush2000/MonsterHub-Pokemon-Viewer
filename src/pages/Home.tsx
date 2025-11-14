import { useState, useEffect, useCallback } from '@lynx-js/react';
import type { PokeAPIBasicResult, Pokemon, PokeApiPokemon } from '../shares/pokemon.model';
import { PokemonCard } from '../components/Card';
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [filteredList, setFilteredList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [headerVisible, setHeaderVisible] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const [searchResult, setSearchResult] = useState<Pokemon | null>(null);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchError, setSearchError] = useState<string | null>(null);

  const [suggestions, setSuggestions] = useState<Pokemon[]>([]);
  const [suggestLoading, setSuggestLoading] = useState(false);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50&offset=0');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const initialData: { results: PokeAPIBasicResult[] } = await response.json();

        const detailPromises = initialData.results.map(result =>
          fetchPokemonDetail(result.url)
        );

        const fullList = await Promise.all(detailPromises);

        setPokemonList(fullList);
        setFilteredList(fullList);
        setOffset(50);
        setHasMore(true);
      } catch (e) {
        console.error("Fetch error:", e);
        setError('Gagal memuat data Pokémon. Coba lagi nanti.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const loadMorePokemon = useCallback(async () => {
    if (loadingMore || !hasMore || searchTerm) return;

    try {
      setLoadingMore(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${offset}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: { results: PokeAPIBasicResult[] } = await response.json();

      if (data.results.length === 0) {
        setHasMore(false);
        return;
      }

      const detailPromises = data.results.map(result =>
        fetchPokemonDetail(result.url)
      );

      const newPokemon = await Promise.all(detailPromises);

      setPokemonList(prev => [...prev, ...newPokemon]);
      setFilteredList(prev => searchTerm ? prev : [...prev, ...newPokemon]);
      setOffset(prev => prev + 50);

      if (offset + 50 >= 1000) {
        setHasMore(false);
      }
    } catch (e) {
      console.error("Load more error:", e);
    } finally {
      setLoadingMore(false);
    }
  }, [offset, loadingMore, hasMore, searchTerm]);

  const handleScrollToLower = useCallback(() => {
    loadMorePokemon();
  }, [loadMorePokemon]);

  const handleScroll = (e: { detail: { scrollTop: number; }; }) => {
    const scrollTop = e.detail.scrollTop;
    if (scrollTop > lastScroll && scrollTop > 50) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScroll(scrollTop);
  };

  useEffect(() => {
    setSearchResult(null);
    setSearchError(null);
    setSuggestions([]);

    if (!searchTerm) {
      setFilteredList(pokemonList);
      return;
    }

    const term = searchTerm.toLowerCase();

    if (term.length >= 3) {
      setSuggestLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon?limit=1000`)
        .then(res => res.json())
        .then(async data => {
          const matched: PokeAPIBasicResult[] = data.results
            .filter((p: PokeAPIBasicResult) => p.name.includes(term))
            .slice(0, 10);

          const detailList = await Promise.all(
            matched.map((p) => fetchPokemonDetail(p.url))
          );
          setSuggestions(detailList);
        })
        .catch(() => setSuggestions([]))
        .finally(() => setSuggestLoading(false));
    }

    const filtered = pokemonList.filter(pokemon =>
      pokemon.name.toLowerCase().includes(term) ||
      pokemon.id.toString() === term ||
      pokemon.types.some(type => type.toLowerCase().includes(term))
    );
    setFilteredList(filtered);

    if (filtered.length === 0 && term.length > 0) {
      setSearchLoading(true);
      fetch(`https://pokeapi.co/api/v2/pokemon/${term}`)
        .then(res => {
          if (!res.ok) throw new Error('Pokémon tidak ditemukan');
          return res.json();
        })
        .then((details: PokeApiPokemon) => {
          setSearchResult({
            id: details.id,
            name: details.name,
            imageUrl: `https://img.pokemondb.net/sprites/home/normal/${details.name}.png`,
            types: details.types.map((t) => t.type.name),
          });
        })
        .catch(() => setSearchError('Pokémon tidak ditemukan'))
        .finally(() => setSearchLoading(false));
    }
  }, [searchTerm, pokemonList]);

  const handleInputChange = useCallback((text: string) => {
    setSearchTerm(text);
  }, []);

  const handleClear = () => {
    setSearchTerm('');
    handleInputChange('');
  }

  const openDetail = (pokemonId: number) => {
    navigate(`/details?id=${pokemonId}`);
  }

  return (
    <view className="AppWrapper">
      <view className={'HeaderWrapper' + (headerVisible ? ' visible' : ' hidden')}>
        <view className="SearchContainer">
          <view className="InputMock">
            <image src="https://img.icons8.com/?size=512&id=59878&format=png" className="ClearIcon" />
            <input
              id='searchinput'
              className="SearchInput"
              type="text"
              placeholder="Cari Nama, ID, atau Tipe..."
              bindinput={(e) => handleInputChange(e.detail.value)}
            />
            {searchTerm && (
              <view
                className="ClearButton"
                bindtap={() => handleClear()}
              >
                <image src="https://img.icons8.com/?size=100&id=3062&format=png" className="ClearIcon" />
              </view>
            )}
          </view>
        </view>
      </view>
      <scroll-view
        scroll-orientation="vertical"
        className="ScrollContent"
        style={{ width: "100%", flex: 1 }}
        bindscrolltolower={handleScrollToLower}
        bindscroll={handleScroll}
        lower-threshold={100}
      >
        {loading && (
          <view className="StatusMessage">
            <image mode="aspectFit" src={'https://mpaas.vercel.app/assets/images/loading-ball.gif'} className="LoadingSpinner" />
            <text className="StatusText">Memuat data dari Pallet Town...</text>
          </view>
        )}

        {error && (
          <view className="StatusMessage">
            <text className="StatusText">{error}</text>
          </view>
        )}

        {!loading && !error && (
          <view className="ListContainer">
            {searchLoading ? (
              <view className="StatusMessage">
                <text className="StatusText">Mencari Pokémon...</text>
              </view>
            ) : suggestLoading ? (
              <view className="StatusMessage">
                <text className="StatusText">Mencari saran...</text>
              </view>
            ) : searchResult ? (
              <PokemonCard
                key={searchResult.id}
                pokemon={searchResult}
                onClick={() => openDetail(searchResult.id)}
              />
            ) : suggestions.length > 0 ? (
              <>
                <view className="SuggestionTitle">
                  <text className="StatusText">Saran Pokémon:</text>
                </view>
                {suggestions.map(pokemon => (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onClick={() => openDetail(pokemon.id)}
                  />
                ))}
              </>
            ) : filteredList.length === 0 ? (
              <view className="StatusMessage">
                <text className="StatusText">{searchError || "Tidak ada Pokémon yang cocok dengan pencarian Anda."}</text>
              </view>
            ) : (
              <>
                {filteredList.map(pokemon => (
                  <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    onClick={() => openDetail(pokemon.id)}
                  />
                ))}
                {loadingMore && !searchTerm && (
                  <view className="LoadingMore" style={'position: absolute; left:0; bottom: -10px;'}>
                    <text className="LoadingMoreText">Memuat lebih banyak Pokémon...</text>
                  </view>
                )}
                {!hasMore && !searchTerm && pokemonList.length > 0 && (
                  <view className="EndMessage">
                    <text className="EndMessageText">Semua Pokémon telah dimuat! 🎉</text>
                  </view>
                )}
              </>
            )}
          </view>
        )}
      </scroll-view>
    </view>
  );
}
