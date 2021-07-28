import { useEffect, useState } from "react";
import axios from "axios";

const CountryBorders = ({ border }) => {
  const [borderCountry, setBorderCountry] = useState("");

  useEffect(() => {
    axios(`https://restcountries.eu/rest/v2/alpha/${border}?fields=name`)
      .then((result) => setBorderCountry(result.data.name))
      .catch((err) => console.log(err));
  });

  return (
    <a
      href="/"
      className="bg-white dark:bg-blue-light shadow-md font-light inline-block mb-2 mr-2 px-5 rounded-sm"
    >
      {borderCountry}
    </a>
  );
};

export default CountryBorders;
