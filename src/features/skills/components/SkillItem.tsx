import type { ReactNode } from "react";

const SkillItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="text-text md:text-md px-1 text-sm font-normal lg:text-lg">
      {children}
    </li>
  );
};

export default SkillItem;
