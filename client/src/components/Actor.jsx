import React, { useState } from 'react';
import './actor.css';

const Actor = React.memo(({ data }) => {
  // State to manage the popup
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  // Function to open the popup
  const openPopup = () => {
    setIsPopupOpen(true);
  };

  // Function to close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="card-container">
        {data?.map((item, index) => (
          <div key={index} className="card-item">
            <div className="card-img-container">
              <img className="card-img-top" src={item.image} alt={`${item.name} image`} />
            </div>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <button className="btn btn-enquiry" onClick={openPopup}>Enquiry</button>
            </div>
          </div>
        ))}
      </div>

      {isPopupOpen && (
        <>
        <div className="popup-overlay active" onClick={closePopup}></div>
        <div className="popup active">
          <button className="popup-close" onClick={closePopup}>&times;</button>
          <h2>Enquiry Form</h2>
          <form>
            <label>
              Name:
              <input type="text" name="name" required />
            </label>
            <label>
              Email:
              <input type="email" name="email" required />
            </label>
            <label>
              Message:
              <textarea name="message" required></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    )}
  </>
  );
}, (prevProps, nextProps) => {
  // Custom comparison function
  return prevProps.data === nextProps.data;
});

export default Actor;
