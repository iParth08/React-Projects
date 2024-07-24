import React from "react";
import HeroSection from "./HeroSection";
import Skills from "./Skills";

const Home = () => {
  return (
    <div className="flex-col">
      <HeroSection />

      <Skills />

      <div className="projects flex">
        <h2>Projects</h2>
      </div>
    </div>
  );
};

export default Home;
