import Home from "./Pages/Home/Home";
import LoginForm from "./Pages/LoginPage/loginForm";
const publicRoutes = [
  {
    path: "/login",
    component: LoginForm,
    layout: LoginForm,
  },
];

const privateRoutes = [{ path: "/", component: Home }];

export { privateRoutes, publicRoutes };
