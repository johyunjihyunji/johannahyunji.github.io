import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';


function Waymo() {
  const { scrollY } = useViewportScroll();
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

                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                > 

        <div className="project-title">Waymo UI and Brand Revamp</div>
        <div className="project-summary">
        Redesigned Waymo's UI and brand to appeal to younger audience in preparation for their transition to a commercial entity and San Francisco launch.</div>
      
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UI/UX Design Consultant</p>
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
            UMA Design Team, <br/>Waymo's Design Team
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              <div className='tag'>User Flow</div>
              <div className='tag'>Figma</div>
              <div className='tag'>Prototyping</div>
              <div className='tag'>Wireframing</div>
              <div className='tag'>Brand Design</div>
              <div className='tag'>Ad Campaign Mockup</div>
              <div className='tag'>Competitor Research</div>
            </p>
          </div>
        </div>
                    </motion.div>


        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
          <div className="subsection">
            <p className="paragraph">
              <b style={{fontSize: '3rem' }}>Waymo</b> 
              <br></br> A self-driving technology company was transitioning from an <b>R&D-focused firm to a commercial entity</b>, which required a comprehensive reevaluation of 
              its overall user experience and brand identity.
              </p>
              </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                            viewport={{ once: true }} // Only animate once
                            transition={{ duration: 0.3 }} // Animation duration
                          >
           
              <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>1. UI Redesign of Waymo's Homepage</h3>
              <p className="paragraph">
              Conducted <b>comprehensive competitive brand analysis</b> to inform the redesign of <b>interactive UI/UX modules,</b> aimed at enhancing Waymo's commercial appeal and targeting the next generation.
              </p>
              </div>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                            whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                            viewport={{ once: true }} // Only animate once
                            transition={{ duration: 0.3 }} // Animation duration
                          >
           
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0077FF' }}>2. Brand Design System</h3>
              <p className="paragraph">
              Provide a proposal for how Waymo should evolve two core components of 
              its <b>brand identity to appeal to younger audiences (Gen Z), recommending brand personality and photography style.</b>
              </p>

            </div>
                        </motion.div>

          
            </div>
      </div>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
        <h3 className="subsection-title" style={{ textAlign: 'center', color: '#5a5a5a' }}>this page is under construction!</h3>
        <p className="paragraph" style={{ textAlign: 'center'}}>
              please reach out to <b style={{backgroundColor: 'rgba(30, 33, 0, 0.2)', fontWeight: '570'}}>johannalee@berkeley.edu</b> to learn more about this project!
        </p>
        </motion.div>
         
        
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