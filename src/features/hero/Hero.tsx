import HeroLinks from "./components/HeroLinks";
import HeroText from "./components/HeroText";

const Hero = () => {
  return (
    <section
      className="bg-hero grid min-h-40 max-w-full gap-10 p-4 pt-20"
      id="hero"
    >
      <HeroText />
      <HeroLinks />
    </section>
  );
};

export default Hero;
