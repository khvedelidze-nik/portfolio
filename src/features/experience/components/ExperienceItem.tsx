import ExperienceAchievement from "./ExperienceAchievement";

interface ItemProps {
  from: string;
  name: string;
  achievements: string[];
  date: string;
}

const ExperienceItem = ({ from, name, achievements, date }: ItemProps) => {
  return (
    <li className="relative pl-6 border-l border-border/50 ml-2">
      <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-accent border-2 border-bg" aria-hidden="true" />
      <div className="mb-1">
        <span className="font-mono text-accent text-sm font-medium">{from}</span>
        <span className="text-text ml-2 font-medium">{name}</span>
      </div>
      {achievements && achievements.length > 0 && (
        <ul className="mt-3 space-y-2 pl-2" role="list" aria-label="Achievements">
          {achievements.map((achievement, i) => (
            <ExperienceAchievement key={i}>{achievement}</ExperienceAchievement>
          ))}
        </ul>
      )}
      {date && (
        <time className="text-muted text-sm italic block mt-3" dateTime={date}>
          {date}
        </time>
      )}
    </li>
  );
};

export default ExperienceItem;