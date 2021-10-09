import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const CountryBorders = ({ alphacode }) => {
  const {
    data: countryName,
    isLoading,
    error,
  } = useFetch(`https://restcountries.com/v2/alpha/${alphacode}/?fields=name`);

  return (
    countryName && (
      <Link
        to={`/countries/${countryName.name}`}
        className="bg-white dark:bg-blue-light shadow-md font-light inline-block mb-2 mr-2 px-5 rounded-sm"
      >
        {countryName.name}
      </Link>
    )
  );
};

export default CountryBorders;
