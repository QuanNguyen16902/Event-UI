import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import Sidebar from "./Sidebar/Sidebar";

const App = () => {
  // State to track the current theme (dark or light)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle theme function
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Apply theme to the body element on theme change
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
      document.body.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  return (
    <div className="app d-flex">
      {/* Theme Switcher */}
      {/* <div className="theme-switcher d-flex border rounded">
        <button
          className={`btn ${
            !isDarkMode ? "btn-warning" : "btn-light"
          } flex-grow-1 d-flex align-items-center justify-content-center border-end`}
          onClick={toggleTheme}
        >
          <i
            className={`bi ${
              !isDarkMode ? "bi-brightness-high" : "bi-brightness-high-fill"
            } me-2`}
          ></i>
          Light
        </button>
        <button
          className={`btn ${
            isDarkMode ? "btn-dark" : "btn-white"
          } flex-grow-1 d-flex align-items-center justify-content-center`}
          onClick={toggleTheme}
        >
          <i
            className={`bi ${isDarkMode ? "bi-moon-stars" : "bi-moon"} me-2`}
          ></i>
          Dark
        </button>
      </div> */}

      {/* Sidebar, Main Content, and Footer */}
      <Sidebar theme={isDarkMode ? "dark" : "light"} />
      <div className="content d-flex flex-column">
        <Main theme={isDarkMode ? "dark" : "light"} />
        <Footer theme={isDarkMode ? "dark" : "light"} />
      </div>
    </div>
  );
};

export default App;
