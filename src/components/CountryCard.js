import { Link } from "react-router-dom";
import CountryInfo from "./CountryInfo";

const primaryInfos = [
  { x: "population", y: "population" },
  { x: "region", y: "region" },
  { x: "capital", y: "capital" },
];

const CountryCard = ({ country }) => {
  return (
    <li className="bg-white dark:bg-blue-light shadow-md rounded-md overflow-hidden h-96">
      <Link to={`/countries/${country.name}`}>
        {/* Flag img container */}
        <div className="relative pb-3/5">
          <img
            src={country.flags["png"]}
            alt={`${country.name} flag`}
            className="absolute h-full w-full object-cover"
          />
        </div>

        {/* Contry infos container */}
        <div className="px-6 py-8 capitalize leading-6">
          <span className="mb-4 font-extrabold text-lg inline-block">
            {country.name}
          </span>
          {primaryInfos.map((info, index) => (
            <CountryInfo key={index} x={info.x} y={country[info.y]} />
          ))}
        </div>
      </Link>
    </li>
  );
};

export default CountryCard;
