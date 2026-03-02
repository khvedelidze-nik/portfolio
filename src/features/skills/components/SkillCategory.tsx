import type { ReactNode } from "react";

const SkillCategory = ({ children }: { children: ReactNode }) => {
  return <ul className="text-accent text-xl font-bold">{children}</ul>;
};

export default SkillCategory;
