import "./style.css";

const Header = () => {
  const imagePath = process.env.PUBLIC_URL + "/assets/unicorn.jpg";

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
        <a
          className="btn"
          href={imagePath}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download CV
        </a>
      </div>
    </header>
  );
};

export default Header;
