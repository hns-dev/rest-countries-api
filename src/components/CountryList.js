import CountryCard from "./CountryCard";

const CountryList = ({ isLoading, countries }) => {
  // When the fetching the data from API is done, loop through the countries and return a list item from CountryCard component
  const countryList = isLoading ? (
    <div className="flex justify-center items-center mt-10">
      <img src="/img/spinner.svg" alt="" />
    </div>
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
