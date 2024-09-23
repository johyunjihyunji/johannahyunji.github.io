import * as React from "react"

// Style
import '../style/Home.css'

//Landing Page
import IntroductionSlide from './IntroductionSlide';
import ProjectSlide from './ProjectSlide';



function Home() {
  return (
      <div className = 'AppContainer'>
        <IntroductionSlide />
        <ProjectSlide />
      </div>
  );
}


export default Home