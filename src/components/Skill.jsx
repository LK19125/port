import SkillDonut from "./SkillDonut";

const skills = [
  { skill: "HTML", percent: 90 },
  { skill: "CSS", percent: 85 },
  { skill: "JavaScript", percent: 50 },
  { skill: "React", percent: 45 },
  { skill: "Python", percent: 75 },
];

const Skills = () => {
  return (
    <>
      <h1 className="title">Skills</h1>
      <div className="skill-place align">
        <div className="skill">
          {skills.map((s, idx) => (
            <SkillDonut key={idx} skill={s.skill} percent={s.percent} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
