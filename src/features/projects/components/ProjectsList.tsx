import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsList = () => {
  return (
    <div
      className="grid gap-6
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-3"
      role="list"
      aria-label="Projects"
    >
      {projects.map((data) => (
        <ProjectCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default ProjectsList;