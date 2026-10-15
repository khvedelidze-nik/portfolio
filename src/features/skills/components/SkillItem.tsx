import type { ReactNode } from "react";

const SkillItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="text-text text-sm font-medium px-3 py-2 bg-cardHover rounded-lg border border-border transition-colors hover:border-accent/50 hover:bg-card hover:text-accent">
      {children}
    </li>
  );
};

export default SkillItem;