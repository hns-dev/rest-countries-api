import CountryCard from "./CountryCard";

const CountryList = ({ countries }) => {
  return (
    <ul>
      {/* If countries isn't empty, loop through it and return a list item from CountryCard component */}
      {countries &&
        countries.map((country) => (
          <CountryCard key={country.name} country={country} />
        ))}
    </ul>
  );
};

export default CountryList;
