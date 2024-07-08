import { useState, useEffect } from 'react';

const useFetch = (initialUrl, onSucess=null) => {
  const [url, setUrl] = useState(initialUrl);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setIsLoading(true);
      if(!url) return;
      try {
        const response = await fetch(url, { signal: abortController.signal });
        if (!response.ok) {
          setError('Failed to fetch data');
          setData(null);
        } else {
          const result = await response.json();
          if(onSucess){
            onSucess(result);
          }
          setData(result);
          setError(null);
        }
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          setError(error.message);
          setData(null);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [url,onSucess]);
  
  return { data, error, isLoading, setUrl };
};

export default useFetch;