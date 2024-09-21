import * as React from "react"
import styled from 'styled-components';

// Style
import '../style/Home.css'

//Landing Page
import IntroductionSlide from './IntroductionSlide';
import ProjectSlide from './ProjectSlide';


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