import me from "./../img/about/me.jpg";

const About = () => {
  return (
    <main className="section">
      <h2 className="title-1">About</h2>
      <div className="container about-container">
        <div className="about-text-container">
          <h1 className="intro">
            Hi{" "}
            <span role="img" aria-label="wave">
              👋
            </span>
            ,<br />
            I’m Gleb,
            <br />
            IT Student
          </h1>
          <p className="about-description">
            I'm an IT student at the University of Bordeaux. My passion for
            Information Technologies started when I was 12 years old. I started
            with Python. Then I learned HTML and CSS. Now I'm learning React.
            I'm also interested in C/C++ languages. Currently, I'm looking for
            an internship in web development.
          </p>
          <button className="btn btn-black">See My Projects</button>
        </div>
        <img src={me} alt="me" className="about-image" />
      </div>
    </main>
  );
};

export default About;
