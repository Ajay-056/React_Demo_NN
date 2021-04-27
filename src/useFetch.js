import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      (async function getData() {
        const rawData = await fetch(url);
        if (!rawData.ok) {
          throw Error("Couldn't fetch the data for that resource!!");
        }
        const data = await rawData.json();
        setIsPending(false);
        setData(data);
        setError(null);
      })().catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
    }, 2000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
