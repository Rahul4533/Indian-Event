// HeadingComponent.js

import React from 'react';
import './heading.css';
import img from '../../assects/image/Indian-event.png'; // Ensure correct path to image

const HeadingComponent = () => {
    return (
      <div className="heading-container">
        <header className="heading-header">
          <img src={img} alt="Indian Event" className="heading-logo" />
          <h1 className="heading-title">Indian Event Celebrity Management</h1>
          <p className="heading-subtitle">Bringing Stars Closer to You</p>
        </header>
      </div>
    );
  };

export default HeadingComponent;
