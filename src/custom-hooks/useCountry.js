// This hook is used to fetch specific country
import { useEffect, useState } from "react";

const useCountry = (country) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState();

  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${country}`)
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        setData(res);
      })
      .catch((error) => {
        setErr(error);
      });
  }, [country]);

  return [data, err];
};

export default useCountry; // This hook is used to fetch one specific country
