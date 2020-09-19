import { useEffect,useState,useCallback } from 'react';
import { fetchApi } from '../api';
const useFetchApi = (resource) =>{
  const [isFetching,setIsFetching] = useState(true);
  const [data,setData] = useState([]);
  const [error,setError] = useState(null);
  const fetchData = useCallback(async ()=> {

    try {
      setIsFetching(true);
      const response = await fetchApi(resource);
      const { data } = await response.json();

      if(data?.results) {
        setData(data.results);
      }
    }

    catch(err) {
      setError(err);
    }

    finally {
      setIsFetching(false);
    }
  },[resource,setIsFetching,setData,setError]);

  return {
    isFetching,
    data,
    error,
    fetchData
  };
}


export default useFetchApi;
