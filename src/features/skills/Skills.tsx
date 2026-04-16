import SkillsList from "./components/SkillsList";

const Skills = () => {
  return (
    <section className="bg-section-b min-h-40 max-w-full p-4" id="skills">
      <span className="text-text text-2xl font-bold sm:text-3xl">Skills</span>
      <SkillsList />
    </section>
  );
};

export default Skills;
