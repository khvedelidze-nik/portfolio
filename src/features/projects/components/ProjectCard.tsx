import type { ProjectInterface } from "../interfaces/ProjectInterface";
import LinkBtn from "./LinkBtn";
import NoImage from "./NoImage";
import ProjectImage from "./ProjectImage";

interface CardProps {
  data: ProjectInterface;
}

const ProjectCard = ({ data }: CardProps) => {
  return (
    <div className="border-border bg-card hover:bg-cardHover hover:text-accentHover text-accent relative flex w-full cursor-pointer flex-col justify-between gap-2 rounded-lg border-2 p-2">
      <div className="relative flex flex-col">
        <div className="aspect-video w-full">
          {data.image ? <ProjectImage path={data.image} /> : <NoImage />}
        </div>
        {data.name && (
          <span className="border-border w-fit border-b-2 py-1 text-xl font-semibold sm:text-2xl">
            {data.name}
          </span>
        )}
        {data.description && (
          <span className="text-text text-base">{data.description}</span>
        )}
        {data.tech && (
          <p className="text-accent text-lg font-bold">
            Used Tech: <br />{" "}
            {data.tech.map((t) => (
              <p className="text-text text-sm font-medium">{t}</p>
            ))}
          </p>
        )}
      </div>
      <div className="flex gap-2">
        <LinkBtn path={data.links.github}>GitHub</LinkBtn>
        <LinkBtn path={data.links.demo}>Live Demo</LinkBtn>
      </div>
    </div>
  );
};

export default ProjectCard;
