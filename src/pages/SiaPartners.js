import React, { useEffect, useRef } from 'react';

import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SiaPartners() {

  const imageRefs = useRef([]);

useEffect(() => {
  const setupImageZoom = (container) => {
    if (!container) return;

    const image = container.querySelector('.slidepng');
    
    const handleMouseMove = (e) => {
      const { left, top, width, height } = container.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      image.style.transformOrigin = `${x * 100}% ${y * 100}%`;
      image.style.transform = 'scale(1.5)';
    };

    const handleMouseLeave = () => {
      image.style.transformOrigin = 'center center';
      image.style.transform = 'scale(1)';
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  const cleanupFunctions = imageRefs.current.map(container => setupImageZoom(container));

  return () => {
    cleanupFunctions.forEach(cleanup => cleanup && cleanup());
  };
}, []);

  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/2025_headers/Artboard 151_2.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
          />
        </div>

        <div className="project-title">Meta Family Center UX</div>
        <div className="project-summary">
        Redesigned Meta Family Center to be inclusive of modern family dynamics, improving user experience through research and prototypes.  
        </div>    
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UX Design Consultant</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              UX Research
              <br />
              UI/UX Design
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
            UC Berkeley UMA Design Team, <br />Sia Partners
            
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Problem Space</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{  color: '#1A74E4'}}>Meta Family Center</h3>
              <p className="paragraph">
              <b>Meta Family Center</b> is a tool that allows guardians to manage their family's online 
              experiences across Meta technologies like Instagram and Meta Quest. 
              <br/>
              <br/>
              It provides monitoring tools, educational resources 
              to <b>promote digital safety and support responsible online behavior.</b>
              </p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4' }}>Problem</h3>
              <div className="header-image" style={{marginBottom: '10px'}}>
                <StaticImage 
                  src="../../static/metaslides/metahmw.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ borderRadius: '30px', border: '1.2px solid #000000'}}
                />
              </div>
              <p className="paragraph">
              Meta Family Center's currunt focus on parental controls <b>neglects the diverse needs of modern families, </b>
              overlooking important aspects like <b>sibling supervision and direct media literacy education</b> for younger users.  
              </p>
            </div>


          </div>
        </div>

        <div className="section">
          <h2 className="section-title">UX Research</h2>
          <div className="flex-container">
            
          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4'  }}>UX Audit</h3>
              <p className="paragraph">
              We conducted UX audit for 4 the main pages of the Meta Family Center, then synthesized material into  a <b>SWOT analysis.</b>
              </p>
            </div>
            <p style={{marginLeft: "20px"}}><b>Visual Appeal</b></p>
            <div className="slidepng-container">
            <div className="team-photo" ref={el => imageRefs.current.push(el)}>
              <StaticImage
                src="../../static/metaslides/MetaUxAudit1.png"
                alt="Project Header"
                placeholder="blurred"
                layout="constrained"
                className="slidepng"
              />
            </div>
            </div>
            <p style={{marginLeft: "20px"}}><b>Family Center Content</b></p>
              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/metaslides/MetaUxAudit2.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"
                />
              </div>
              </div>
          
          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4' }}>UX Survey</h3>
              <p className="paragraph">
              Our team collected <b>300+ responses</b> for our UX survey regarding <b>website content, visual preferences, 
              company values, and Meta Family Center sentiments.</b> 
              </p>
            </div>
            <p style={{marginLeft: "20px"}}><b>Visual & Content</b></p>
            <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaUxSurvey1.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
          </div>
          </div>
          <p style={{marginLeft: "20px"}}><b>Company Values & Meta Family Center</b></p>
              <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaUxSurvey2.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
          </div>
          </div>

              <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4' }}>UX Interview</h3>
              <p className="paragraph">
              Our team conducted 30 user interviews with student users to further understand painpoints.
              <br/>
              The goal was to uncover <b>initial impressions, challenges, and perceptions of platform features.</b> Then, we created affinity maps and found 9 key insights.
              </p>
            </div>
          
            <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaUxInterview.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
          </div>
          </div>

          <h3 className="subsection-title" style={{ color: '#1A74E4'}}>User Personas</h3>

          <p className="paragraph">
              After user surveys and interviews, our team synthesized <b>5 different user personas.</b><br/>
              These personas represent different family members and age groups, 
              helping to <b>capture the complexity of modern family dynamics and their interactions</b> with digital platforms.
          </p>

          <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaUserPersonas.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
          </div>
          </div>
              
          </div>
        </div>


        
          <div className="section">
          <h2 className="section-title">UX Design</h2>
          <div className="flex-container">
          <h3 className="subsection-title" style={{ color: '#1A74E4' }}>Low-Fi Prototyping</h3>


          <p className="paragraph">
            After research, brainstorming and discussions, our team synthesized a low-fi wireframe for each page.
          </p>
        
        <div className="mockup-box">
          <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaHomepageLowFi.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
            <p className="photoDescription">
              Homepage
              </p>
          </div>
          </div>
          <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaFamilyCenterTools.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
            <p className="photoDescription">
              Family Center Tools
              </p>
          </div>
          </div>
          <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaEducationHub.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
            <p className="photoDescription">
              Education Hub
              </p>
          </div>
          </div>
        </div> 
          <h3 className="subsection-title" style={{ color: '#1A74E4'}}>Final Recommendations</h3>
          <p className="paragraph">
            See some of our recommendations live on 
            <a href="https://familycenter.meta.com/" style={{fontFamily: 'AlexRoss', color:'#1A74E4', fontSize: '2vw'}}target="_blank" rel="noopener noreferrer"> Meta Family Center </a>'s site!
          </p>


          <iframe style={{ marginBottom: "8vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
          src="https://embed.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=440%3A72&node-id=440-83&p=f&viewport=253%2C345%2C0.1&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowfullscreen>
          </iframe>

          </div>
          </div>


        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <div className="subsection">
              <p className="paragraph">
              Our team collaborated closely with Sia's team on this project, which aimed to create a product suitable for a <b>wide range of users, 
              from kids to parents to non-traditional families. </b>
               This was challenging because each demographic had different needs. 
              <b> User interviews provided valuable insights</b> that helped us understand 
              different perspectives, which was crucial for shaping our approach.
              </p>

                <div className="team-photo">
                  <StaticImage 
                  src="../../static/SiaPartnersTeamPhoto2.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ marginTop: '10px', borderRadius: '10px', height: '60vh' }}
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