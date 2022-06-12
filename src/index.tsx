import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TranslationProvider } from "./Context/TranslationContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Scss/global.scss";
import "./index.scss";
import "./Scss/lib.scss";

const rootElement = document.getElementById("root");
const ReactRoot = ReactDOM.createRoot(rootElement!);

ReactRoot.render(
  <React.StrictMode>
    <TranslationProvider>
      <App />
    </TranslationProvider>
  </React.StrictMode>
);
