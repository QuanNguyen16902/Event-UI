import React from "react";
import SearchBar from "../../Layout/Main/SearchBar";
import EventList from "./EventList";

export default function Home() {
  return (
    <div>
      <SearchBar />
      <EventList />
    </div>
  );
}
