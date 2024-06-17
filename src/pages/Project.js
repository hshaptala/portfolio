import { useParams } from "react-router-dom";
import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "../helpers/projectsList";
import { languages } from "../helpers/skills";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

  const getLanguage = (language) => {
    return languages.find((lang) => lang.name === language);
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
              {project.skills.map((skill) => {
                const language = getLanguage(skill);
                return (
                  <li key={skill} className="skills-list-item">
                    <img
                      src={language.img}
                      alt={language.name}
                      className="skill-icon"
                    />
                    <p>{language.name}</p>
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
