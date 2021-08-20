import CountryCard from "./CountryCard";
import Loader from "./Loader";
import NoCountry from "./NoCountry";
import RenderIfVisible from "react-render-if-visible";

const CountryList = ({ countries, isLoading, error }) => {
  // When the fetching the data from API is done, loop through the countries and return a list item from CountryCard component
  const countryList = isLoading ? (
    <Loader />
  ) : (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {countries.map((country) => (
        <RenderIfVisible defaultHeight={358} key={country.name}>
          <CountryCard country={country} />
        </RenderIfVisible>
      ))}
    </ul>
  );

  return (
    // Display country list
    <>{error ? <NoCountry /> : countryList}</>
  );
};

export default CountryList;
