import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";

const SkillsList = () => {
  return (
    <div
      className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      role="list"
      aria-label="Skill categories"
    >
      {skills.map((data, i) => (
        <SkillCategory key={"skill-category-" + i} index={i}>
          {data.category}

          <ul
            className="mt-4 space-y-2"
            role="list"
            aria-label={`${data.category} skills`}
          >
            {data.items.map((skill) => (
              <SkillItem key={"skill-" + skill.title} title={skill.description}>
                {skill.title}
              </SkillItem>
            ))}
          </ul>
        </SkillCategory>
      ))}
    </div>
  );
};

export default SkillsList;
