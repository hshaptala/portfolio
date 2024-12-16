import github from "./../../img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedIn.svg";

import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <ul className="social">
            <li className="social-item">
              <a
                href="https://github.com/hshaptala"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="Link" />
              </a>
            </li>
            <li className="social-item">
              <a
                href="https://www.linkedin.com/in/hlib-shaptala/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedin} alt="Link" />
              </a>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2024 Shaptala Hlib</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
