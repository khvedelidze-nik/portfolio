import AboutText from "./components/AboutText";

const About = () => {
  return (
    <section
      className="bg-section-a flex min-h-40 max-w-full flex-col p-4"
      id="about"
    >
      <span className="text-text text-2xl font-bold sm:text-3xl">About</span>
      <AboutText />
    </section>
  );
};

export default About;
