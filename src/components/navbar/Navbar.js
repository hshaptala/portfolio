import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [isNavbarFixed, setIsNavbarFixed] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsNavbarFixed(window.scrollY > 20);
    };

    if (location.pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (location.pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [location.pathname]);

  const navbarClass = isNavbarFixed ? "nav nav--fixed" : "nav";

  if (location.pathname.startsWith("/project")) {
    return (
      <nav className="nav nav--center">
        <Link to="/" className="logo">
          <strong>Shaptala</strong> Hlib
        </Link>
      </nav>
    );
  }

  return (
    <nav className={navbarClass}>
      <div className="container">
        <div className="nav-row">
          <Link to="/" className="logo">
            <strong>Shaptala</strong> Hlib
          </Link>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" className="nav-list-link">
                Home
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/#about" className="nav-list-link">
                About
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/#projects" className="nav-list-link">
                Projects
              </Link>
            </li>
            <li className="nav-list-item">
              <Link to="/#contact" className="nav-list-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
