import type { ReactNode } from "react";

interface ExperienceCategoryProps {
  children: ReactNode;
  index: number;
}

const ExperienceCategory = ({ children, index }: ExperienceCategoryProps) => {
  return (
    <li
      className="animate-slide-up p-8 bg-card/90 border border-border rounded-xl transition-all duration-300 hover:border-accent/30 hover:shadow-lg flex flex-col justify-center items-center"
      style={{ animationDelay: `${Math.min(index * 150, 600)}ms` }}
      role="listitem"
    >
      <h3 className="text-accent text-xl font-semibold mb-4 flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        {children}
      </h3>
    </li>
  );
};

export default ExperienceCategory;