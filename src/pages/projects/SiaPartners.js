import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import App from '../index';
import '../style/Project.css'

function SiaPartners() {
  return (
    <App>
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../../static/SiaPartnersMetaHeader.png"
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
              <b>Sia Partners</b> is a next-generation management consulting firm headquartered in Paris, France, with a global presence across 50 offices
              in 20 countries. Sia Partners' San Francisco office focuses on helping technology companies and startups with business
              transformation and data science. With over a decade of experience in the Bay Area, the team uses AI to tackle complex challenges
              and drive growth.


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

              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>NDA</h3>
            
              <p className="paragraph">
              UMA Design supported Sia Partners on the Meta Family Center project to enhance the Family Center experience through a combination of design, 
              content strategy, and extensive research efforts. Our goal is to reimagine and revitalize the Meta Family Center, ensuring it not only 
              meets but exceeds the expectations of its diverse user base.
              </p>
              
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection" style ={{ maxWidth: '70%' }}>
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>First End to End Product Design Experience</h3>
              <p className="paragraph">
              Our team collaborated closely with Sia's team on this project, which aimed to create a product suitable for a wide range of users, 
              from kids to parents. This was challenging because each age group has different needs. We spent a lot of time discussing how to 
              make the platform friendly and easy to use for everyone. User interviews provided valuable insights that helped us understand 
              different perspectives, which was crucial for shaping our approach.
              </p>

              <div className="flex-container">

                <div className="team-photo" style={{ flex: '1', maxWidth: '50%'}}>
                <StaticImage 
                src="../../../static/SiaPartnersTeamPhoto1.png"
                alt="Project Header"
                placeholder="blurred"
                layout="constrained"
                style={{ marginTop: '10px', borderRadius: '10px' , height: '350px' }}
                />
                </div>
                <div className="team-photo" style={{ flex: '1', maxWidth: '50%'}}>
                  <StaticImage 
                  src="../../../static/SiaPartnersTeamPhoto2.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ marginTop: '10px', borderRadius: '10px', height: '350px' }}
                  />
                </div>
              </div>
              </div>

              <div className="team-photo" style={{ flex: '1', maxWidth: '30%' }}>
              <StaticImage 
              src="../../../static/SiaPartnersTeamPhoto3.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '40px', borderRadius: '10px' }}
              />
            </div>

          </div>
      
        </div>
      </div>
    </App>
  );
}

export default SiaPartners;