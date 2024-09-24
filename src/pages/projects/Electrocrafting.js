import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../index';
import '../style/Project.css'

function Electrocrafting() {
  return (
    <App>
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../../static/YelpHeader.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">Student</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              P5
              <br />
              Content Ideation
              <br />
              User Survey and AB Testings
              <br />
              Brand Design System
              <br />
              User Persona
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Timeline</h3>
            <p className="info-content">
              Jan 2024 - June 2024
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Team</h3>
            <p className="info-content">
            UMA Design Team: 
            <br />
            Jazzy Rao, Jenny Wang, Amber Louie, Andrea Yang, Isabella He, Jenny Kim, Johanna Lee, Kimmy Pruit, Naomi Manuel, Vivian Butler 
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Yelp Home Services</h3>
              <p className="paragraph">
              <b>Yelp</b>, founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. 
                As part of this project, my team focused on promoting <b>Yelp's Home Services</b>, which connects consumers with trusted professionals for various home improvement tasks. 
                By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to <b>broaden the scope of Yelp's recognition and 
                enhance visibility</b> for these home service providers. 
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>UMA Design</h3>
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
            <div className="team-photo" style={{ flex: '1', maxWidth: '40%' }}>
              <StaticImage 
              src="../../../static/YelpFinal.jpeg"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ borderRadius: '10px' }}
              />
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#FF1A1A' }}>Performance Marketing</h3>
              <p className="paragraph">
              Deliver Performance Marketing ideations for <b>Home Services project</b> to enhance engagement <b> among Gen Z, millennials, 
              and young homeowners </b> needing home services 
              </p>
              <h3 className="subsection-title" style={{ color: '#FF1A1A' }}>Brand Design System</h3>
              <p className="paragraph">
              Establish a robust <b>graphic design system</b> that reinforces brand consistency and strengthens connection with three 
              distinct audiences: <b>Consumers, Local Businesses, and Brand stakeholders</b>.
              </p>
              <p>
              {"<---"}During our <b>final deliverable</b> with Yelp's marketing team :)
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection" style ={{ maxWidth: '50%' }}>
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Designing Branding System:</h3>
              <p className="paragraph">
              The biggest challenge was creating a branding system for Yelp that remained cohesive 
        under the main brand while catering to different target groups. Took trial and error to successfully differentiate
        the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience.
              </p>

              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Video Concept Ideation and Storyboarding:</h3>
              <p className="paragraph">
              I particularly enjoyed the video concept ideation and storyboard mock-ups stage, leveraging my experience 
              in personal video content creation. This project offered a new perspective as I approached video creation from a marketing standpoint,
              contrasting to catering personal memories and experiences.
              </p>
            </div>

            <div className="team-photo" style={{ flex: '1', maxWidth: '50%' }}>
              <StaticImage 
              src="../../../static/YelpClientReveal.jpg"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ borderRadius: '10px' }}
              />
            </div>

          </div>
        </div>



        

      </div>
    </App>
  );
}

export default Electrocrafting;