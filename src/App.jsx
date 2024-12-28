import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouters from "./components/AppRouters";
import Navbar from "./components/Navbar";
import { ToastContainer} from 'react-toastify';


const App = () => {
  return (
    <Router>
      <Navbar/>
      <ToastContainer/>
      <AppRouters/>
    </Router>
  );
};

export default App;
