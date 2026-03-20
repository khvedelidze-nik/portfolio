import type { ReactNode } from "react";

const ExperienceCategory = ({ children }: { children: ReactNode }) => {
  return <ul className="text-accent text-xl font-semibold">{children}</ul>;
};

export default ExperienceCategory;
