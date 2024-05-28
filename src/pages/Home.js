import Header from "./../components/header/Header";
import Project from "../components/project/Project";

import { languages, tools, frameworks } from "./../helpers/skills";
import { projects } from "./../helpers/projectsList";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <h2 className="title-1">Skills</h2>
          <div className="content-category-container">
            <div className="content-category">
              <h2>Languages</h2>
              <ul className="content-category-list">
                {languages.map((skill, index) => (
                  <li key={index} className="content-category-list-item">
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-category">
              <h2>Tools</h2>
              <ul className="content-category-list">
                {tools.map((skill, index) => (
                  <li key={index} className="content-category-list-item">
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="content-category">
              <h2>Frameworks</h2>
              <ul className="content-category-list">
                {frameworks.map((skill, index) => (
                  <li key={index} className="content-category-list-item">
                    <img src={skill.img} alt={skill.name} />
                    <p>{skill.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="container">
          <h2 className="title-1">Projects</h2>
          <ul className="projects">
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
    </>
  );
};

export default Home;
