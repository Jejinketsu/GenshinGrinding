import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Domain from "./pages/Domain";
import Characters from "./pages/Character";
import Dashboard from "./pages/Dashboard";

function Routas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} end />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="domain" element={<Domain />} />
        <Route path="characters" element={<Characters />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routas;
