import React from 'react';
import './Drawer.css';
import {Link} from 'react-router-dom'
const Drawer = ({ isOpen, toggleDrawer }) => {
  return (
    <div className={`drawer ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={toggleDrawer}>×</button>
      <ul>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
       <li><Link to={'/Booking'}>Booking Form</Link></li>
        <li><a href="#contacts">Contacts</a></li>
        <li><Link to={'/branch'}>Branches</Link></li>
      </ul>
    </div>
  );
};

export default Drawer;
