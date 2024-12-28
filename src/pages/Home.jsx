import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ProjectsSection from "../components/ProjectsSection";
import Testimonails from "../components/Testimonails";
import Footer from "../components/Footer";
import StepsToBuyHome from "../components/StepsToBuyHome";
import Discover from "../components/Discover";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <About />
      <ProjectsSection/>
      <StepsToBuyHome/>
      <Discover/>
      <Testimonails />
      <Footer/>
    </div>
  );
};

export default Home;
