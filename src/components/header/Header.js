import "./style.css";
import { Link } from "react-scroll";
import me from "./../../img/about/me.jpg";

const Header = () => {
  return (
    <main id="header" className="section">
      <div className="container">
        <div class="header">
          <img src={me} alt="me" className="header-img" />
          <div className="header-text">
            <h1>
              IT Student
              <span role="img" aria-label="wave">
                👋
              </span>
            </h1>
            <p>
              Hi, I'm Hlib Shaptala. An IT student based in Bordeaux, France. 📍
            </p>
            <div className="btn-group">
              <button className="btn btn-black">
                <Link to="projects" smooth={true} duration={500}>
                  See My Projects
                </Link>
              </button>
              <button className="btn btn-contact">
                <Link to="contact" smooth={true} duration={500}>
                  Contact Me
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;
