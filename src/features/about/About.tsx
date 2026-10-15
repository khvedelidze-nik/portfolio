import AboutText from "./components/AboutText";

const About = () => {
  return (
    <section
      className="bg-section-a py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-3xl">
        <header className="mb-8 animate-fade-in">
          <h2
            id="about-heading"
            className="text-text text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight"
          >
            About
          </h2>
        </header>
        <AboutText />
      </div>
    </section>
  );
};

export default About;