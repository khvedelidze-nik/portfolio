import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

const SkillsList = () => {
  return (
    <div className="flex flex-col gap-8 px-4 sm:flex-row">
      {skills.map((s) => (
        <SkillCategory>
          {s.category}
          {s.items.map((i) => (
            <SkillItem>{i}</SkillItem>
          ))}
        </SkillCategory>
      ))}
    </div>
  );
};

export default SkillsList;
