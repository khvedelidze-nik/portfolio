import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center px-2 sm:justify-start">
      {projects.map((p) => (
        <ProjectCard name={p.name} description={p.description} />
      ))}
    </div>
  );
};

export default ProjectsList;
