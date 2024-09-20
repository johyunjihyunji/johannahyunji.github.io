import * as React from "react"
import styled from 'styled-components';

// Style
import './style/Home.css'

//Landing Page
import IntroductionSlide from './Components/IntroductionSlide';
import ProjectSlide from './Components/ProjectSlide';


const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;


function Home() {
  return (
      <AppContainer>
        <IntroductionSlide />
        <ProjectSlide />
      </AppContainer>
  );
}


export default Home