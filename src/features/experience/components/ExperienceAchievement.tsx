import type { ReactNode } from "react";

const ExperienceAchievement = ({ children }: { children: ReactNode }) => {
  return (
    <li className="text-text/90 text-sm leading-relaxed flex items-start gap-2">
      <span className="text-accent mt-1.5 shrink-0" aria-hidden="true">▸</span>
      <span className="font-normal">{children}</span>
    </li>
  );
};

export default ExperienceAchievement;