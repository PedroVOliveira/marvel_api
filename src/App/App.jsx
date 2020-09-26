import React from 'react';
import CharactersList from '../components/CharactersList';
import { CharactersProvider } from '../contexts/Characters';

const { REACT_APP_MARVEL_API_BASE } = process.env;

function App() {

  return (
    <CharactersProvider> 
      <div className="App">
        <CharactersList />
        <CharactersList />
      </div>
    </CharactersProvider>
  );
}

export default App;
