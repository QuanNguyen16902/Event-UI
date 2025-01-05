import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme(); // Lấy theme và toggleTheme từ context
  const [activeButton, setActiveButton] = useState("light"); // Trạng thái nút active, mặc định là 'light'

  const handleThemeChange = (newTheme) => {
    toggleTheme(newTheme); // Thay đổi theme
    setActiveButton(newTheme); // Cập nhật nút active
  };
  return (
    <>
      {/* Nút chuyển sang light theme */}
      <button
        className="btn btn-warning flex-grow-1 d-flex align-items-center justify-content-center border-end"
        onClick={() => handleThemeChange("light")}
      >
        <i className="bi bi-brightness-high me-2"></i> Light
      </button>

      {/* Nút chuyển sang dark theme */}
      <button
        className="btn btn-white flex-grow-1 d-flex align-items-center justify-content-center"
        onClick={() => handleThemeChange("dark")}
      >
        <i className="bi bi-moon-stars me-2"></i> Dark
      </button>
    </>
  );
}

export default ThemeSwitcher;
