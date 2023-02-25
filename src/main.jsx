import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Codes from "./pages/Codes";
import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/codes" element={<Codes />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);
