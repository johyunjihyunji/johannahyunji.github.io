import * as React from "react"
import IntroductionSlide from './IntroductionSlide';
import ProjectSlide from './ProjectSlide';
import GridBackground from './GridBackground';


function Home() {
  return (
    <div>
      <GridBackground />
      <IntroductionSlide />
      <ProjectSlide />
    </div>

  );
}


export default Home