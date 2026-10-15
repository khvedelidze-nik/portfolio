import type { ReactNode } from "react";

interface SkillCategoryProps {
  children: ReactNode;
  index: number;
}

const SkillCategory = ({ children, index }: SkillCategoryProps) => {
  return (
    <li
      className="animate-slide-up p-5 bg-card border border-border rounded-xl transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
      style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
      role="listitem"
    >
      <h3 className="text-accent text-xl font-semibold mb-3 flex items-center gap-2">
        <span
          className="w-2 h-2 rounded-full bg-accent"
          aria-hidden="true"
        />
        {children}
      </h3>
    </li>
  );
};

export default SkillCategory;