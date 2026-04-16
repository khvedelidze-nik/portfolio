import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-col flex-wrap justify-center gap-4 px-1 sm:justify-start">
      {projects.map((data) => (
        <ProjectCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProjectsList;
