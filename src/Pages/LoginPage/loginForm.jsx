import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../service/auth.service";
import "./login.css";
export default function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await authService.login(
        formData.username,
        formData.password
      );
      const { accessToken, id, username, email, roles } = response.data;
      navigate("/");
      // Save JWT token to localStorage
      localStorage.setItem("token", accessToken);

      alert(`Welcome, ${username}!`);
      // Redirect to another page or update UI here
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid username or password.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid d-flex p-0">
        <div className="col-md-6 p-0 form-side">
          <div className="login-form">
            <img src="logo-usol.png" alt="USOL Vietnam Logo" />
            <h4>Event Manager Portal</h4>
            <p className="quote">
              "Tạo nên sự kiện, tạo nên những khoảnh khắc không thể quên!"
            </p>
            <form onSubmit={handleSubmit}>
              <div className="form-floating">
                <input
                  type="text"
                  id="username"
                  name="username"
                  className="form-control"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                  required
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu của bạn"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="password">Mật khẩu</label>
              </div>
              {errorMessage && (
                <div style={{ color: "red", marginBottom: "1rem" }}>
                  {errorMessage}
                </div>
              )}
              <div className="d-grid">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn btn-primary"
                >
                  {isLoading ? "Logging in..." : "Đăng nhập"}
                </button>
              </div>
              <div className="text-center mt-3">
                <a href="#">Quên mật khẩu?</a> | <a href="#">Đăng ký</a>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6 p-0">
          <div className="image-side-container">
            <div className="image-side"></div>
            <div className="image-side"></div>
            <div className="image-side"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
