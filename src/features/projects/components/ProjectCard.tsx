interface CardProps {
  name: string;
  description: string;
}

const ProjectCard = ({ name, description }: CardProps) => {
  return (
    <div className="border-border max-w-40 rounded-lg border-2">
      {name}
      {description ? description : null}
    </div>
  );
};

export default ProjectCard;
