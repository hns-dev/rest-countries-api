import { useEffect, useState } from "react";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
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
