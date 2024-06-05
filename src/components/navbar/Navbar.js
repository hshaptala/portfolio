import React, { useState, useEffect } from "react";

import { Link as ScrollLink } from "react-scroll";
import "./style.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 200;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section);
        }
      });

      setIsNavbarFixed(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const normalLink = "nav-list-link";
  const activeLink = "nav-list-link--active";
  const navbarClass = isNavbarFixed ? "nav nav--fixed" : "nav";

  return (
    <nav className={navbarClass}>
      <div className="container">
        <div className="nav-row">
          <ScrollLink to="header" smooth={true} duration={500} className="logo">
            <strong>Shaptala</strong> Hlib
          </ScrollLink>
          <ul className="nav-list">
            <li className="nav-list-item">
              <ScrollLink
                to="header"
                smooth={true}
                duration={500}
                className={`${normalLink} ${
                  activeSection === "header" ? activeLink : ""
                }`}
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className={`${normalLink} ${
                  activeSection === "about" ? activeLink : ""
                }`}
              >
                About
              </ScrollLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                className={`${normalLink} ${
                  activeSection === "projects" ? activeLink : ""
                }`}
              >
                Projects
              </ScrollLink>
            </li>
            <li className="nav-list-item">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className={`${normalLink} ${
                  activeSection === "contact" ? activeLink : ""
                }`}
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
