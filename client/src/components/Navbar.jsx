// MenuBar.js

import React, { useState } from 'react';
import './navbar.css'; // Import your CSS file for styling
import { Bhojpuri, Bengali, Punjabi, BollyWood } from '../../src/Data/data.js';
import Actor from './Actor.jsx';
import Drawer from './Drawer/Drawer.jsx';
import img from '../../src/assects/image/Indian-event.png';

const Navbar = () => {
  const [selectedOption, setSelectedOption] = useState('');
  const [actor, setActor] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-logo">
          <img src={img} alt="logo" />
        </div>
        <div className="navbar-dropdown">
          <select className="custom-select" value={selectedOption} onChange={handleChange}>
            <option value="" disabled hidden>Book Now</option>
            <option value="Bollywood">Bollywood</option>
            <option value="Bhojpuri">Bhojpuri</option>
            <option value="Bengali">Bengali</option>
            <option value="Punjabi">Punjabi</option>
          </select>
        </div>
        <button className="drawer-btn" onClick={toggleDrawer}><i className="fa-solid fa-bars"></i></button>
      </div>
      <Actor data={actor} />
      <Drawer isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
