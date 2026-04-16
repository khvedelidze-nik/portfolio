import LinkIcon from "./LinkIcon";

interface BtnProps {
  path: string;
  icon: string;
  name: string;
  children: React.ReactNode;
}

const LinkBtn = ({ path, icon, name, children }: BtnProps) => {
  return (
    <a
      href={path}
      target="_blank"
      title={name}
      className="text-accent font-base flex w-fit gap-2 p-1 hover:brightness-90"
    >
      <LinkIcon src={icon} />
      {children}
    </a>
  );
};

export default LinkBtn;
