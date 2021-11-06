// This hook is used to fetch all countries
import { useEffect, useState } from "react";

const useCountries = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, [url]);

  return [data, error];
};

export default useCountries;
