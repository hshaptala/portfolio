import "./style.css";
import { NavLink } from "react-router-dom";
import me from "./../../img/about/me.jpg";

const Header = () => {
  return (
    <main id="header" className="section">
      <div className="container header-container">
        <div className="header-text-container">
          <h1 className="intro">
            IT Student
            <span role="img" aria-label="wave">
              👋
            </span>
          </h1>
          <p className="header-description">
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
        <img src={me} alt="me" className="header-image" />
      </div>
    </main>
  );
};

export default Header;
