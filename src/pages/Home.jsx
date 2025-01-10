import React from "react";
import Hero from "../components/homePage/Hero";
import About from "../components/homePage/About";
import ProjectsSection from "../components/homePage/ProjectsSection";
import Testimonails from "../components/homePage/Testimonails";
import Footer from "../components/homePage/Footer";
import StepsToBuyHome from "../components/homePage/StepsToBuyHome";
import Discover from "../components/homePage/Discover";
import TrustSection from "../components/homePage/TrustSection";

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <About />
      <ProjectsSection />
      <StepsToBuyHome />
      <Discover />
      <Testimonails />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Home;
