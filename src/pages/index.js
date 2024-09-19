import * as React from "react"
import GridBackground from './GridBackground';
import './Home.css'
import styled from 'styled-components';

//Header
import Header from './Header';

//Landing Page
import IntroductionSlide from './IntroductionSlide';
import ProjectSlide from './ProjectSlide';
import LopsterGallery from './LopsterGallary';

//Footer
import Footer from './Footer';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Make sure the container takes at least full height */
`;

const Content = styled.div`
  flex: 1; /* This allows the content to grow and push the footer down */
`;


function Home() {
  return (

    <AppContainer>
      <Content>
        <Header />
        {/* <GridBackground /> */}
        <IntroductionSlide />
        <ProjectSlide />
        <LopsterGallery />
      </Content>
      <Footer />
    </AppContainer>

  );
}


export default Home