import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Routers } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <Routers>
      <App />
    </Routers>
  </React.StrictMode>,
  document.getElementById("root")
);
