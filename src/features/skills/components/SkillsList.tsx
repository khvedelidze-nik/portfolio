import { useEffect, useState } from "react";
import { skills } from "../data/skills";
import SkillCategory from "./SkillCategory";
import SkillItem from "./SkillItem";
import type { SkillsInterface } from "../interfaces/SkillsInterface";

const SkillsList = () => {
  const [skillsData, setSkillsData] = useState<SkillsInterface[]>();

  useEffect(() => {
    const data = skills;
    setSkillsData(data);
  }, []);

  return (
    <div className="flex flex-col flex-wrap justify-between gap-8 px-1 sm:grid sm:grid-cols-2 md:grid-cols-4">
      {skillsData &&
        skillsData.map((data, i) => (
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
