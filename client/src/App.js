
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import './App.css'; // Import your CSS file for styling
import Forms from './components/form/Form';
import TermsAndConditions from './components/Term&Condition/Term';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutUsPage from './Pages /Theme/theme';
import Branches from './components/Branch/Branch';
import HeadingComponent from './components/Heading/Heading';


const App = () => {

  

  return (
    <Router>
        
       
        <Routes>
          <Route path="/" element={<>
          
          <Navbar/>
          <HeadingComponent />
           <Footer/>
          </>} />
          <Route path='/Booking' element={<Forms/>}/>
          <Route path='/about' element={<AboutUsPage/>}/>
          <Route path='/term' element={<TermsAndConditions/>}/>
          <Route path='/branch' element={<Branches/>}/>
        </Routes>
    </Router>
  );
};

export default App;
