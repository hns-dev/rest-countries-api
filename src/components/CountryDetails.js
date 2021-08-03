import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import axios from "axios";
import CountryBorders from "./CountryBorders";
import CountryInfo from "./CountryInfo";

/* x: the required info/info title
  y: the name of the property in the country object
  z: the property of the nested object, if any
*/
const primaryInfos = [
  { x: "native name", y: "nativeName" },
  { x: "population", y: "population" },
  { x: "region", y: "region" },
  { x: "sub region", y: "subregion" },
  { x: "capital", y: "capital" },
];

const secondaryInfos = [
  { x: "top level domain", y: "topLevelDomain", z: "" },
  { x: "currencies", y: "currencies", z: "name" },
  { x: "languages", y: "languages", z: "name" },
];

const CountryDetails = ({ countries, isLoading }) => {
  const { name } = useParams();
  const country = countries.find((country) => country.name === name);
  const history = useHistory();

  const countryInfos = country ? (
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
      <div className="capitalize self-center">
        <h2 className="font-bold text-xl lg:text-2xl mb-4">{country.name}</h2>

        <div className="grid md:grid-cols-2 md:gap-6">
          {/* Info group 1 */}
          <div className="mb-8 text-sm leading-8">
            {primaryInfos.map((info, index) => (
              <CountryInfo key={index} x={info.x} y={country[info.y]} />
            ))}
          </div>

          {/* info group 2 */}
          <div className="mb-8 text-sm leading-8">
            {secondaryInfos.map((info, index) => (
              <CountryInfo
                key={index}
                x={info.x}
                y={country[info.y]}
                z={info.z}
              />
            ))}
          </div>
        </div>

        {/* info group 3 */}
        <div className="text-sm leading-8">
          <div>
            <span className="block md:inline mb-2 md:mb-0 md:mr-2 font-semibold">
              border countries:{" "}
            </span>
            {country.borders && country.borders.length ? (
              country.borders.map((alphacode) => (
                <CountryBorders
                  key={alphacode}
                  alphacode={alphacode}
                  countries={countries}
                />
              ))
            ) : (
              <span className="font-light">none</span>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    "No infos"
  );
  return (
    <main className="my-8 px-3 text-base">
      <div className="container">
        {/* Go back button */}
        <button
          onClick={() => history.goBack()}
          className="flex items-center bg-white dark:bg-blue-light shadow-md mb-10 px-5 py-2 rounded-sm"
        >
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
