import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceList from "./components/ExperienceList";

const Experience = () => {
  return (
    <section
      className="bg-section-b py-20 px-6 sm:py-24 sm:px-8 lg:px-12"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 animate-fade-in">
          <h2
            id="experience-heading"
            className="text-accent text-4xl md:text-5xl relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
          >
            Experience
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl">
            My journey in frontend development and education
          </p>
        </header>
        <ExperienceHeader />
        <ExperienceList />
      </div>
    </section>
  );
};

export default Experience;