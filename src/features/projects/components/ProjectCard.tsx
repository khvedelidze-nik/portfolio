import type { ProjectInterface } from "../interfaces/ProjectInterface";

interface CardProps {
  data: ProjectInterface;
}

const ProjectCard = ({ data }: CardProps) => {
  return (
    <div className="border-border bg-card hover:bg-cardHover hover:text-accentHover text-accent flex w-4/5 cursor-pointer flex-col gap-2 rounded-lg border-2 p-2 sm:w-4/9">
      {data.name && (
        <span className="text-xl font-semibold sm:text-2xl">{data.name}</span>
      )}
      <div className="min-h-20">
        {data.image ? (
          <img src={data.image} alt="" />
        ) : (
          <span className="text-error">Preview was not found!</span>
        )}
      </div>
      {data.description && (
        <span className="text-text text-base">{data.description}</span>
      )}
    </div>
  );
};

export default ProjectCard;
