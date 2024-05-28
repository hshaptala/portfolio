const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>

        <ul className="content-list">
          <li className="content-list-item">
            <h2 className="title-2">Location</h2>
            <p>15 Rue de Naudet, Gradignan</p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Phone number</h2>
            <p>
              <a href="tel:+79051234567">+33 7 45 72 63 45</a>
            </p>
          </li>
          <li className="content-list-item">
            <h2 className="title-2">Email</h2>
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

export default Contacts;
