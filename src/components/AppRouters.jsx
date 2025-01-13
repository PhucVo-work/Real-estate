import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Projects from "../pages/Projects";
import Service from "../pages/Service";
import DetailProject from "../pages/DetailProject";

const AppRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<AboutUs />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/:id" element={<DetailProject/>} />
    </Routes>
  );
};

export default AppRouters;
