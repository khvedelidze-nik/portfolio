import { experiences } from "../data/experiences";
import ExperienceCategory from "./ExperienceCategory";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  return (
    <div className="mt-4 flex flex-col flex-wrap gap-4 px-1 sm:flex-row sm:gap-8">
      {experiences.map((data, i) => (
        <ExperienceCategory key={"experience-category-" + i}>
          {data.category}

          {data.items.map((item) => (
            <ExperienceItem
              key={"experience-" + item.name}
              from={item.from}
              name={item.name}
              achievements={item.achievements}
            />
          ))}
        </ExperienceCategory>
      ))}
    </div>
  );
};

export default ExperienceList;
