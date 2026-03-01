import React from "react";
import Hero from "../features/hero/Hero";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
    </div>
  );
};

export default HomePage;
