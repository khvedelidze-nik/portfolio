interface BtnProps {
  path: string;
  children: React.ReactNode;
}

const LinkBtn = ({ path, children }: BtnProps) => {
  return (
    <a
      target="_blank"
      href={path}
      title="See Projects"
      className={`hover: rounded-md border-2 p-1 ${path ? `border-accent text-text hover:border-accentHover` : `border-border text-border`}`}
    >
      {children}
    </a>
  );
};

export default LinkBtn;
