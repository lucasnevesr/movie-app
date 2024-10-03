import { useState, useEffect } from 'react';

function useFetch(url)  {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const options = {
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWJjNDI4NTUxMmU2ODRmZWY5MjI1ZmI3ZGZkNmVhYiIsIm5iZiI6MTcyNzg5NDc3NC45MDQ2MTEsInN1YiI6IjY2OTg1NWM3NWU5NTgyZmQ2ZDgwNGFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y1i-3WC6b1_LD3WgXGOb2yt4DZRE4h3wHBiePn1aMG0'
      }
    };

    useEffect(() => {
        fetch(url, options)
        .then(response => {
          if (!response.ok) { 
            throw Error('Could not fetch the data for that resource');
          } 
          return response.json();
        })
        .then(data => {
          setIsLoading(false);
          setData(data);
          setError(null);
        })
        .catch(err => {
          setIsLoading(false);
          setError(err.message);
        })
    }, [url])
  
    return { data, isLoading, error };
  }
  
  export default useFetch