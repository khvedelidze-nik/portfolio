import ProjectsList from "./components/ProjectsList";

const Projects = () => {
  return (
    <div className="bg-section-a min-h-40 max-w-full p-4">
      <span className="text-text text-2xl font-bold">Projects</span>
      <ProjectsList />
    </div>
  );
};

export default Projects;
