import React from 'react'
import CharacterListItem from '../CharacterListItem';

const style = {
  root: {
    backgroundColor: "#f0f0f0",
    color: "black",
  },
  ul: {

  }
}

const CharactersList = ({ characters = [], isFetching = true, error, fetchData, onFavorite, onUnfavorite, favorites }) => {
  console.log(characters);
  return (
    <div style={{ ...style.root }}>
      <button onClick={fetchData}>Refazer requisição</button>
      {isFetching && <p>Loading...</p>}
      {!isFetching && !error &&
        <ul>
          {characters.map((character) =>
            <CharacterListItem 
              key={character.id}
              id={character.id}
              name={character.name}
              description={character.description}
              onFavorite={onFavorite} 
              onUnfavorite={onUnfavorite}
              favorites={favorites}
            />)}
        </ul>
      }

      {!isFetching && error &&
        <div>
          <p>Não foi possivel fazer a requisição :/</p>

        </div>
      }
    </div>
  )
}

export default CharactersList;
