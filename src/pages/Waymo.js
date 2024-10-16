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
            src="../../static/WaymoHeader.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">Creative Design Consultant</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              Competitor Research and Analysis
              <br />
              Marketing Campaign Mock Ups
              <br />
              UI Prototyping
              <br />
              Brand Design System
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
            UMA Design Team: 
            <br />
            Chloe Dowling, Thanussh Gnanasegeran, Jazzy Rao, Candace Pong, Natasha Goldberg, Jacqueline Ghosh, Nya Marquez, Jenny Wang,
             Amber Louie, Anisha Agarwala, Isabella He, Johanna Lee
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>Waymo</h3>
              <p className="paragraph">
              <b>Waymo</b> is an <b>autonomous driving technology company</b> headquartered in Mountain View, California. 
              Originally part of the Google self-driving car project, Waymo focuses on developing advanced <b>self-driving systems to enhance 
              mobility and safety.</b> Waymo operates commercial robotaxi services in cities like San Francisco 
              and Phoenix, aiming to revolutionize transportation through fully autonomous vehicles.


              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>UMA Design</h3>
              <p className="paragraph">
              <b>Design Team at the Undergraduate Marketing Association</b> is a creative group of individuals passionate about <b>visual 
                storytelling and crafting impactful brand experiences</b>. We are dedicated to pushing the boundaries of design and creating innovative 
                marketing solutions.  With our expertise in interface & graphic design, user experience, and all visual communications, we <b>collaborate with 
                clients spanning diverse industries.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
            <div className="team-photo" style={{ flex: '1', maxWidth: '30%' }}>
              <StaticImage 
              src="../../static/WaymoMockup.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{height: '450px',  borderRadius: '10px'}}
              />
              <p className="photoDescription">
              Waymo Advertisement Mockup :)
              </p>
            </div>
            <div className="subsection" style={{ flex: '1', maxWidth: '70%' }}>
            <p className="paragraph">
            <b>Waymo</b> is undergoing a significant transition as it <b>evolves from an R&D-focused firm to a commercial entity. </b> 
             This transformation requires a comprehensive reevaluation of its brand identity and the overall experience 
            it offers to its customers. 
            </p>
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>Performance Marketing</h3>
              <p className="paragraph">
              Assess the <b>brands of Waymo’s active ride-hailing competitors and determine the Greenfield opportunity</b> for Waymo to stand 
              out from the pack, in terms of brand positioning, personality, visual/verbal identity, and advertising strategy.
              </p>
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>Brand Design System</h3>
              <p className="paragraph">
              Using insights from the competitive brand research, provide a proposal for how Waymo should evolve two core components of 
              its <b>brand identity to appeal to younger audiences (Gen Z), recommending brand personality and photography style.</b>
              </p>
              <br />
              <h3 className="subsection-title" style={{ textAlign: 'center', color: '#5a5a5a' }}>under NDA</h3>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Reflection</h2>
            <p className="paragraph">
                This project was very exciting because it was in the autonomous automobile industry. 
                Exploring and researching this sector provided me with insights into the <b>future landscape of the automotive industry.</b>
            </p>
          <div className="flex-container">
            <div className="subsection" style ={{ maxWidth: '50%' }}>

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

            <div className="team-photo" style={{ flex: '1', maxWidth: '50%' }}>
              <StaticImage 
              src="../../static/WaymoCar.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ borderRadius: '10px' }}
              />
            </div>

          </div>
        </div>



        

      </div>
    <Footer />
    </>
  );
}

export default Waymo;