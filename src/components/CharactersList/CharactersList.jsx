import React from 'react'
import CharacterListItem from '../CharacterListItem';
const CharactersList = ({characters = [], isFetching = true, error,fetchData}) => {
  return (
    <div>
      <button onClick={fetchData}>Refazer requisição</button>
      {isFetching && <p>Loading...</p>}
      {!isFetching && !error &&
        <ul>
          {characters.map((character)=><CharacterListItem key={character.id} name={character.name} description={character.description}/>)}
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
