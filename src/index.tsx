import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

const rootElement = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(rootElement!);

ReactRoot.render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);
