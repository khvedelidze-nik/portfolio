import Accent from "./Accent";

const HeroText = () => {
  return (
    <span className="text-text text-2xl font-bold">
      Nikoloz Khvedelidze <br /> <Accent>Frontend Developer (React)</Accent>
      <br />
      <br />I build <Accent>responsive</Accent>, <Accent>scalable</Accent> web
      applications using <Accent>React</Accent>, <br />
      <Accent>TypeScript</Accent>, and modern frontend tooling.
    </span>
  );
};

export default HeroText;
