import ProjectsList from "./components/ProjectsList";

const Projects = () => {
  return (
    <section
      className="bg-section-a flex min-h-40 max-w-full flex-col gap-2 p-4"
      id="projects"
    >
      <span className="text-text text-2xl font-bold sm:text-3xl">Projects</span>
      <ProjectsList />
    </section>
  );
};

export default Projects;
