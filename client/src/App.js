import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'; // Import your CSS file for styling
import Forms from './components/form/Form';
import TermsAndConditions from './components/Term&Condition/Term';
import Footer from './components/Footer';
import Navbar from './components/Navbar';


const App = () => {

  

  return (
    <Router>
        
       
        <Routes>
          <Route path="/" element={<>
          <Navbar/>
           
           <TermsAndConditions/>
           <Footer/>
          </>} />
          <Route path='/Booking' element={<Forms/>}/>
        </Routes>
    </Router>
  );
};

export default App;
