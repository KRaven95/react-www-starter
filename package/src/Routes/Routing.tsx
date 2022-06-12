import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./routes";

const Routing = () => {
  return (
    <Router basename="/">
      <Routes>
        {routes.map((route) => {
          const { id, path, Component } = route;
          return <Route key={id} path={path} element={<Component />}></Route>;
        })}
      </Routes>
    </Router>
  );
};

export default Routing;
