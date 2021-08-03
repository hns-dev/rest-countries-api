import { Link } from "react-router-dom";

const CountryBorders = ({ alphacode, countries }) => {
  const countryName = countries.find(
    (country) => country.alpha3Code.toLowerCase() === alphacode.toLowerCase()
  ).name;

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
