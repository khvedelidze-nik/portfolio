import { experiences } from "../data/experiences";
import ExperienceCategory from "./ExperienceCategory";
import ExperienceItem from "./ExperienceItem";

const ExperienceList = () => {
  return (
    <div
      className="grid grid-cols-1 gap-12 lg:grid-cols-2"
      role="list"
      aria-label="Experience categories"
    >
      {experiences.map((data, i) => (
        <ExperienceCategory key={"experience-category-" + i} index={i}>
          {data.category}

          <ul
            className="mt-4 space-y-4"
            role="list"
            aria-label={`${data.category} items`}
          >
            {data.items.map((item) => (
              <ExperienceItem
                key={"experience-" + item.id}
                from={item.from}
                name={item.name}
                achievements={item.achievements}
                date={item.date}
              />
            ))}
          </ul>
        </ExperienceCategory>
      ))}
    </div>
  );
};

export default ExperienceList;
