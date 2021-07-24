const CountryList = ({ countries }) => {
  return (
    <ul>
      {countries &&
        countries.map((country) => <li key={country.name}>{country.name}</li>)}
    </ul>
  );
};

export default CountryList;
