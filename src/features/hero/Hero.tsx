import HeroLinks from "./components/HeroLinks";
import HeroText from "./components/HeroText";

const Hero = () => {
  return (
    <section
      className="bg-hero min-h-[calc(100dvh-80px)] flex items-center px-4 pt-20"
      id="hero"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-4xl mx-auto animate-fade-in">
        <HeroText />
        <HeroLinks />
      </div>
    </section>
  );
};

export default Hero;