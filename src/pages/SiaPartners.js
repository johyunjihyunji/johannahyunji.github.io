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
              UX Research
              <br />
              User Personas
              <br />
              Web Design
              <br />
              UI/UX
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
            UC Berkeley UMA Design Team, Sia Partners
            <br />
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Problem Space</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Meta Family Center</h3>
              <p className="paragraph">
              <b>Meta Family Center</b> is a digital platform tool that allows guardians to manage and oversee their family's online 
              experiences across Meta technologies like Instagram and Meta Quest. It provides monitoring tools, educational resources 
              to <b>promote digital safety and support responsible online behavior for families.</b>
              </p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>Problem</h3>
              <p className="paragraph">
              Meta Family Center's currunt focus on parental controls <b>neglects the diverse needs of modern families,</b>
              overlooking important aspects like <b>sibling supervision and direct media literacy education</b> for younger users.  
              </p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4', background: '#ffffff', borderRadius: '30px', padding: '20px', textAlign: 'center'}}>
              How might we reimagine Meta Family Center to target diverse modern family dynamics and the Gen Z users?
              </h3>

            </div>


          </div>
        </div>

        <div className="section">
          <h2 className="section-title">UX Research</h2>
          <div className="flex-container">
            
          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>UX Audit</h3>
              <p className="paragraph">
              UX audit for 4 main pages of the Meta Family Center, then synthesized material into SWOT analysis
              </p>
            </div>
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
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>UX Survey</h3>
              <p className="paragraph">
              Our team collected 300+ responses for our UX survey that collecting responses regarding website content and visual preferences, 
              company values, and Meta Family Center sentiments.
              </p>
            </div>

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
              <h3 className="subsection-title" style={{ color: '#5a5a5a' }}>UX Interview</h3>
              <p className="paragraph">
              Our team conducted 30 user interviews with student users to further understand painpoints
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
              
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">User Personas</h2>
          <div className="flex-container">

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
          <h2 className="section-title">Solution</h2>
          <div className="flex-container">
          <p className="paragraph">
            Our team's final recommendations live on 
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