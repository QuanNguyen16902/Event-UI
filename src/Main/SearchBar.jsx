import React from "react";
import "./Main.css";

function SearchBar() {
  return (
    <div className="search-bar row g-3 mb-3">
      <div className="col-md-3">
        <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="col-md-3">
        <select className="form-select">
          <option>Department</option>
        </select>
      </div>
      <div className="col-md-2">
        <input type="time" className="form-control" placeholder="Start Time" />
      </div>
      <div className="col-md-2">
        <input type="time" className="form-control" placeholder="End Time" />
      </div>
      <div className="col-md-2">
        <button className="btn btn-warning w-100">Search</button>
      </div>
    </div>
  );
}

export default SearchBar;
