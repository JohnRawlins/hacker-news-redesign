import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/index.js";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
