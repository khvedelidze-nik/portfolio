import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceList from "./components/ExperienceList";

const Experience = () => {
  return (
    <section
      className="bg-section-b py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-5xl">
        <header className="mb-10 animate-fade-in">
          <h2
            id="experience-heading"
            className="text-text text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight"
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