import React, { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Link, Lightbulb, CornerRightDown} from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function SiaPartners() {
  const { scrollY } = useViewportScroll();
  const imageRefs = useRef([]);
  const problemSolvingRef = useRef(null);
  const scrollToProblemSolving = () => {
    problemSolvingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              <div className='tag'>Wireframing</div>
              <div className='tag'>User Flow</div>
              <div className='tag'>Figma</div>
              <div className='tag'>Prototyping</div>
              <div className='tag'>UX Audit</div>
              <div className='tag'>UX Survey</div>
              <div className='tag'>User Personas</div>
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Problem Space</h2>
          <div className="flex-container">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            
            <div className="subsection">
              <h3 className="subsection-title" style={{  color: '#1A74E4'}}>Introduction</h3>
              <p className="paragraph">
              My UMA Design team partnered with Sia Partners to conduct a comprehensive analysis and refinement of <b>Meta Family Center's </b>
              UX and content strategies, aiming to enhance user experience and improve the platform's effectiveness in supporting Meta user families.
              </p>
            </div>
            </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            
            <div className="boxsection">
            <h3 className="boxsection-title" style={{  color: '#1A74E4'}}>Meta Family Center (MFC)</h3>
            <div className="team-photo" ref={el => imageRefs.current.push(el)}>
              <StaticImage
                src="../../static/metaslides/Meta-Logo.png"
                alt="Project Header"
                placeholder="blurred"
                layout="constrained"
                className="slidepng"
                style={{width: '50%'}}
              />
            </div>
            <p className="paragraph">A tool that allows guardians to manage their family's online 
              experiences across Meta technologies like Instagram and Meta Quest. 
              It provides monitoring tools, educational resources 
              to <b>promote digital safety and support responsible online behavior.</b></p>
            </div>
            </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0075A2' }}>Problem</h3>
              <p className="paragraph" style={{ color: 'black', fontSize: '1.7rem', lineHeight: '1.3', fontWeight: '400' }}>
              Meta Family Center's currunt focus on parental controls <b>neglects the diverse needs of modern families, </b>
              overlooking important aspects like <b>sibling supervision and direct media literacy education</b> for younger users.  
              </p>
              <p className="paragraph">
                How might we expand Meta Family Center to better address the diverse needs of modern family dynamics?
              </p>

              <a 
                style={{display: "flex", alignItems: "center", textDecoration: 'none'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0075A2' }
                onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                onClick={scrollToProblemSolving}
              >
                <p className="paragraph" style={{marginRight: "5px"}}>
                  Jump to Solutions!
                </p>
                <CornerRightDown size={24} />
              </a>
            </div>
            </motion.div>

          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Problem Analysis</h2>
          <div className="flex-container">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            
          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4'  }}>UX Audit</h3>
              <p className="paragraph">
              To thoroughly evaluate the MFC's user experience, 
              we conducted a detailed <b>UX audit across its four main pages, </b>
              subsequently synthesizing our findings into a comprehensive SWOT analysis to identify key areas for 
              improvement and strategic opportunities.
              </p>
            </div>
            </motion.div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            

          <div className='boxsection' style={{padding: '30px 30px 30px 30px'}}>
          <h3 className="boxsection-title" style={{  color: '#1A74E4', textAlign: 'center'}}>SWOT Analysis</h3>
          <p style={{ textAlign: 'left'}}><b style={{color: '#766459'}}>Visual Appeal</b></p>
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
            <p style={{ textAlign: 'left'}}><b style={{color: '#766459'}}>Family Center Content</b></p>
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
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          

          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4' }}>UX Survey</h3>
              <p className="paragraph">
              Our team collected <b>300+ responses</b> for our UX survey regarding <b>website content, visual preferences, 
              company values, and MFC sentiments.</b> 
              </p>
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          
          
          <div className="boxsection" style={{padding: '30px 30px 30px 30px'}}>
          <h3 className="boxsection-title" style={{  color: '#1A74E4', textAlign: 'center'}}>Survey Results</h3>
          <p className="photoDescription" style={{fontStyle: 'italic'}}>
          For a closer look, hover over any image to expand it!
              </p>
          <p style={{ textAlign: 'left'}}><b style={{color: '#766459'}}>Visual & Content</b></p>
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
          <p style={{ textAlign: 'left'}}><b style={{color: '#766459'}}>Company Values & Meta Family Center</b></p>
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
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          

          <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#1A74E4' }}>UX Interview</h3>
              <p className="paragraph">
              Our team conducted 30 user interviews with student users to further understand painpoints.
              The goal was to uncover <b>initial impressions, challenges, and perceptions of platform features.</b> Then, we created affinity maps and found 9 key insights.
              </p>
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          
          <div className="boxsection" style={{padding: '30px 30px 30px 30px'}}>
          <h3 className="boxsection-title" style={{  color: '#1A74E4', textAlign: 'center'}}>Key Insights</h3>
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
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          
          
          <div className="subsection">
          <h3 className="subsection-title" style={{ color: '#1A74E4'}}>User Personas</h3>
          <p className="paragraph">
              After user surveys and interviews, our team synthesized <b>5 different user personas.</b>
              These personas represent different family members and age groups, 
              helping to <b>capture the complexity of modern family dynamics and their interactions</b> with digital platforms.
          </p>
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          
          <div className="slidepng-container">
          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
            <StaticImage
              src="../../static/metaslides/MetaUserPersonas.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              className="slidepng"
            />
          <p className="photoDescription" style={{fontStyle: 'italic'}}>
          For a closer look, hover over any image to expand it!
              </p>
          </div>
          </div>
          </motion.div>

          </div>
        </div>


        
          <div className="section" ref={problemSolvingRef}>
          <h2 className="section-title">Problem Solving</h2>
          <div className="flex-container">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                          whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                          viewport={{ once: true }} // Only animate once
                          transition={{ duration: 0.3 }} // Animation duration
                        >
            
          <div className="subsection">
            <h3 className="subsection-title" style={{ color: '#1A74E4' }}>Wireframing</h3>
            <p className="paragraph">
            Our design process began with thorough research, followed by several brainstorming sessions 
            that allowed us to explore various design possibilities. 
            After multiple rounds of discussions and iterations, our team synthesized our findings 
            into a set of <b>low-fidelity wireframes</b>, providing a clear blueprint for <b>each page's layout and functionality.</b>            </p>
          </div>
          </motion.div>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                        whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                        viewport={{ once: true }} // Only animate once
                        transition={{ duration: 0.3 }} // Animation duration
                      >
          
        

        <div className="boxsection">
        <h3 className="boxsection-title" style={{  color: '#1A74E4', textAlign: 'center'}}>Core Recommendations</h3>
        <p className="photoDescription" style={{fontStyle: 'italic'}}>
          For a closer look, hover over any image to expand it!
              </p>
        <p className="paragraph" style={{textAlign: 'left'}}>
          <ul style={{display: 'flex', flexDirection: 'column', gap: '30px'}}>
            <li style={{display:'flex', flexDirection: 'row',  gap: '30px'}}> 
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
              <p><b style={{textTransform: 'uppercase', letterSpacing: '2px', color: "#766459"}}>Landing Page</b>
                <br/>
                The landing page should be a clear navigational hub, 
                summarizing each page and <b>providing immediate user orientation. </b>
                The original version's lack of guidance resulted in uncertainty of 
                MFC's overall functionality.
                </p>
            </li>
            <li style={{display:'flex', flexDirection: 'row',  gap: '30px'}}> 
            <p>
            <b style={{textTransform: 'uppercase', letterSpacing: '2px', color: "#766459"}}>Family Center Tool</b>
            <br/>
            The Family Center Tools page requires <b>app-specific instructions on how to implement MFC with animated demos. </b>
            Replacing the original lengthy PDF attatchment will improve user engagement. 
            Further instructions can be linked under additional resources.
            </p>
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
            </li>
            <li style={{display:'flex', flexDirection: 'row',  gap: '30px'}}> 
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
            <p>
            <b style={{textTransform: 'uppercase', letterSpacing: '2px', color: "#766459"}}>EDUCATION HUB</b>
            <br/>
            The Education Hub <b>requires a refined information architecture,</b>
             including clear <b>topic categorization and typographic hierarchy. </b>
              Integrating the advisor board within this section can build user credibility.
            </p>
            </li>
            <li style={{display:'flex', flexDirection: 'row',  gap: '10px'}}> 
            <b style={{textTransform: 'uppercase', letterSpacing: '2px', color: "#766459"}}>[extenstion]</b>
            <br/>
              <ul style={{display: 'flex', flexDirection: 'column', gap: '30px', listStyle: 'none', padding: 0, margin: 0}}> 
                <li style={{display: 'flex', alignItems: 'flex-start'}}><Lightbulb size={48} style={{marginRight: '10px', color: '#1A74E4'}} />
                <div>
                  <b>Need for Inclusive Representation: </b><br/>
                  MFC's content should be more inclusive through diverse family representations and illustrations.
                </div>  </li>
                <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <Lightbulb size={48} style={{marginRight: '10px', color: '#1A74E4'}} />
                  <div>
                    <b>Our Advisor Page: </b><br/>
                    The 'Our Advisors' section should be integrated directly into the landing page and Education Hub.
                  </div>
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start'}}>
                <Lightbulb size={48} style={{marginRight: '10px', color: '#1A74E4'}} />
                  <div>
                    <b>Community Dashboard: </b><br/>
                    A community dashboard could facilitate peer-to-peer support and resource sharing among families.
                  </div>
                </li>
              </ul>
            <br/>
            </li>
          </ul>
        </p>   
        </div>
        </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                      viewport={{ once: true }} // Only animate once
                      transition={{ duration: 0.3 }} // Animation duration
                    >
        
        <div className='subsection'>
          <h3 className="subsection-title" style={{ color: '#1A74E4'}}>High-Fidelity Module Mockups</h3>
          <p className="paragraph">
          Building upon our core strategic suggestions, we developed a set of <b>high-fidelity mockups. </b>
            See some of our recommendations live on 
            <a href="https://familycenter.meta.com/" style={{color:'#1A74E4'}}target="_blank" rel="noopener noreferrer"> Meta Family Center </a>'s site!
          </p>
        </div>
        </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                      whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                      viewport={{ once: true }} // Only animate once
                      transition={{ duration: 0.3 }} // Animation duration
                    >
        


          <iframe style={{ marginBottom: "8vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
          src="https://embed.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Portfolio?page-id=440%3A72&node-id=440-83&p=f&viewport=253%2C345%2C0.1&scaling=scale-down-width&content-scaling=fixed&embed-host=share" allowfullscreen>
          </iframe>
          </motion.div>

          </div>
          </div>


        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >

            <div className="subsection">
              <p className="paragraph">
              Our team collaborated closely with Sia's team on this project, which aimed to create a product suitable for a <b>wide range of users, 
              from kids to parents to non-traditional families. </b>
               This was challenging because each demographic had different needs. 
              <b> User interviews provided valuable insights</b> that helped us understand 
              different perspectives, which was crucial for shaping our approach.
              </p>
              </div>
              </motion.div>

          </div>
      
        </div>
      </div>
    <Footer />
    </>
  );
}

export default SiaPartners;