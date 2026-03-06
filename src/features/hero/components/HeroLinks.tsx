import { links } from "../data/links";
import LinkBtn from "./LinkBtn";

const HeroLinks = () => {
  return (
    <div className="flex gap-2">
      {links.map((data) => (
        <LinkBtn href={data.url} name={data.name} icon={data.icon} />
      ))}
    </div>
  );
};

export default HeroLinks;
