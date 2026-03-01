import React from "react";
import Hero from "../features/hero/Hero";
import Projects from "../features/projects/Projects";
import Skills from "../features/skills/Skills";
import About from "../features/about/About";
import Experience from "../features/experience/Experience";
import Contact from "../features/contact/Contact";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};

export default HomePage;
