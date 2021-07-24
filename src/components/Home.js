import Search from "./Search";
import Filter from "./Filter";

const Home = () => {
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
