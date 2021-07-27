import { useEffect, useState } from "react";
import axios from "axios";
import CountryBorders from "./CountryBorders";

const CountryDetails = () => {
  const name = "belgium";
  const [country, setCountry] = useState([]);

  // Fetch specific country from the API and save it in the country state
  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios(`https://restcountries.eu/rest/v2/name/${name}`);
      setCountry(res.data[0]);
    };
    fetchCountry();
  });

  const countryInfos = (
    <div className="grid lg:grid-cols-2 lg:gap-32">
      {/* Country flag */}
      <div className="mb-10 lg:mb-0">
        <img
          src={country.flag}
          alt={`${country.name} flag`}
          className="max-w-full"
        />
      </div>

      {/* Country infos */}
      <div className="capitalize font-semibold self-center">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">{country.name}</h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Info group 1 */}
          <div className="mb-8 text-sm leading-8">
            <span className="block">
              native name:{" "}
              <span className="font-light">{country.nativeName}</span>
            </span>
            <span className="block">
              population:{" "}
              <span className="font-light">{country.population}</span>
            </span>
            <span className="block">
              region: <span className="font-light">{country.region}</span>
            </span>
            <span className="block">
              sub region:{" "}
              <span className="font-light">{country.subregion}</span>
            </span>
            <span className="block">
              capital: <span className="font-light">{country.capital}</span>
            </span>
          </div>
          {/* info group 2 */}
          <div className="mb-8 text-sm leading-8">
            <span>
              top level domain:{" "}
              <span className="font-light">{country.topLevelDomain}</span>
            </span>
            <br />
            <span>
              currencies:{" "}
              {country.currencies ? (
                country.currencies.map((currency) => (
                  <span key={currency.name} className="font-light">
                    {currency.name}
                  </span>
                ))
              ) : (
                <span className="font-light">none</span>
              )}
            </span>
            <br />
            <span>
              languages:{" "}
              {country.languages ? (
                country.languages.map((lang) => (
                  <span key={lang.name} className="font-light">
                    {lang.name},{" "}
                  </span>
                ))
              ) : (
                <span className="font-light">none</span>
              )}
            </span>
            <br />
          </div>
        </div>

        {/* info group 3 */}
        <div className="text-sm leading-8">
          <span>
            border countries:{" "}
            {country.borders ? (
              country.borders.map((border) => (
                <CountryBorders key={border} border={border} />
              ))
            ) : (
              <span className="font-light">none</span>
            )}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="my-8 px-3 text-base">
      <div className="container">
        {/* Go back button */}
        <button className="flex items-center bg-white dark:bg-blue-light shadow-md mb-10 px-5 py-2 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-4 w-4 mr-3"
            viewBox="0 0 512 512"
          >
            <title>Arrow Back</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
              d="M244 400L100 256l144-144M120 256h292"
            />
          </svg>
          <span className="capitalize text-sm">back</span>
        </button>

        {countryInfos}
      </div>
    </main>
  );
};

export default CountryDetails;
