import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SiaPartners() {
  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/SiaPartnersMetaHeader.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UX Design Consultant</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              UX Research - User Testings and Surveys
              <br />
              User Personas
              <br />
              UX Module Prototyping and Mockups
              <br />
              UX Audits
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Timeline</h3>
            <p className="info-content">
              August 2023 - December 2023
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Team</h3>
            <p className="info-content">
            UMA Design Team: 
            <br />
            Chloe Dowling, Jazzy Rao, Jenny Wang, Amber Louie, Anisha Agarwala, Isabella He, Johanna Lee, Vivian Butler, Kimmy Pruitt, Andrea Yang
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Sia Partners</h3>
              <p className="paragraph">
              Sia Partners is a consulting firm headquartered in Paris, France, with a global presence across 50 offices
              in 20 countries. <b>Sia Partners' San Francisco office focuses on helping technology companies and startups</b> with business
              transformation and data science.

              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>UMA Design</h3>
              <p className="paragraph">
              <b>Design Team at the Undergraduate Marketing Association</b> is a creative group passionate about <b>visual 
                storytelling and crafting impactful brand experiences</b>. 
                With our expertise in interface & graphic design, user experience, and all visual communications, we <b>collaborate with 
                clients spanning diverse industries.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">

              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}> UNDER NDA</h3>
              <p className="paragraph">
              please reach out to <b style={{backgroundColor: 'rgba(255, 23, 0, 0.2)', fontWeight: '570'}}>johannalee@berkeley.edu</b> to learn more about this project!
              </p>
            
              <p className="paragraph">
              UMA Design supported Sia Partners on the <b>Meta Family Center project</b> to improve the webpage experience through <b>module design, 
              content strategy, and UX research.</b> Our goal is to revitalize the Meta Family Center, ensuring it is approachable by a diverse user base.
              </p>


              <div className="team-photo">
                <StaticImage 
                src="../../static/SiaPartnersTeamPhoto1.png"
                alt="Project Header"
                placeholder="blurred"
                layout="constrained"
                style={{ marginTop: '10px', borderRadius: '10px' , height: '350px' }}
                />
                <p className="photoDescription">
                  During our Final Deliverable at Sia Partner's SF Office 
                  </p>
                </div>
              
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Wide Target Audience</h3>
              <p className="paragraph">
              Our team collaborated closely with Sia's team on this project, which aimed to create a product suitable for a <b>wide range of users, 
              from kids to parents to non-traditional families.</b> This was challenging because each demographic had different needs. 
              <b>User interviews provided valuable insights</b> that helped us understand 
              different perspectives, which was crucial for shaping our approach.
              </p>

                <div className="team-photo">
                  <StaticImage 
                  src="../../static/SiaPartnersTeamPhoto2.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ marginTop: '10px', borderRadius: '10px', height: '350px' }}
                  />
                  <p className="photoDescription">
                  On our way to final deliverable in SF!
                  </p>
              </div>
              </div>

          </div>
      
        </div>
      </div>
    <Footer />
    </>
  );
}

export default SiaPartners;