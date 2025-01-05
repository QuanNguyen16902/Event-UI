import axios from "axios";
import React, { useEffect, useState } from "react";
import authHeader from "./../../service/auth-header";
import "./EventList.css";
function EventList() {
  const [tutorials, setTutorials] = useState([]);

  const fetchData = async () => {
    const response = await axios.get("http://localhost:8080/api/tutorials", {
      headers: authHeader(),
    });
    setTutorials(response.data || []);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-white border rounded p-3">
      <p>Welcome to the Event Management System!</p>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Description</th>
              <th>Published</th>
              <th>Title</th>
            </tr>
          </thead>
          <tbody>
            {tutorials.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.description}</td>
                <td>{item.published}</td>
                <td>{item.title}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EventList;
