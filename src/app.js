import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'gatsby';

//Header & Footer
// import Header from './Components/Header';
// import Footer from './Components/Footer';

//projects
import Broke from './pages/Broke';
import ESNetMRDP from './pages/ESNetMRDP';
import SiaPartners from './pages/SiaPartners';
import Waymo from './pages/Waymo';
import Yelp from './pages/Yelp';

//Landing Page
import Home from './pages/index';
import ProjectSlide from './Components/ProjectSlide';


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
      </Routes>
      </div>
      <ProjectSlide />
      <Footer />
    </Router>
    // <>
    //   <Header />
    //   <main>
    //     {children || <Home />}  {/* Render children if present, otherwise render Home */}
    //   </main>
    //   <Footer />
    // </>
  );
}

export default App