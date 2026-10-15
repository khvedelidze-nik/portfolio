const HeroText = () => {
  return (
    <div className="space-y-4 animate-slide-up">
      <h1
        id="hero-heading"
        className="text-text font-bold tracking-tight leading-tight
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
      >
        Nikoloz Khvedelidze
        <br />
        <span className="text-accent font-normal">
          Frontend Developer (React)
        </span>
      </h1>

      <p className="text-muted max-w-2xl text-base sm:text-lg md:text-xl leading-relaxed animate-slide-up delay-1">
        I build <span className="text-text font-medium">responsive</span>,{" "}
        <span className="text-text font-medium">scalable</span> web applications
        using <span className="text-accent font-medium">React</span>,{" "}
        <span className="text-accent font-medium">TypeScript</span>, and modern
        frontend tooling.
      </p>

      <div className="flex items-center gap-4 animate-slide-up delay-2">
        <hr className="flex-1 border-border" aria-hidden="true" />
        <span className="text-accent text-sm sm:text-base font-medium whitespace-nowrap">
          This portfolio is a work in progress. Stay tuned for updates!
        </span>
      </div>
    </div>
  );
};

export default HeroText;