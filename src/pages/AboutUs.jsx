import React from "react";
import AboutHero from "../components/aboutPage/AboutHero";
import HorizontalScroll from "../components/HorizontalScroll";
import CoreValues from "../components/aboutPage/CoreValues";
import TeamSection from "../components/aboutPage/TeamSection";
import ClientCommitment from "../components/aboutPage/ClientCommitment";

const AboutUs = () => {
  const components = [AboutHero, CoreValues];

  return (
    <div>
      <HorizontalScroll components={components} />
      <TeamSection />
      <ClientCommitment />
    </div>
  );
};

export default AboutUs;
