import React from 'react';
import Context from './CharactersContext';
import useFavorites from '../../hooks/useFavorites'
import useFetchApi from '../../hooks/useFetchApi';

const CharactersProvider = ({children}) => {
    const { data, fetchData, error, isFetching } = useFetchApi("/public/characters");
    const { onFavorite, onUnfavorite, favorites} = useFavorites();

    const value = {onFavorite, onUnfavorite, favorites, characters:data, fetchData, error, isFetching};

    React.useEffect(() => {
        fetchData();
    }, [fetchData]);

    return <Context.Provider value={value}>{children}</Context.Provider>
}

export default CharactersProvider;