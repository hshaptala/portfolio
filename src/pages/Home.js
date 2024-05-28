import html from "./../img/icons/html.png";
import css from "./../img/icons/css.png";
import js from "./../img/icons/js.png";
import sql from "./../img/icons/sql.png";
import java from "./../img/icons/java.png";
import python from "./../img/icons/python.png";
import csharp from "./../img/icons/csharp.png";
import c from "./../img/icons/c.png";
import git from "./../img/icons/git.png";
import react from "./../img/icons/react.png";
import bash from "./../img/icons/bash.png";
import wordpress from "./../img/icons/wordpress.png";

import Header from "./../components/header/Header";

const Home = () => {
  return (
    <>
      <Header />

      <main className="section">
        <div className="container">
          <div className="content-category">
            <h2>Languages</h2>
            <ul className="content-category-list">
              <li className="content-category-list-item">
                <img src={html} alt="HTML" />
                <p>HTML</p>
              </li>
              <li className="content-category-list-item">
                <img src={css} alt="CSS" />
                <p>CSS</p>
              </li>
              <li className="content-category-list-item">
                <img src={js} alt="JavaScript" />
                <p>JavaScript</p>
              </li>
              <li className="content-category-list-item">
                <img src={java} alt="Java" />
                <p>Java</p>
              </li>
              <li className="content-category-list-item">
                <img src={python} alt="Python" />
                <p>Python</p>
              </li>
              <li className="content-category-list-item">
                <img src={c} alt="C" />
                <p>C</p>
              </li>
              <li className="content-category-list-item">
                <img src={csharp} alt="C#" />
                <p>C#</p>
              </li>
              <li className="content-category-list-item">
                <img src={sql} alt="SQL" />
                <p>SQL</p>
              </li>

              <li className="content-category-list-item">
                <img src={bash} alt="Bash" />
                <p>Bash</p>
              </li>
            </ul>
          </div>

          <div className="content-category">
            <h2>Tools</h2>
            <ul className="content-category-list">
              <li className="content-category-list-item">
                <img src={git} alt="Git" />
                <p>Git</p>
              </li>
              <li className="content-category-list-item">
                <img src={wordpress} alt="WordPress" />
                <p>WordPress</p>
              </li>
            </ul>
          </div>
          <div className="content-category">
            <h2>Frameworks</h2>
            <ul className="content-category-list">
              <li className="content-category-list-item">
                <img src={react} alt="React" />
                <p>React</p>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
