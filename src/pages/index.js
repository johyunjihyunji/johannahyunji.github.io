import React from "react";
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Style
import '../style/Home.css'

//Landing Page
import IntroductionSlide from '../Components/IntroductionSlide';
import ProjectSlide from '../Components/ProjectSlide';


// //Custom Cursor
// import CustomCursor from '../Components/CustomCursor';


//Header & Footer
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Home() {
  return (
      <>
      <Header />
      <div className = 'AppContainer'>
        <IntroductionSlide />
        <ProjectSlide />
      </div>
      <Footer />
      </>

  );
}


export default Home