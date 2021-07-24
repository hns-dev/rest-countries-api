const CountryCard = ({ country }) => {
  return (
    <li>
      {/* Flag img container */}
      <div>
        <img src={country.flag} alt={`${country.name} flag`} />
      </div>
      {/* Contry infos container */}
      <div>
        <h2>{country.name}</h2>

        <span>
          <span>population: </span>
          {country.population}
        </span>
        <br />
        <span>
          <span>region: </span>
          {country.region}
        </span>
        <br />
        <span>
          <span>capital: </span>
          {country.capital}
        </span>
      </div>
    </li>
  );
};

export default CountryCard;
