import React from 'react';
import useFetchApi from '../hooks/useFetchApi';
import CharactersList from '../components/CharactersList';
const { REACT_APP_MARVEL_API_BASE } = process.env;

function getFavoritesFromStorage() {
  return JSON.parse(window.localStorage.getItem("favorites")) || {};   
}

function setFavoritesFromStorage(favorites){
  window.localStorage.setItem("favorites", JSON.stringify(favorites));  
}

function App() {
  const { data, fetchData, error, isFetching } = useFetchApi("/public/characters");
  const [favorites, setFavorites] = React.useState(getFavoritesFromStorage());

  const onFavorite = (id) => {
    setFavorites({
      ...favorites, 
      [id]:{id}
    })

  }

  const onUnfavorite = (id) => {
    const newFavorites = {...favorites};
    delete newFavorites[id];
    setFavorites(newFavorites);
  }
  
  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  React.useEffect(() => {
    console.log(isFetching);
  }, [data, error, isFetching]);

  React.useEffect(()=> {
    setFavoritesFromStorage(favorites)
  }, [favorites])


  
  return (
    <div className="App">
      <CharactersList characters={data} isFetching={isFetching} error={error} fetchData={fetchData} 
       onFavorite={onFavorite} onUnfavorite={onUnfavorite} favorites={favorites}
      />
    </div>
  );
}

export default App;
