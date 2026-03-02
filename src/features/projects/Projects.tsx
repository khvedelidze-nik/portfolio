import ProjectsList from "./components/ProjectsList";

const Projects = () => {
  return (
    <div className="bg-section-a flex min-h-40 max-w-full flex-col gap-2 p-4">
      <span className="text-text text-2xl font-bold sm:text-3xl">Projects</span>
      <ProjectsList />
    </div>
  );
};

export default Projects;
