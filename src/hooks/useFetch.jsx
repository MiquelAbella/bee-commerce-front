import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isMounted = useRef(true);
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, isLoading: true, error: null });

    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (isMounted.current) {
          setState({
            isLoading: false,
            error: null,
            data,
          });
        }
      } catch (err) {
        setState({
          data: null,
          isLoading: false,
          error: "Ups... something happened",
        });
      }
    };
    fetchData();
  }, [url]);

  return state;
};
