import KeyWord from "./KeyWord";

const About = () => {
  return (
    <span className="text-3xl font-bold text-white">
      Nikoloz Khvedelidze <br /> <KeyWord>Frontend Developer (React)</KeyWord>
      <br />
      <br />I build <KeyWord>responsive</KeyWord>, <KeyWord>scalable</KeyWord>{" "}
      web applications using <KeyWord>React</KeyWord>, <br />
      <KeyWord>TypeScript</KeyWord>, and modern frontend tooling.
    </span>
  );
};

export default About;
