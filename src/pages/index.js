import * as React from "react"
import './Home.css'
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


//Header & Footer
import Header from './Header';
import Footer from './Footer';

//Landing Page
import IntroductionSlide from './IntroductionSlide';
import ProjectSlide from './ProjectSlide';

//Projects
import Yelp from './projects/Yelp';

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

    <Router>
      <AppContainer>
        <Content>
          <Header />
          <Routes>
            <Route path="/" element={
              <>
                <IntroductionSlide />
                <ProjectSlide />
                <br />
                <br />
                <br />
              </>
            } />
            <Route path="./projects/Yelp" element={<Yelp />} />
          </Routes>
        </Content>
        <Footer />
      </AppContainer>
    </Router>

  );
}


export default Home