import "./style.css";
import about from "./../../img/about/about.jpeg";

const About = () => {
  return (
    <main id="about" className="section">
      <div className="container">
        <div className="about">
          <img src={about} alt="about" id="about-img" />
          <div className="about-text">
            <h3>About me</h3>
            <p>
              Hey, my name is Gleb, I'm studying at the University of Bordeaux.
              <br></br>
              <br></br>I started with Python when I was 12. Then I learned HTML
              and CSS. Now I'm learning React. I'm also interested in C-family
              languages.
              <br></br>
              <br></br>
              I'm passioned for problem-solving and creating efficient
              solutions. I enjoy working on collaborative projects and I'm
              always eager to learn new technologies. My goal is to improve my
              skills and grow as a professional. Currently, I'm looking for an
              internship in web and game development.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
