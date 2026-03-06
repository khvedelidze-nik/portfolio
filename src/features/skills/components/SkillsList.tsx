import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

const SkillsList = () => {
  return (
    <div className="flex flex-col flex-wrap gap-8 px-4 sm:flex-row">
      {skills.map((data, i) => (
        <SkillCategory key={"category-" + i}>
          {data.category}

          {data.items.map((skill, i) => (
            <SkillItem key={"skill-" + i}>{skill}</SkillItem>
          ))}
        </SkillCategory>
      ))}
    </div>
  );
};

export default SkillsList;
