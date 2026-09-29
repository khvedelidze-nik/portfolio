const ExperienceHeader = () => {
  return (
    <div className="text-text px-1 md:text-base">
      <p className="text-accent text-xl font-semibold sm:text-2xl">
        Frontend Developer — Personal Projects
      </p>
      <ul className="list-inside list-disc px-1 font-thin">
        <li>Developed multiple React applications using TypeScript</li>
        <li>Built reusable component-based architectures</li>
        <li>Integrated REST APIs and handled async data</li>
        <li>Implemented responsive design using Tailwind CSS</li>
        <li>Focused on performance and clean code practices</li>
      </ul>
      <span className="text-muted pl-3 text-sm italic">
        Apr. 2025 - Present
      </span>
    </div>
  );
};

export default ExperienceHeader;
