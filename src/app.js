import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//projects
import Broke from './pages/Broke';
import ESNetMRDP from './pages/ESNetMRDP';
import SiaPartners from './pages/SiaPartners';
import Waymo from './pages/Waymo';
import Yelp from './pages/Yelp';
import About from './pages/About';

//Landing Page
import Home from './pages/index';
import ProjectSlide from './Components/ProjectSlide';

//Custom Cursor
import CustomCursor from '../Components/CustomCursor';


function App() {
  return (
    <Router>
    <div className = 'AppContainer'>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Broke" element={<Broke />} />
          <Route path="/ESNetMRDP" element={<ESNetMRDP />} />
          <Route path="/SiaPartners" element={<SiaPartners />} />
          <Route path="/Waymo" element={<Waymo />} />
          <Route path="/Yelp" element={<Yelp />} />
          <Route path="/About" element={<About />} />
      </Routes>
      <IntroductionSlide />
      <ProjectSlide />
    </div>
  </Router>
  )
}

export default App