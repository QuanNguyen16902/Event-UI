import React from "react";
import Header from "../Header/Header";
import "./Main.css";

function Main({ children }) {
  return (
    <main className="main p-4">
      <Header />
      <div className="content-area">{children}</div>
    </main>
  );
}

export default Main;
