import SkillsList from "./components/SkillsList";

const Skills = () => {
  return (
    <section
      className="bg-section-b py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 animate-fade-in">
          <h2
            id="skills-heading"
            className="text-text text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight"
          >
            Skills
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl">
            Technologies and tools I work with regularly
          </p>
        </header>
        <SkillsList />
      </div>
    </section>
  );
};

export default Skills;