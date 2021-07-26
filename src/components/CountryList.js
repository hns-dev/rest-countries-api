import CountryCard from "./CountryCard";

const CountryList = ({ isLoading, countries }) => {
  // When the fetching the data from API is done, loop through the countries and return a list item from CountryCard component
  const countryList = isLoading ? (
    <div>
      <img src="/img/spinner.svg" alt="" />
    </div>
  ) : (
    countries.map((country) => (
      <CountryCard key={country.name} country={country} />
    ))
  );

  return (
    // Display country list
    <ul>{countryList}</ul>
  );
};

export default CountryList;
