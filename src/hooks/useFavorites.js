import {useState, useEffect} from 'react';

function getFavoritesFromStorage() {
    return JSON.parse(window.localStorage.getItem("favorites")) || {};   
}

function setFavoritesFromStorage(favorites){
    window.localStorage.setItem("favorites", JSON.stringify(favorites));  
}

const useFavorites = () => {
    const [favorites, setFavorites] = useState(getFavoritesFromStorage());

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

    useEffect(()=> {
        setFavoritesFromStorage(favorites)
    }, [favorites])

    return {
        favorites,
        onFavorite,
        onUnfavorite
    }

}

export default useFavorites;