import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", 
    });
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <ToastContainer />
      <AppRouters />
    </Router>
  );
};

export default App;
