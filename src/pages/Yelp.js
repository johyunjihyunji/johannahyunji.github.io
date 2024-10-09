import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import App from '../index';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Yelp() {
  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/YelpHeader.png"
            alt="Project Header"
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
              Performance Marketing
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
              <h3 className="subsection-title">Yelp Home Services</h3>
              <p className="paragraph">
              <b>Yelp</b>, founded in 2004, has transformed the way consumers discover local food businesses through customer reviews and recommendations. 
                As part of this project, my team focused on promoting <b>Yelp's Home Services</b>, which connects consumers with trusted professionals for various home improvement tasks. 
                By leveraging Yelp's preestablished extensive food businesses review platform, the project aims to <b>broaden the scope of Yelp's recognition and 
                enhance visibility</b> for these home service providers. 
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">UMA Design</h3>
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
              src="../../static/YelpFinal.jpeg"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ borderRadius: '10px' }}
              />
              <p className="photoDescription">
              Final Deliverable with Yelp's Marketing Team :)
              </p>
            </div>
            <div className="subsection" style={{ flex: '1', maxWidth: '60%' }}>
              <h3 className="subsection-title">Performance Marketing</h3>
              <p className="paragraph">
              Deliver Performance Marketing ideations for <b>Home Services project</b> to enhance engagement <b> among Gen Z, millennials, 
              and young homeowners </b> needing home services 
              </p>
              <h3 className="subsection-title">Brand Design System</h3>
              <p className="paragraph">
              Establish a robust <b>graphic design system</b> that reinforces brand consistency and strengthens connection with three 
              distinct audiences: <b>Consumers, Local Businesses, and Brand stakeholders</b>.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection" style ={{ maxWidth: '50%' }}>
              <h3 className="subsection-title">Designing Branding System:</h3>
              <p className="paragraph">
              The biggest challenge was creating a branding system for Yelp that <b>remained cohesive 
        under the main brand while catering to different target groups.</b> Took trial and error to successfully differentiate
        the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience.
              </p>

              <h3 className="subsection-title">Video Concept Ideation</h3>
              <p className="paragraph">
              I particularly enjoyed the video concept ideation and storyboard mock-ups stage, given my experience 
              in personal video content creation. This project offered a new perspective as I approached <b>video creation from a marketing standpoint,</b>
              contrasting to catering personal memories and experiences.
              </p>
            </div>

            <div className="team-photo" style={{ flex: '1', maxWidth: '45%' }}>
              <StaticImage 
              src="../../static/YelpClientReveal.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '23px', borderRadius: '10px' }}
              />
              <p className="photoDescription">
              Yelp Client Reveal!
              </p>
            </div>

          </div>
        </div>
      </div>
    <Footer />
    </>
  );
}

export default Yelp;