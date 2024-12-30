import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar d-flex flex-column">
      <div className="logo">
        {/* <span>USOL</span>
        <span className="text-warning">Vietnam</span> */}
        <img
          src="https://www.usol-v.com.vn/wp-content/themes/usol_v4/assets/images/logo.png"
          alt="Logo"
          style={{ borderRadius: "5px" }}
        />
      </div>
      <nav className="menu flex-grow-1">
        <button className="menu-item active">
          <i className="bi bi-calendar3 me-2"></i>
          All Events
        </button>
        <button className="menu-item">
          <i className="bi bi-person me-2"></i>
          My Events
        </button>
        <button className="menu-item">
          <i className="bi bi-clock me-2"></i>
          Scheduled
        </button>
      </nav>
      <div className="theme-switcher d-flex border rounded">
        <button className="btn btn-warning flex-grow-1 d-flex align-items-center justify-content-center border-end">
          <i className="bi bi-brightness-high me-2"></i> Light
        </button>
        <button className="btn btn-white flex-grow-1 d-flex align-items-center justify-content-center">
          <i className="bi bi-moon-stars me-2"></i> Dark
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
