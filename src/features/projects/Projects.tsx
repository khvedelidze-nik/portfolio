import ProjectsList from "./components/ProjectsList";

const Projects = () => {
  return (
    <section
      className="bg-section-a py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-7xl">
        <header className="mb-10 animate-fade-in">
          <h2
            id="projects-heading"
            className="text-text text-3xl font-bold sm:text-4xl lg:text-5xl tracking-tight"
          >
            Projects
          </h2>
          <p className="mt-3 text-muted text-lg max-w-2xl">
            A selection of my recent work showcasing frontend development skills
          </p>
        </header>
        <ProjectsList />
      </div>
    </section>
  );
};

export default Projects;