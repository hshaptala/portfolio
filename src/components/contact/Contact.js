import "./style.css";

const Contact = () => {
  return (
    <main id="contact" className="section">
      <div className="container">
        <h1 className="title-1">Contact</h1>

        <ul className="content-list">
          <li className="content-list-item">
            <h2 className="title-2">Location</h2>
            <p>Bordeaux, France</p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Mail</h2>
            <p>
              <a href="mailto:hlib.shaptala@etu.u-bordeaux.fr">
                hlib.shaptala@etu.u-bordeaux.fr
              </a>
            </p>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Contact;
