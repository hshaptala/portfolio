import Header from "./../components/header/Header";

import { languages, tools, frameworks } from "./../helpers/skills";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
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
      </main>
    </>
  );
};

export default Home;
