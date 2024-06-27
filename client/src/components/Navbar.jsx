// MenuBar.js

import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import {Bhojpuri,Bengali,Punjabi, BollyWood} from '../../src/Data/data.js';
import Actor from './Actor.jsx';
const Navbar = () => {
  

  const [selectedOption, setSelectedOption] = useState('');
  const [actor, setActor] = useState(null);

  
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);
    updateActorData(selectedValue);
  };

  const updateActorData = (value) => {
    switch (value) {
      case 'Bhojpuri':
        setActor(Bhojpuri);
        break;
      case 'Bengali':
        setActor(Bengali);
        break;
      case 'Punjabi':
        setActor(Punjabi);
        break;
      case 'Bollywood':
        setActor(BollyWood);
        break;
      default:
        setActor(null);
    }
  };

  return (
    <>
     <div className="m-2 navbar">
      <div className="dropdown">
        <select className="custom-select" value={selectedOption} onChange={handleChange}>
          <option value="" disabled hidden>Book Now</option>
          <option value="Bollywood">Bollywood</option>
          <option value="Bhojpuri">Bhojpuri</option>
          <option value="Bengali">Bengali</option>
          <option value="Punjabi">Punjabi</option>
        </select>
      </div>
    </div>
    <Actor data={actor}/>
      </>
  );
};

export default Navbar;
