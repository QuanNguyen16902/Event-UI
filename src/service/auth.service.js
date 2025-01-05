import axios from "axios";
import { Navigate } from "react-router-dom";
import { setToken } from "../utils/auth";
const API_URL = "http://localhost:8080/api/auth";
class AuthService {
  login(username, password) {
    return axios
      .post(`${API_URL}/signin`, {
        username,
        password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          setToken(response.data.accessToken);
          return { success: true, data: response.data };
        }
        console.log(response);
        return { success: false, message: "Đăng nhập thất bại" };
      })
      .catch((error) => {
        const status = error.response?.status;
        let message;
        let navigateTo = null;

        switch (status) {
          case 400:
            message = "Yêu cầu không hợp lệ! Vui lòng kiểm tra lại thông tin.";
            break;
          case 401:
            message = "Tên đăng nhập hoặc mật khẩu không đúng!";
            break;
          case 403:
            message = "Tài khoản của bạn chưa được kích hoạt!";
            break;
          case 404:
            message = "Tài nguyên không tìm thấy!";
            break;
          case 500:
            message = "Lỗi máy chủ! Vui lòng thử lại sau.";
            navigateTo = "/500";
            break;
          default:
            message =
              error.response?.data || "Có lỗi xảy ra từ server của bạn!";
        }

        console.log("Error message from server:", message); // Debugging log
        if (navigateTo) {
          return <Navigate to={navigateTo} />;
        }
        return { success: false, message: message, status: status };
      });
  }

  logout() {
    const token = localStorage.getItem("token");
    // Kiểm tra xem token có tồn tại không
    if (!token) {
      console.error("Không có token.");
      return;
    }
    // Gửi yêu cầu đăng xuất đến server
    return axios
      .post(
        API_URL + "auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`, // Gửi token trong header
          },
        }
      )
      .then((response) => {
        console.log("Đăng xuất thành công");
        localStorage.clear();
        return response;
      })
      .catch((error) => {
        console.error("Đăng xuất thất bại: ", error);
      })
      .finally(() => {
        localStorage.clear();
      });
  }

  register(username, email, password) {
    return axios.post(`${API_URL}auth/register`, {
      username,
      email,
      password,
    });
  }

  // getCurrentUser() {
  //   return axios
  //     .get(API_URL + "currentUser", { headers: authHeader() })
  //     .then((response) => {
  //       if (response.data) {
  //         // Lưu thông tin người dùng vào localStorage
  //         localStorage.setItem("currentUser", JSON.stringify(response.data));
  //       }
  //       return response.data;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching current user:", error);
  //       // Trả về thông tin người dùng từ localStorage nếu có lỗi khi gọi API
  //       const userStr = localStorage.getItem("currentUser");
  //       if (userStr) {
  //         return JSON.parse(userStr);
  //       }
  //       return null; // Trả về null nếu không có thông tin người dùng
  //     });
  // }
}

export default new AuthService();
