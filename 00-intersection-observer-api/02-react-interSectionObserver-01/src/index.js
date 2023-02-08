import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App-basic";
// import App from "./App-hook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
