import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import { languages, tools, frameworks } from "./../helpers/skills";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  const allSkills = [
    ...languages.map((skill) => ({ ...skill, category: "Languages" })),
    ...tools.map((skill) => ({ ...skill, category: "Tools" })),
    ...frameworks.map((skill) => ({ ...skill, category: "Frameworks" })),
  ];

  const getSkill = (skillName) => {
    return allSkills.find((skill) => skill.name === skillName);
  };

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>
          <p className="project-details-desc">{project.description}</p>
          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details-cover"
          />
          <h2 className="title-2">Description</h2>
          <p className="project-details-full-desc">{project.fullDescription}</p>
          <div className="skills">
            <h2 className="title-1">Skills</h2>
            <ul className="skills-list">
              {project.skills.map((skillName) => {
                const skill = getSkill(skillName);
                return (
                  <li key={skillName} className="skills-list-item">
                    <img
                      src={skill.img}
                      alt={skill.name}
                      className="skill-icon"
                    />
                    <p>{skill.name}</p>
                  </li>
                );
              })}
            </ul>
          </div>
          <BtnGitHub link={project.link} />
        </div>
      </div>
    </main>
  );
};

export default Project;
