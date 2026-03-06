import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div className="flex flex-col flex-wrap justify-start gap-2 px-2 sm:flex-row">
      {projects.map((data) => (
        <ProjectCard
          key={data.id}
          name={data.name}
          description={data.description}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
