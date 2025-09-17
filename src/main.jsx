import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/* global styles */
import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/globals.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
