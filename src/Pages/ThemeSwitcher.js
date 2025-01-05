import React from "react";
import { useTheme } from "./ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme(); // Lấy theme và toggleTheme từ context

  return (
    <div
      className={`container mt-5 p-3 border rounded bg-${theme} text-${
        theme === "light" ? "dark" : "light"
      }`}
    >
      <h1>Bootstrap Light/Dark Theme</h1>
      <p>Click the button below to toggle between light and dark themes.</p>

      {/* Button để chuyển theme */}
      <button
        className={`btn btn-${theme === "light" ? "dark" : "light"}`}
        onClick={toggleTheme}
      >
        Switch to {theme === "light" ? "Dark" : "Light"} Theme
      </button>

      {/* Thêm một div */}
      <div
        className={`mt-4 p-4 border border-${
          theme === "light" ? "dark" : "light"
        } bg-${theme === "light" ? "light" : "dark"} text-${
          theme === "light" ? "dark" : "light"
        }`}
      >
        This div's background and text color will change based on the theme.
      </div>
    </div>
  );
}

export default ThemeSwitcher;
