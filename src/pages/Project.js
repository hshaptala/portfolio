import { useParams } from "react-router-dom";

import BtnGitHub from "../components/btnGitHub/BtnGitHub";
import { projects } from "./../helpers/projectsList";
import java from "./../img/icons/java.png";

const Project = () => {
  const { id } = useParams();
  const project = projects[id];

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
          <div className="content-category">
            <h2>Skills</h2>
            <ul className="content-category-list">
              <li className="content-category-list-item">
                <img src={java} alt="Java" />
                <p>Java</p>
              </li>
            </ul>
          </div>
          {project.link && <BtnGitHub link="https://github.com/hshaptala" />}
        </div>
      </div>
    </main>
  );
};

export default Project;
