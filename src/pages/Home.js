import Header from "./../components/header/Header";
import Project from "../components/project/Project";

import { languages, tools, frameworks } from "./../helpers/skills";
import { projects } from "./../helpers/projectsList";

import me from "./../img/about/me.jpg";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container about-container">
          <div className="about-text-container">
            <h1 className="intro">
              Hi{" "}
              <span role="img" aria-label="wave">
                👋
              </span>
              ,<br />
              I’m Gleb,
              <br />
              IT Student
            </h1>
            <p className="about-description">
              I'm an IT student at the University of Bordeaux. My passion for
              Information Technologies started when I was 12 years old. I
              started with Python. Then I learned HTML and CSS. Now I'm learning
              React. I'm also interested in C/C++ languages. Currently, I'm
              looking for an internship in web development.
            </p>
            <button className="btn btn-black">See My Projects</button>
          </div>
          <img src={me} alt="me" className="about-image" />
        </div>

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
