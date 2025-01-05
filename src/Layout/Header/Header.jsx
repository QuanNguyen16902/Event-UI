import React from "react";
import "../Main/Main.css";
import "./Header.css";

function Header() {
  return (
    <div className="main-header d-flex justify-content-between align-items-center mb-3">
      <h2 className="title">Event Management</h2>
      <div className="user-info d-flex align-items-center">
        <i className="bi bi-bell text-warning me-3 notification-icon"></i>
        <span className="user-name me-3">Jack Frost</span>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="user-avatar rounded-circle me-2"
        />
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Options
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li>
              <a className="dropdown-item" href="#profile">
                Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#settings">
                Settings
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#logout">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
