import { NavLink } from "react-router-dom";
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
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-list-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
