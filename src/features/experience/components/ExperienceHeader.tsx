const ExperienceHeader = () => {
  return (
    <div className="animate-slide-up mb-8 p-6 bg-card border border-border rounded-xl" role="region" aria-label="Current focus">
      <h3 className="text-accent text-xl font-semibold sm:text-2xl mb-4">
        Frontend Developer — Personal Projects
      </h3>
      <ul className="space-y-2 text-text/90" role="list" aria-label="Current focus highlights">
        <li className="flex items-start gap-2">
          <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
          Developed multiple React applications using TypeScript
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
          Built reusable component-based architectures
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
          Integrated REST APIs and handled async data
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
          Implemented responsive design using Tailwind CSS
        </li>
        <li className="flex items-start gap-2">
          <span className="text-accent mt-1 shrink-0" aria-hidden="true">▸</span>
          Focused on performance and clean code practices
        </li>
      </ul>
      <time className="text-muted text-sm italic block mt-4" dateTime="2025-04">
        Apr. 2025 - Present
      </time>
    </div>
  );
};

export default ExperienceHeader;