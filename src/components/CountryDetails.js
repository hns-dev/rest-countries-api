import { useEffect, useState } from "react";
import axios from "axios";

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
        <img src="" alt="" />
      </div>

      {/* Country infos */}
      <div>
        <h2>Country Name</h2>

        <div>
          <span>
            native name: <span>dynamic value</span>
          </span>
          <br />
          <span>
            population: <span>dynamic value</span>
          </span>
          <br />
          <span>
            region: <span>dynamic value</span>
          </span>
          <br />
          <span>
            sub region: <span>dynamic value</span>
          </span>
          <br />
          <span>
            capital: <span>dynamic value</span>
          </span>
        </div>

        <div>
          <span>
            top level domain: <span>dynamic value</span>
          </span>
          <br />
          <span>
            currencies: <span>dynamic value</span>
          </span>
          <br />
          <span>
            languages: <span>dynamic value</span>
          </span>
          <br />
        </div>

        <div>
          <span>
            border countries: <span>dynamic value</span>
          </span>
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
