import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import MovieState from "./context/MovieState";
ReactDOM.createRoot(document.getElementById("root")).render(
  <MovieState>
    <BrowserRouter>
      <App />
    </BrowserRouter>              
  </MovieState>
);
