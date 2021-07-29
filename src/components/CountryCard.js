import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <li className="bg-white dark:bg-blue-light shadow-md rounded-md overflow-hidden">
      <Link to={`/countries/${country.name}`}>
        {/* Flag img container */}
        <div className="h-48">
          <img
            src={country.flag}
            alt={`${country.name} flag`}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Contry infos container */}
        <div className="px-6 py-8 capitalize font-semibold leading-6">
          <span className="mb-4 font-extrabold text-lg inline-block">
            {country.name}
          </span>
          <div>
            <span>population: </span>
            <span className="font-light">{country.population}</span>
          </div>
          <div>
            <span>region: </span>
            <span className="font-light">{country.region}</span>
          </div>
          <div>
            <span>capital: </span>
            <span className="font-light">{country.capital}</span>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
