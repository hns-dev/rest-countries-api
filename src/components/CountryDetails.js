import { useParams, useHistory } from "react-router";
import CountryBorders from "./CountryBorders";
import CountryInfo from "./CountryInfo";
import Loader from "./Loader";
import useFetch from "../hooks/useFetch";

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

const CountryDetails = () => {
  const { name } = useParams();
  const history = useHistory();

  const {
    data: country,
    isLoading,
    error,
  } = useFetch(`https://restcountries.eu/rest/v2/name/${name}?fullText=true`);

  const countryInfos = country
    ? country.map((country) => (
        <div
          key={country.name}
          className="grid xl:grid-cols-2 xl:gap-24 lg:mt-16"
        >
          {/* Country flag */}
          <div className="relative pb-3/5 xl:pb-10/12 mb-10 xl:mb-0">
            <img
              src={country.flag}
              alt={`${country.name} flag`}
              className="absolute h-full w-full object-cover"
            />
          </div>

          {/* Country infos */}
          <div className="capitalize self-center">
            <h2 className="font-bold text-xl lg:text-2xl mb-4">
              {country.name}
            </h2>

            <div className="grid xl:grid-cols-2 xl:gap-6">
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
                    <CountryBorders key={alphacode} alphacode={alphacode} />
                  ))
                ) : (
                  <span className="font-light">none</span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))
    : "No infos";
  return (
    <main className="my-8 px-3 text-base">
      <div className="container">
        {/* Go back button */}
        <button
          onClick={() => history.goBack()}
          className="flex items-center bg-white dark:bg-blue-light shadow-md mt-10 md:mt-16 mb-10 px-5 py-2 rounded-sm"
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

        {isLoading ? <Loader /> : countryInfos}
      </div>
    </main>
  );
};

export default CountryDetails;
