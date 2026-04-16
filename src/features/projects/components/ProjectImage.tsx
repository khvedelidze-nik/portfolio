interface ImageProps {
  path: string;
}

const ProjectImage = ({ path }: ImageProps) => {
  return <img src={path} className="aspect-video w-full object-center" />;
};

export default ProjectImage;
