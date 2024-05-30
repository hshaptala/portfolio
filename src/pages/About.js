import about from "./../img/about/about.jpeg";

const About = () => {
  return (
    <main className="section">
      <h2 className="title-1">About</h2>
      <div className="container about-container">
        <img src={about} alt="about" id="about-img"></img>
        <div className="about-text-container">
          <p className="about-description">
            Hey, my name is Gleb, I'm studying at the University of Bordeaux. My
            passion for Information Technologies started when I was 12 years
            old. I started with Python. Then I learned HTML and CSS. Now I'm
            learning React. I'm also interested in C/C++ languages. Currently,
            I'm looking for an internship in web development.
          </p>
        </div>
      </div>
    </main>
  );
};

export default About;
