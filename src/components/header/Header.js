import "./style.css";
import { NavLink } from "react-router-dom";
import me from "./../../img/about/me.jpg";

const Header = () => {
  return (
    <main id="about" className="section">
      <div className="container about-container">
        <div className="about-text-container">
          <h1 className="intro">
            IT Student
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="about-description">
            Hi, I'm Hlib Shaptala. An IT student based in Bordeaux, France. 📍
          </p>
          <div className="btn-group">
            <NavLink to="/projects">
              <button className="btn btn-black">See My Projects</button>
            </NavLink>
            <NavLink to="/contact">
              <button className="btn btn-contact">Contact Me</button>
            </NavLink>
          </div>
        </div>
        <img src={me} alt="me" className="about-image" />
      </div>
    </main>
  );
};

export default Header;
