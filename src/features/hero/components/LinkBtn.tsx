import LinkIcon from "./LinkIcon";

interface BtnProps {
  name: string;
  href: string;
  icon: string;
}

const LinkBtn = ({ name, href, icon }: BtnProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-accent hover:text-accentHover flex gap-1 p-1 font-semibold"
    >
      <LinkIcon src={icon} />
      {name}
    </a>
  );
};

export default LinkBtn;
