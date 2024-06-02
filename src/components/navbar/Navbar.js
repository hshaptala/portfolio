import { NavLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./style.css";

const Navbar = () => {
  const normalLink = "nav-list-link";
  const activeLink = "nav-list-link nav-list-link--active";

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Shaptala</strong> Hlib
          </NavLink>
          <ul className="nav-list">
            <li className="nav-list-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={normalLink}
                activeClass={activeLink}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
