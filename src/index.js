import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Myprovider } from "./store/context";

ReactDOM.render(
  <React.StrictMode>
    <Myprovider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Myprovider>
  </React.StrictMode>,
  document.getElementById("root")
);
