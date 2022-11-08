import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./scss/global.scss";
import "./scss/lib.scss";

const rootElement = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(rootElement!);

ReactRoot.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
