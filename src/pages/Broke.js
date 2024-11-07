import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Broke() {
  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/BrokeHeader.png"
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
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Sutardja Center Entrepreneurship & Technoology</h3>
              <p className="paragraph">
             <b>Sutardja Center for Entrepreneurship & Technology (SCET)</b> at UC Berkeley offers a <b>Certificate in Entrepreneurship and 
              Technology</b> designed to equip students with essential skills for innovation and leadership through a study abroad program to Segovia, Spain and Porto, Portugal.
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>European Innovation Academy</h3>
              <p className="paragraph">
              <b>European Innovation Academy (EIA)</b> offers a three-week startup program in Porto, Portugal, where students from diverse 
              backgrounds collaborate in <b>multidisciplinary teams to develop innovative product ideas.</b> 
              </p>
              <p className="paragraph">
              Guided by industry mentors, I gained hands-on experience in ideation, prototyping, and pitching to investors. 
              I teamed up with 4 other passionate travellers to identify and solve problems under "travel accessbility."
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
            <div className="team-photo">
              <StaticImage 
              src="../../static/BrokeTeam.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px',borderRadius: '10px' , maxHeight: '50vh'}}
              />
              <p className="photoDescription">
              Broke team after pitching to investors at the last day of EIA program!
              </p>
            </div>
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Broke</h3>
              <p className="paragraph">
              <b>Broke</b> is product developed during the Sutardja Center for Entrepreneurship & Technoology Certificate program during 
              European Innovation Academy portion of the program. 
              <p className="paragraph">
              Broke is a <b>travel budgeting mobile app that allows users to track expenses in real-time, manage transactions, and plan itineraries.</b>
              </p>
              
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Problem Space</h3>
              Through 17 interviews and 200+ survey results, we identified the following painpoints: financial constraints, lack of budgeting knowledge, uncertainty in planing,
                limited access to travel resources.

                </p>
                <p className="paragraph center-align">
                <b style={{backgroundColor: 'rgba(255, 23, 0, 0.2)', fontWeight: '700'}}>How might we make traveling more accessible to middle to low income young adults?</b>
              </p>

              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Ideation</h3>
              <p className="paragraph">
              We recognized a common aspiration among individuals to explore their dream destinations. The primary insight stemmed from the understanding 
              that financial barriers, particularly for middle to low-income young adults. Four Focal Points:
              </p>
              <p className="paragraph" >
                <b>Personalized Budgeting:</b> team proposed an AI-powered budgeting tool to help users set personalized budgets based on their income and travel goals.
                <br />
                <b>Real Time Progress Tracking:</b> To motivate users, the team suggested a dynamic system for real-time tracking of saving and spending.
                <br />
                <b>Secure Transaction Platform:</b> The team recommended integrating a secure transaction platform to ensure safe spending while traveling.
                <br />
                <b>User Friendly Interface:</b> To accommodate varying financial literacy levels, the team emphasized creating an intuitive and accessible app interface.
              </p>
            </div>
          </div>
        </div>

        <div className="section" style = {{marginBottom: '10px'}}>
          <h2 className="section-title">Brand Design System</h2>
        </div>
        <div className="team-photo" style={{ flex: '1'}}>
              <StaticImage 
              src="../../static/BrokeBrandDesignHigh.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px', width: '100%' }}
              />
        </div>

        <div className="section" style = {{marginBottom: '10px'}}>
          <h2 className="section-title">Prototyping</h2>
          <div className="flex-container">
          <p className="paragraph">
          After iterating through multiple rounds of low-fidelity wireframes and conducting user experience interviews, 
          I crafted high-fidelity wireframe prototype.
          I developed a <b>comprehensive prototype that was presented to potential investors and program instructors/mentors. </b>
          </p>
          {/* <div className="flex-container">
            <div className="team-photo">
              <StaticImage 
              src="../../static/BrokeLowfi.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px', height: '400px', width: '100%', borderRadius: '5px', borderStyle: 'solid', borderColor:'#a5d69d' }}
              />
              <p className="photoDescription">
              Initial Low-Fi Wireframing - many iterations made through UX interviews and surveys
              </p>
            </div>

            <div className="team-photo">
              <StaticImage 
              src="../../static/BrokeHifi.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px', height: '400px', width: '100%',borderRadius: '5px', borderStyle: 'solid', borderColor:'#a5d69d' }}
              />
               <p className="photoDescription">
              Developed High-Fi Prototype
              </p>
            </div>
            
          </div> */}
`          <iframe 
          title="Broke App Prototype"
          style={{ marginBottom: "8vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
          src="https://embed.figma.com/proto/FsqiWSeQoGw2Ogth08y5pP/Untitled?page-id=0%3A1&node-id=70-1308&node-type=canvas&viewport=477%2C212%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=70%3A1308&embed-host=share" 
          allowFullScreen
          ></iframe>`
          </div>
          
        </div>




        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection" >
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>First End to End Product Design</h3>
              <p className="paragraph">
              Embarking on this project marked a significant learning curve for me. It was my first opportunity to independently navigate 
              the entire product design process, from <b>problem space need finding to brand identity development to high fidelity prototyping. </b>
              </p>

              <h3 className="subsection-title" style={{ color: '#6B0C76' }}> Leveraging Design and CS:</h3>
              <p className="paragraph">
              I discovered that my background in computer 
              science not only provided a strong foundation but also facilitated effective communication within a cross-functional team.
              I found myself articulating ideas in different languages tailored to different teammates. This project <b>sparked my interest 
              in a career path in product design.</b>
              </p>
            </div>

            <div className="team-photo">
              <StaticImage 
              src="../../static/BrokeTeamPhotoOfficial.png"
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
              <p className="photoDescription">
              First day of forming Broke team at EIA program!
              </p>
            </div>

          </div>
        </div>

        

        



        

      </div>
      <Footer />
      </>
  );
}

export default Broke;