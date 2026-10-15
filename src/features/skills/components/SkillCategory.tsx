import { Children, type ReactNode } from "react";

interface SkillCategoryProps {
  children: ReactNode;
  index: number;
}

const SkillCategory = ({ children, index }: SkillCategoryProps) => {
  const childArray = Children.toArray(children);
  const title = childArray[0];
  const rest = childArray.slice(1);
  return (
    <li
      className="animate-slide-up bg-card border-border hover:border-accent/30 rounded-xl border p-5 transition-all duration-300 hover:shadow-lg"
      style={{ animationDelay: `${Math.min(index * 100, 500)}ms` }}
      role="listitem"
    >
      <h3 className="text-accent mb-3 flex items-center gap-2 text-xl font-semibold">
        <span className="bg-accent h-2 w-2 rounded-full" aria-hidden="true" />
        {title}
      </h3>
      {rest}
    </li>
  );
};

export default SkillCategory;
