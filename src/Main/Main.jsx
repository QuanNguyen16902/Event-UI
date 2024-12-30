import React from "react";
import Header from "../Header/Header";
import ContentArea from "./ContentArea";
import "./Main.css";
import SearchBar from "./SearchBar";

function Main() {
  return (
    <main className="main p-4">
      <Header />
      <SearchBar />
      <ContentArea />
    </main>
  );
}

export default Main;
