import * as React from "react"

// Style
import '../style/Home.css'

//Landing Page
import IntroductionSlide from '../Components/IntroductionSlide';
// import ProjectSlide from '../Components/ProjectSlide';
//        //<ProjectSlide />

//Header & Footer
import Header from '../Components/Header';
import Footer from '../Components/Footer';



function Home() {
  return (
    <div>
    <Header />
      <div className = 'AppContainer'>
        <IntroductionSlide />
      </div>
    <Footer />
    </div>
  );
}


export default Home