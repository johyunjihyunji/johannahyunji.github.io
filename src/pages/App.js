import * as React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//Header & Footer
import Header from './Components/Header';
import Footer from './Components/Footer';

//projects
import Broke from './Projects/Broke';
import ESNetMRDP from './Projects/ESNetMRDP';
import SiaPartners from './Projects/SiaPartners';
import Waymo from './Projects/Waymo';
import Yelp from './Projects/Yelp';

//Landing Page
import Home from './Components/Home';


function App({ children }) {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="Projects/Broke" element={<Broke />} />
          <Route path="Projects/ESNetMRDP" element={<ESNetMRDP />} />
          <Route path="Projects/SiaPartners" element={<SiaPartners />} />
          <Route path="Projects/Waymo" element={<Waymo />} />
          <Route path="Projects/Yelp" element={<Yelp />} />
        </Routes>
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