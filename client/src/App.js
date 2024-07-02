import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'; // Import your CSS file for styling
import Forms from './components/form/Form';
import TermsAndConditions from './components/Term&Condition/Term';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUsPage from './Pages /Theme/theme';


const App = () => {

  

  return (
    <Router>
        
       
        <Routes>
          <Route path="/" element={<>
          <Navbar/>
           <AboutUsPage/>
           
           <Footer/>
          </>} />
          <Route path='/Booking' element={<Forms/>}/>
          <Route path='/term' element={<TermsAndConditions/>}/>
        </Routes>
    </Router>
  );
};

export default App;
