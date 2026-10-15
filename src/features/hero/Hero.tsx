import HeroLinks from "./components/HeroLinks";
import HeroText from "./components/HeroText";

const Hero = () => {
  return (
    <section
      className="bg-hero flex min-h-[calc(80dvh-80px)] sm:min-h-[calc(100dvh-80px)] items-center px-4 pt-12 sm:pt-20"
      id="hero"
      aria-labelledby="hero-heading"
    >
      <div className="animate-fade-in mx-auto w-full max-w-4xl">
        <HeroText />
        <HeroLinks />
      </div>
    </section>
  );
};

export default Hero;
