import type { ReactNode } from "react";

const SkillItem = ({ children }: { children: ReactNode }) => {
  return (
    <li className="text-text md:text-md pl-2 text-sm lg:text-lg">{children}</li>
  );
};

export default SkillItem;
