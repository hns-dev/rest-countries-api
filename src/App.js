import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const darkModePrefrence = localStorage.getItem("darkMode");
  const [darkMode, setDarkMode] = useState(JSON.parse(darkModePrefrence));

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    const html = document.querySelector("html");
    darkMode ? html.classList.add("dark") : html.classList.remove("dark");
  }, [darkMode]);

  const handleDarkModeChange = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="App">
      <Header darkMode={darkMode} handleDarkModeChange={handleDarkModeChange} />
    </div>
  );
}

export default App;
