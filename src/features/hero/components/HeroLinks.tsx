import { links } from "../data/links";
import LinkBtn from "@/components/ui/LinkBtn";

const HeroLinks = () => {
  return (
    <nav
      className="flex flex-wrap gap-3 animate-slide-up delay-3"
      aria-label="Social links"
    >
      {links.map((data) => (
        <LinkBtn
          key={data.name}
          href={data.url}
          icon={data.icon}
          iconAlt={data.name}
          variant="primary"
          className="whitespace-nowrap"
        >
          {data.name}
        </LinkBtn>
      ))}
    </nav>
  );
};

export default HeroLinks;