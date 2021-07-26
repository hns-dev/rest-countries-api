import { useEffect, useState } from "react";
import axios from "axios";

const CountryBorders = ({ border }) => {
  const [borderCountry, setBorderCountry] = useState("");

  useEffect(() => {
    axios(`https://restcountries.eu/rest/v2/alpha/${border}?fields=name`)
      .then((result) => setBorderCountry(result.data.name))
      .catch((err) => console.log(err));
  });

  return <a href="/">{borderCountry}, </a>;
};

export default CountryBorders;
