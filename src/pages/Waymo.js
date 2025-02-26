import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import App from '../index';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Waymo() {
  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/2025_headers/Artboard 151.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
          />
        </div>

        <div className="project-title">Waymo UI and Brand Revamp</div>
        <div className="project-summary">
        Redesigned Waymo's UI and brand to appeal to younger audience in preparation for their transition to a commercial entity and SF launch.</div>
      
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UI/UX Design Consultant</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              Competitor Research
              <br />
              UI/UX Design
              <br />
              Brand Design
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Timeline</h3>
            <p className="info-content">
              Jan 2023 - June 2023
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Team</h3>
            <p className="info-content">
            UMA Design Team
            </p>
          </div>
          
        </div>


        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
            <p className="paragraph">
              <b style={{fontFamily: 'Crimson-bold', fontSize: '3rem' }}>Waymo</b> -self-driving technology company- was transitioning from an <b>R&D-focused firm to a commercial entity</b>, <br/> which required a comprehensive reevaluation of 
              its overall user experience and brand identity.
              </p>
           
            <div className="subsection">

              <h3 className="subsection-title" style={{ color: '#0077FF' }}>1. UI Redesign of Waymo's Homepage</h3>
              <p className="paragraph">
              Conducted <b>comprehensive competitive brand analysis</b>to inform the redesign of <b>interactive UI/UX modules,</b> aimed at enhancing Waymo's commercial appeal and targeting the next generation.
              </p>
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>2. Brand Design System</h3>
              <p className="paragraph">
              Provide a proposal for how Waymo should evolve two core components of 
              its <b>brand identity to appeal to younger audiences (Gen Z), recommending brand personality and photography style.</b>
              </p>
              <br />
              
            </div>
          </div>
        </div>
        <h3 className="subsection-title" style={{ textAlign: 'center', color: '#5a5a5a' }}>this page is under construction!</h3>
              <p className="paragraph" style={{ textAlign: 'center'}}>
              please reach out to <b style={{backgroundColor: 'rgba(255, 23, 0, 0.2)', fontWeight: '570'}}>johannalee@berkeley.edu</b> to learn more about this project!
              </p>
        <br/>
        <br/>
        <br/>
        <br/>

{/* 
        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">
            <p className="paragraph">
                This project was very exciting because it was in the autonomous automobile industry. 
                Exploring and researching this sector provided me with insights into the <b>future landscape of the automotive industry.</b>
            </p>
          <div className="flex-container">
            <div className="subsection">
            <div className="team-photo">
              <StaticImage 
              src="../../static/WaymoCar.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ borderRadius: '10px' }}
              />
            </div>

              <h3 className="subsection-title" style={{color: '#0077FF' }}>Rebranding for Self-Driving Car Service:</h3>
              <p className="paragraph">
              It was challenging to reshape perceptions around this cutting-edge technology often deemed "not safe." 
              The <b>primary hurdle was to make autonomous driving technology more 
              approachable and acceptable</b> to the emerging generation of users. Successfully rebranding Waymo required more than just a visual transformation;
               it demanded the establishment of a new norm.
              The goal was to shape a narrative that would encourage users to perceive self-driving car services positively. 
              This involved not only addressing concerns about safety but also <b>fostering a sense of trust and familiarity.</b>
        
              </p>
            </div>


          </div>
        </div>
        </div>      */}

      </div>
    <Footer />
    </>
  );
}

export default Waymo;