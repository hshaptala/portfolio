import "./style.css";

import map from "./../../img/icons/map.png";
import mail from "./../../img/icons/mail.png";

const Contact = () => {
  return (
    <main id="contact" className="section">
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-info-item">
            <img src={map} alt="map" />
            <div className="contact-info-text">
              <h3>Location</h3>
              <p>Bordeaux, France</p>
            </div>
          </div>
          <div className="contact-info-item">
            <img src={mail} alt="mail" />
            <div className="contact-info-text">
              <h3>Mail</h3>
              <p>hlib.shaptala@etu.u-bordeaux.fr</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h3>Interested? Hit me up! 👇</h3>
          <form
            action="mailto:hlib.shaptala@etu.u-bordeaux.fr"
            method="post"
            enctype="text/plain"
          >
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Your message here*"
                required
              ></textarea>
            </div>
            <button className="btn btn-contact" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
