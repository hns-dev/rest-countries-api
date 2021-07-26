import { useEffect, useState } from "react";
import axios from "axios";
import CountryBorders from "./CountryBorders";

const CountryDetails = () => {
  const name = "belgium";
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const res = await axios(`https://restcountries.eu/rest/v2/name/${name}`);
      setCountry(res.data[0]);
    };
    fetchCountry();
  });

  const countryInfos = (
    <div>
      {/* Country flag */}
      <div>
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>

      {/* Country infos */}
      <div>
        <h2>{country.name}</h2>

        <div>
          <span>
            native name: <span>{country.nativeName}</span>
          </span>
          <br />
          <span>
            population: <span>{country.population}</span>
          </span>
          <br />
          <span>
            region: <span>{country.region}</span>
          </span>
          <br />
          <span>
            sub region: <span>{country.subregion}</span>
          </span>
          <br />
          <span>
            capital: <span>{country.capital}</span>
          </span>
        </div>

        <div>
          <span>
            top level domain: <span>{country.topLevelDomain}</span>
          </span>
          <br />
          <span>
            currencies:{" "}
            {country.currencies ? (
              country.currencies.map((currency) => (
                <span key={currency.name}>{currency.name}</span>
              ))
            ) : (
              <span>none</span>
            )}
          </span>
          <br />
          <span>
            languages:{" "}
            {country.languages ? (
              country.languages.map((lang) => (
                <span key={lang.name}>{lang.name}, </span>
              ))
            ) : (
              <span>none</span>
            )}
          </span>
          <br />

          <div>
            <span>
              border countries:{" "}
              {country.borders ? (
                country.borders.map((border) => (
                  <CountryBorders key={border} border={border} />
                ))
              ) : (
                <span>none</span>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <main>
      {/* Go back button */}
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="ionicon"
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
        <span>back</span>
      </button>

      {countryInfos}
    </main>
  );
};

export default CountryDetails;
