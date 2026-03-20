import ExperienceAchievement from "./ExperienceAchievement";

interface ItemProps {
  from: string;
  name: string;
  achievements: string[];
}

const ExperienceItem = ({ from, name, achievements }: ItemProps) => {
  return (
    <li className="text-text px-1 text-sm font-normal md:text-base lg:text-lg">
      <span className="font-mono">{from}</span> - {name}
      {achievements && (
        <ul className="list-inside list-disc px-1 text-base">
          {achievements.map((achievement, i) => (
            <ExperienceAchievement key={i}>{achievement}</ExperienceAchievement>
          ))}
        </ul>
      )}
    </li>
  );
};

export default ExperienceItem;
