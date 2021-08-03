import Search from "./Search";
import Filter from "./Filter";
import CountryList from "./CountryList";

const Home = ({ countries, isLoading }) => {
  return (
    <main className="container">
      <section className="my-8 md:flex justify-between">
        <Search />
        <Filter />
      </section>

      <section>
        <CountryList countries={countries} isLoading={isLoading} />
      </section>
    </main>
  );
};

export default Home;
