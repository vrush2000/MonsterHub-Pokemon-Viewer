import { useEffect } from '@lynx-js/react';
import { usePokemon } from '../store/pokemonStore';
import { PokemonCard } from '../components/Card';
import { useNavigate } from "react-router";

export function Home() {
  const navigate = useNavigate();
  const {
    pokemonList, searchTerm, loading, loadingMore, error, hasMore,
    searchResult, searchError, suggestions, suggestLoading, searchLoading,
    headerVisible, lastScroll, setHeaderVisible, setLastScroll, fetchMasterList,
    fetchInitialPokemons, loadMorePokemons, searchPokemons, setSearchTerm
  } = usePokemon();

  const filteredList = searchTerm
    ? pokemonList.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.id.toString() === searchTerm ||
          p.types.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : pokemonList;

  useEffect(() => {
    fetchInitialPokemons();
    fetchMasterList(); // Panggil fetch master list di sini
  }, [fetchInitialPokemons, fetchMasterList]);

  useEffect(() => {
    const handler = setTimeout(() => {
      searchPokemons(searchTerm);
    }, 300); // Debounce search

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, searchPokemons]);

  const handleScroll = (e: { detail: { scrollTop: number; }; }) => {
    const scrollTop = e.detail.scrollTop;
    if (scrollTop > lastScroll && scrollTop > 100) {
      setHeaderVisible(false);
    } else {
      setHeaderVisible(true);
    }
    setLastScroll(scrollTop);
  };

  const handleClear = () => {
    setSearchTerm('');
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
              placeholder="Cari Nama, ID, atau Tipe..."
              bindinput={(e) => setSearchTerm(e.detail.value)}
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
        bindscrolltolower={() => {
          if (!loading && hasMore) loadMorePokemons();
        }}
        bindscroll={handleScroll}
        lower-threshold={100}
      >
        {loading && pokemonList.length === 0 && (
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
            ) : suggestions && suggestions.length > 0 ? (
              <>
                <view className="SuggestionTitle">
                  <text className="StatusText">Saran Pokémon:</text>
                </view>
                {suggestions.map((pokemon) => (
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
                {loadingMore && (
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
