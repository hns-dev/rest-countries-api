import CountryCard from "./CountryCard";
import Loader from "./Loader";

const CountryList = ({ isLoading, countries }) => {
  // When the fetching the data from API is done, loop through the countries and return a list item from CountryCard component
  const countryList = isLoading ? (
    <Loader />
  ) : (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {countries.map((country) => (
        <CountryCard key={country.name} country={country} />
      ))}
    </ul>
  );

  return (
    // Display country list
    <>{countryList}</>
  );
};

export default CountryList;
