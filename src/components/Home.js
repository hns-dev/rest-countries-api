import { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";

const Home = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const url = "https://restcountries.eu/rest/v2/";

    const fetchCountries = async () => {
      const res = await axios(url);
      setCountries(res.data);
    };

    fetchCountries();
  });

  return (
    <main>
      <section className="container my-8 md:flex justify-between">
        <Search />
        <Filter />
      </section>
    </main>
  );
};

export default Home;
