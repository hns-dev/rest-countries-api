import { useEffect, useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";

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

  return (
    <div className="App">
      <Header darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
      <Search />
    </div>
  );
}

export default App;
