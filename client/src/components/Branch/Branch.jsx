import React from 'react';
import './branch.css';

const Branches = () => {
  return (
    <section className="about-us">
      <button className="back-button" onClick={() => window.history.back()}>Back</button>
      <h1>About Us</h1>
      <p><em>Explore our branches around the world:</em></p>
      <div className="branch">
        <h2>Mauritius Office</h2>
        <address>
          5th Floor Jabar Tower Mindspace,<br />
          Bhumi Park, 45, Ebene Cybercity,<br />
          Mauritius<br />
          <strong>Phone:</strong> +230 403 4809
        </address>
      </div>
      <div className="branch">
        <h2>Qatar Office</h2>
        <address>
          941, Al Eithra Street, Zone 63,<br />
          Onaiza, P.O. Box 2788,<br />
          Doha - Qatar<br />
          <strong>Phone:</strong> +974 6520343
        </address>
      </div>
      <div className="branch">
        <h2>India Office (Navi Mumbai)</h2>
        <address>
          Janabai Smruti Sector-19,<br />
          Plot No A-157 Shop No.1,<br />
          Koparkhairne, Navi Mumbai,<br />
          Maharashtra - 400709
        </address>
      </div>
      <div className="branch">
        <h2>India Office (Kolkata)</h2>
        <address>
          3rd Floor Sangam Vihar Apartment,<br />
          30, Girish Chandra Bose Road,<br />
          Near Entally Market, Entally,<br />
          Kolkata - 700014
        </address>
      </div>
    </section>
  );
};

export default Branches;
