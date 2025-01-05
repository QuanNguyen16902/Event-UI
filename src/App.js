import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import DefaultLayout from "./Layout/DefaultLayout";
import { privateRoutes, publicRoutes } from "./router";
import { getToken } from "./utils/auth";
const PrivateRoute = ({ element, ...rest }) => {
  const token = getToken();
  return token ? element : <Navigate to="/login" />;
};

// Component to protect public routes
const PublicRoute = ({ element, ...rest }) => {
  const token = getToken();
  return !token ? element : <Navigate to="/" />;
};

const App = () => {
  // State to track the current theme (dark or light)
  return (
    <div>
      <Routes>
        {privateRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          const pageTitle = route.pageTitle;
          const childPageTitle = route.childPage;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PrivateRoute
                  element={
                    <Layout
                      pageTitle={pageTitle}
                      childPage={childPageTitle}
                      children={<Page />}
                    ></Layout>
                  }
                />
              }
            />
          );
        })}

        {publicRoutes.map((route, index) => {
          const Layout = route.layout || DefaultLayout;
          const Page = route.component;
          const pageTitle = route.pageTitle;

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <PublicRoute
                  element={
                    <Layout pageTitle={pageTitle}>
                      <Page />
                    </Layout>
                  }
                />
              }
            />
          );
        })}
      </Routes>
    </div>
  );
};

export default App;
