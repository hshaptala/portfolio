import "./style.css";
import Project from "./../../components/project/Project";

import { projects } from "./../../helpers/projectsList";

const Projects = () => {
  return (
    <main id="projects" className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects-list">
          {projects.map((project, index) => {
            return (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                img={project.img}
                index={index}
              />
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Projects;
