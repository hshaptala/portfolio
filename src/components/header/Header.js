import "./style.css";

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
        <a href="#!" className="btn">
          Explore projects
        </a>
      </div>
    </header>
  );
};

export default Header;
