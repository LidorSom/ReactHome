import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider dir="rtl">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>
);
