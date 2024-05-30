import Header from "./../components/header/Header";
import Project from "../components/project/Project";
import About from "./About";
import Skills from "./../components/skills/Skills";

import { projects } from "./../helpers/projectsList";

const Home = () => {
  return (
    <>
      <Header />
      <main className="section">
        <About />
        <Skills />

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
