import KeyWord from "./KeyWord";

const HeroText = () => {
  return (
    <span className="text-text text-2xl font-bold">
      Nikoloz Khvedelidze <br /> <KeyWord>Frontend Developer (React)</KeyWord>
      <br />
      <br />I build <KeyWord>responsive</KeyWord>, <KeyWord>scalable</KeyWord>{" "}
      web applications using <KeyWord>React</KeyWord>, <br />
      <KeyWord>TypeScript</KeyWord>, and modern frontend tooling.
    </span>
  );
};

export default HeroText;
