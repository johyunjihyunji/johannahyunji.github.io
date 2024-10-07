import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import App from '../index';
import '../style/Project.css'

function Broke() {
  return (
    // <App>
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../../static/BrokeHeader.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '10px' }}
          />
        </div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">Product Design Lead</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              UX Research
              <br />
              UI/UX Design, Wireframing, and Mockups
              <br />
              Brand Design System
              <br />
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Timeline</h3>
            <p className="info-content">
              July 2023 - August 2023
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Team</h3>
            <p className="info-content">
            Johanna Lee (Design Lead)
            <br />
            Mizuho Li (Team Lead)
            <br />
            Amabel Bernabe (Marketing Lead)
            <br />
            Nagib Afani (Product Lead)
            <br />
            Heinrich Lau (Technology Lead)
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Background</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title">Sutardja Center for Entrepreneurship & Technoology</h3>
              <p className="paragraph">
              The <b>Sutardja Center for Entrepreneurship & Technology (SCET)</b> at UC Berkeley offers a <b>Certificate in Entrepreneurship and 
              Technology</b> designed to equip students with essential skills for innovation and leadership. This program provides undergraduate
              and graduate students the <b>opportunity to build networks, develop their startups,</b> and enhance their collaboration and 
              communication abilities through hands-on projects and coursework.
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title">European Innovation Academy</h3>
              <p className="paragraph">
              The <b>European Innovation Academy (EIA)</b> offers a dynamic three-week startup program in Porto, Portugal, where students from diverse 
              backgrounds collaborate in <b>multidisciplinary teams to develop innovative product ideas.</b> Guided by industry mentors from leading 
              companies like Google and TikTok, participants gain hands-on experience in ideation, prototyping, and pitching to investors. 
              This immersive program empowers aspiring entrepreneurs to enhance their skills and build valuable connections within a global 
              network of innovators.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
            <div className="team-photo" style={{ flex: '1', maxWidth: '40%' }}>
              <StaticImage 
              src="../../../static/BrokeTeam.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px',borderRadius: '10px' }}
              />
            </div>
            <div className="subsection" style={{ flex: '1', maxWidth: '60%' }}>
              <h3 className="subsection-title">Broke</h3>
              <p className="paragraph">
              <b>Broke</b> is product developed during the Sutardja Center for Entrepreneurship & Technoology Certificate program during 
              European Innovation Academy portion of the program. I teamed up with 4 other passionate travellers to identify and solve problems under "travel accessbility."
              
              <h3 className="subsection-title">Problem Space</h3>
              Through 17 interviews and 200+ survey results, we identified the following painpoints: financial constraints, lack of budgeting knowledge, uncertainty in planing,
                limited access to travel resources<br />
              <b>How might we make traveling more accessible to middle to low income young adults?</b>
              </p>

              <h3 className="subsection-title">Ideation</h3>
              <p className="paragraph">
              We recognized a common aspiration among individuals to explore their dream destinations. The primary insight stemmed from the understanding 
              that financial barriers, particularly for middle to low-income young adults, often hinder these travel ambitions. Four Focal Points:
              </p>
              <p className="paragraph" >
                <b>Personalized Budgeting:</b> team proposed an AI-powered budgeting tool to help users set personalized budgets based on their income and travel goals.
                <br />
                <b>Real Time Progress Tracking:</b> To enhance motivation, the team suggested a dynamic system for real-time tracking of saving and spending.
                <br />
                <b>Secure Transaction Platform:</b> The team recommended integrating a secure transaction platform to ensure safe spending while traveling.
                <br />
                <b>User Friendly Interface:</b> To accommodate varying financial literacy levels, the team emphasized creating an intuitive and accessible app interface.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Brand Design System</h2>
          <p className="paragraph">
           
          </p>
        </div>

        <div className="section">
          <h2 className="section-title">Prototyping</h2>
          <p className="paragraph">
          After iterating through multiple rounds of low-fidelity wireframes and conducting user experience interviews, 
          I crafted high-fidelity wireframe prototype.
          I developed a <b>comprehensive prototype that was presented to potential investors and program instructors/mentors. </b>
          </p>
          <div className="flex-container">
            <div className="team-photo" style={{ flex: '1', maxWidth: '15%'}}>
              <StaticImage 
              src="../../../static/BrokeLowfi.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px', height: '400px', width: '100%', borderRadius: '5px', borderStyle: 'solid', borderColor:'#a5d69d' }}
              />
            </div>

            <div className="team-photo" style={{ flex: '1', maxWidth: '15%'}}>
              <StaticImage 
              src="../../../static/BrokeHifi.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px',  height: '400px', width: '100%', borderRadius: '5px', borderStyle: 'solid', borderColor:'#a5d69d' }}
              />
            </div>

            <div className="team-photo" style={{ flex: '1', maxWidth: '70%'}}>
              <StaticImage 
              src="../../../static/BrokeMockups.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px',  height: '400px', width: '100%'}}
              />
            </div>
            
          </div>
        </div>




        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection" style ={{ maxWidth: '60%' }}>
              <h3 className="subsection-title">First End to End Product Design</h3>
              <p className="paragraph">
              Embarking on this project marked a significant learning curve for me. It was my first opportunity to independently navigate 
              the entire product design process, from <b>problem space need finding to brand identity development to high fidelity prototyping. </b>
              The experience was truly enriching, allowing me to address painpoints that resonated personally with me, all while collaborating
               with newfound team members with similar passions.
              </p>

              <h3 className="subsection-title"> Leveraging Design and CS:</h3>
              <p className="paragraph">
              I discovered that my background in computer 
              science not only provided a strong foundation but also facilitated effective communication within a cross-functional team.
              I found myself articulating ideas in different languages tailored for different stakeholders. This project <b>sparked my interest 
              in a career path in product design.</b>
              </p>
            </div>

            <div className="team-photo" style={{ flex: '1', maxWidth: '50%' }}>
              <StaticImage 
              src="../../../static/BrokeTeamPhotoOfficial.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ 
                marginTop: '2vh', 
                borderRadius: '10px',
                height: '100%',
                objectFit: 'cover'
              }}
              />
            </div>

          </div>
        </div>



        

      </div>
    // </App>
  );
}

export default Broke;