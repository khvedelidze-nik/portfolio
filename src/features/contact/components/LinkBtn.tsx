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
      className="text-accent hover:text-accentHover font-base flex w-fit gap-2 p-1"
    >
      <LinkIcon src={icon} />
      {name}
    </a>
  );
};

export default LinkBtn;
