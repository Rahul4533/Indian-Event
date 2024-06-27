import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css'; // Import your CSS file for styling
import Forms from './components/form/Form';
import Logo from './components/Navbar';
import TermsAndConditions from './components/Term&Condition/Term';
import Footer from './components/Footer';


const App = () => {
  const [showTermsPopup, setShowTermsPopup] = useState(false);

  const toggleTermsPopup = () => {
    setShowTermsPopup(!showTermsPopup);
  };

  return (
    <Router>
        
       
        <Routes>
          <Route path="/" element={<>
          <Logo />
           <Forms/>
           <TermsAndConditions/>
           <Footer/>
          </>} />
        </Routes>
    </Router>
  );
};

export default App;
