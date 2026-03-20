import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

const SkillsList = () => {
  return (
    <div className="flex flex-col flex-wrap gap-8 px-1 sm:flex-row">
      {skills.map((data, i) => (
        <SkillCategory key={"skill-category-" + i}>
          {data.category}

          {data.items.map((skill) => (
            <SkillItem key={"skill-" + skill}>{skill}</SkillItem>
          ))}
        </SkillCategory>
      ))}
    </div>
  );
};

export default SkillsList;
