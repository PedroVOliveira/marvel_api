import React,{useEffect} from 'react';
import useFetchApi from '../hooks/useFetchApi';
import CharactersList from '../components/CharactersList';
const {REACT_APP_MARVEL_API_BASE} = process.env;

function App() {
  const { data,fetchData,error,isFetching } = useFetchApi("/public/characters");
  useEffect(()=>{
    fetchData();
  },[fetchData]);

  useEffect(()=>{
    console.log(isFetching);
  },[data,error,isFetching]);

  return (
    <div className="App">
      <CharactersList characters={data} isFetching={isFetching} error={error} fetchData={fetchData}/>
    </div>
  );
}

export default App;
