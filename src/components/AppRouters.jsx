import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Service from "../pages/Service";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
};

export default AppRouters;
