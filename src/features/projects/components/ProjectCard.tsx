interface CardProps {
  name: string;
  description: string;
}

const ProjectCard = ({ name, description }: CardProps) => {
  return (
    <div className="border-border bg-card hover:bg-cardHover hover:text-accentHover text-accent flex w-40 cursor-pointer flex-col rounded-lg border-2 p-2 sm:w-40 md:w-60 lg:w-80">
      {name ? (
        <span className="md:text-md text-sm sm:text-sm lg:text-lg">{name}</span>
      ) : null}
      {description ? <span className="text-text">{description}</span> : null}
    </div>
  );
};

export default ProjectCard;
