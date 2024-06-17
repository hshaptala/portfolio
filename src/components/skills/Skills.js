import "./style.css";
import { languages, tools, frameworks } from "../../helpers/skills";

const Skills = () => {
  return (
    <main id="skills" className="section">
      <div className="container">
        <h1 className="title-1">Skills</h1>
        <div className="skills-container">
          <div className="skills">
            <h2>Languages</h2>
            <ul className="skills-list">
              {languages.map((skill, index) => (
                <li key={index} className="skills-list-item">
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills">
            <h2>Tools</h2>
            <ul className="skills-list">
              {tools.map((skill, index) => (
                <li key={index} className="skills-list-item">
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="skills">
            <h2>Frameworks</h2>
            <ul className="skills-list">
              {frameworks.map((skill, index) => (
                <li key={index} className="skills-list-item">
                  <img src={skill.img} alt={skill.name} />
                  <p>{skill.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;
