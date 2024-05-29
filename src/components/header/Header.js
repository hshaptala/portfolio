import "./style.css";

import uok from "./unicorn.jpg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <h1 className="header-title">
          <strong>Hi, I'm Gleb</strong>
          <br />
          Welcome to my portfolio
        </h1>
        <div className="header-text">
          <p></p>
        </div>
        <a className="btn" href={uok} target="_blank" rel="noopener noreferrer">
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
