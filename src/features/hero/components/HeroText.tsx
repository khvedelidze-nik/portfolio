import Accent from "./Accent";

const HeroText = () => {
  return (
    <span className="text-text block text-xl font-bold sm:text-2xl md:max-w-2/3 md:text-4xl">
      Nikoloz Khvedelidze <br /> <Accent>Frontend Developer (React)</Accent>
      <br />
      <br />I build <Accent>responsive</Accent>, <Accent>scalable</Accent> web
      applications using <Accent>React</Accent>, <Accent>TypeScript</Accent>,
      and modern frontend tooling.
      <br /> <br />
      <hr />
      <span className="text-accent text-base">
        This portfolio is a work in progress. Stay tuned for updates!
      </span>
    </span>
  );
};

export default HeroText;
