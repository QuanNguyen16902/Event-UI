import React from "react";
import "./Main.css";

function ContentArea() {
  return (
    <div className="content-area bg-white border rounded p-3">
      <p>Welcome to the Event Management System!</p>
      <table className="table table-stripped ">
        <thead>
          <tr>
            <th>Username</th>
            <th>Username</th>
            <th>Username</th>
          </tr>
        </thead>
      </table>
    </div>
  );
}

export default ContentArea;
