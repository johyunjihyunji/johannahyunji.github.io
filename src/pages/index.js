import * as React from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//Header & Footer
import Header from './Header';
import Footer from './Footer';

//Landing Page
import Home from './Home'
//Projects 
import Yelp from './Projects/Yelp';

function App() {
  return (

    <Router>
        <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Projects/Yelp" element={<Yelp />} />
          </Routes>
        <Footer />
    </Router>

  );
}

export default App