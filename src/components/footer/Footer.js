import github from "./../../img/icons/gitHub.svg";
import linkedin from "./../../img/icons/linkedin.svg";

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
                href="https://www.linkedin.com/in/hlib-shaptala-6299b2312/"
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
