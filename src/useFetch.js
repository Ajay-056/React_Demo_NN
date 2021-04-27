import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    setTimeout(() => {
      (async function getData() {
        const rawData = await fetch(url, { signal: abortController.signal });
        if (!rawData.ok) {
          throw Error("Couldn't fetch the data for that resource!!");
        }
        const data = await rawData.json();
        setIsPending(false);
        setData(data);
        setError(null);
      })().catch((err) => {
        if (err.name === 'AbortError') {
          console.log('Fetch Aborted!!');
        } else {
          setIsPending(false);
          setError(err.message);
        }
      });
    }, 2000);

    return () => abortController.abort();
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
