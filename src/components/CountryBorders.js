import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryBorders = ({ alphacode }) => {
  // const countryName = countries.find(
  //   (country) => country.alpha3Code.toLowerCase() === alphacode.toLowerCase()
  // ).name;

  const [countryName, setCountryName] = useState("");

  // Fetch specific country from the API and save it in the country state
  useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchCountry = () => {
      axios(
        `https://restcountries.eu/rest/v2/alpha/${alphacode}/?fields=name`,
        {
          cancelToken: source.token,
        }
      )
        .then((res) => setCountryName(res.data.name))
        .catch((err) => {
          if (axios.isCancel(err)) return;
          else return console.log(err);
        });
    };
    fetchCountry();

    return () => {
      source.cancel();
    };
  });

  return (
    <Link
      to={`/countries/${countryName}`}
      className="bg-white dark:bg-blue-light shadow-md font-light inline-block mb-2 mr-2 px-5 rounded-sm"
    >
      {countryName}
    </Link>
  );
};

export default CountryBorders;
