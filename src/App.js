import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/Header";
import Home from "./components/Home";
import CountryDetails from "./components/CountryDetails";

function App() {
  // Define dark mode state and use the current value in the local storage as the initial vlaue
  const darkModePrefrence = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModePrefrence));

  // On first page load and whenever the darkMode state changes, update the dark mode value in localStorage and toggle the "dark" class in the html element
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  // Update darkMode state
  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  const [countries, setCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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
        })
        .catch((err) => {
          if (axios.isCancel(err)) return;
          else return console.log(err);
        });
    };

    fetchCountries();

    return () => {
      source.cancel();
    };
  }, [query]);

  return (
    <Router>
      <div>
        <Header
          darkMode={darkMode}
          handleDarkModeChange={handleDarkModeChange}
        />

        <Switch>
          <Route exact path="/">
            <Home
              countries={countries}
              isLoading={isLoading}
              getQuery={(q) => setQuery(q)}
            />
          </Route>

          <Route path="/countries/:name">
            <CountryDetails countries={countries} isLoading={isLoading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
