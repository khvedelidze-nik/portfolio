import ExperienceHeader from "./components/ExperienceHeader";
import ExperienceList from "./components/ExperienceList";

const Experience = () => {
  return (
    <div className="bg-section-b min-h-40 max-w-full p-4" id="experience">
      <span className="text-text text-2xl font-bold sm:text-3xl">
        Experience
      </span>
      <ExperienceHeader />
      <ExperienceList />
    </div>
  );
};

export default Experience;
