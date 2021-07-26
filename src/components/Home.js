import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/";

    const fetchCountries = async () => {
      const res = await axios(url);
      setCountries(res.data);
      setIsLoading(false);
    };

    fetchCountries();
  });

  return (
    <main className="container">
      <section className="my-8 md:flex justify-between">
        <Search />
        <Filter />
      </section>

      <section>
        <CountryList isLoading={isLoading} countries={countries} />
      </section>
    </main>
  );
};

export default Home;
