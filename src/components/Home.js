import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState("all");

  useEffect(() => {
    const url = `https://restcountries.eu/rest/v2/${query}`;
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const fetchCountries = () => {
      axios(url, { cancelToken: source.token })
        .then((res) => {
          setCountries(res.data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          else setError(err);
        });
    };

    fetchCountries();

    return () => {
      source.cancel();
    };
  }, [query]);
  return (
    <main className="container">
      <section className="my-8 md:flex justify-between">
        <Search getQuery={(q) => setQuery(q)} />
        <Filter getQuery={(q) => setQuery(q)} />
      </section>

      <section>
        <CountryList
          countries={countries}
          isLoading={isLoading}
          error={error}
        />
      </section>
    </main>
  );
};

export default Home;
