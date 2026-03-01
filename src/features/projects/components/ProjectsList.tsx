import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div>
      {projects.map((p) => (
        <ProjectCard name={p.name} description={p.description} />
      ))}
    </div>
  );
};

export default ProjectsList;
