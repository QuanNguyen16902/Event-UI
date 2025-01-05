import React, { createContext, useContext, useState } from "react";

// Tạo context với giá trị mặc định là 'light'
const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// Tạo provider để bao bọc ứng dụng
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light"); // Lưu theme trong state

  // Hàm chuyển đổi theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.setAttribute("data-bs-theme", newTheme); // Áp dụng theme vào body
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook để sử dụng theme và toggleTheme trong các component
export const useTheme = () => useContext(ThemeContext);
