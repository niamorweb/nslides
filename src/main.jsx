import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Codes from "./pages/Codes";
import "./style/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="nslides/" element={<App />} />
        <Route path="nslides/codes" element={<Codes />} />
        <Route path="nslides/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
