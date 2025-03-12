import React, { useEffect, useRef, useState } from 'react';
import { Link, KeyRound, MessageCircle } from 'lucide-react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { motion, useViewportScroll, useTransform } from 'framer-motion';


function ESNetMRDP() {
  const { scrollY } = useViewportScroll();
  const imageRefs = useRef([]);
  const [slideIndex, setSlideIndex] = useState(1);
  
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


  const changeSlide = (n) => {
    setSlideIndex(prevIndex => {
        let newIndex = prevIndex + n;
        const slides = document.getElementsByClassName("slide");
        if (newIndex > slides.length) newIndex = 1;
        if (newIndex < 1) newIndex = slides.length;
        return newIndex;
    });
};

useEffect(() => {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = "block";
    }
}, [slideIndex]);


  return (
    <>
     <Header />
      <div className="container">
        <div className="header-image">
          <StaticImage 
            src="../../static/2025_headers/Artboard 61_1.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
          />
        </div>

        <div className="project-title">Modern Research Data Portal</div>
        <div className="project-summary">
          Redesigned Data Transfer Portal: Streamlined data transfers, implemented customizable code features, and improved user experience.</div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UX Design & Engineer Intern</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Timeline</h3>
            <p className="info-content">
              June 2024 - August 2024
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Team</h3>
            <p className="info-content">
            Johanna Lee
            <br />
            James Kafader (Supervisor)
            <br />
            Ken Miller (Client Point of Contact)
            </p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              <div className='tag'>Wireframing</div>
              <div className='tag'>User Flow</div>
              <div className='tag'>Figma</div>
              <div className='tag'>Prototyping</div>
              <div className='tag'>React</div>
              <div className='tag'>Jinja</div>
              <div className='tag'>Django</div>
              <div className='tag'>Ansible</div>
              <div className='tag'>Docker</div>
              <div className='tag'>Competitive Analysis</div>
            </p>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Problem Space</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0075A2' }}>Introduction</h3>
              <p className="paragraph">
                Energy Science Network (ESnet) is a <b> high-performance network</b> designed to support large-scale scientific research
                by <b>interconnecting</b> the U.S. Department of Energy's national laboratory system.
                As part of ESNet's measurement and analysis team, I worked on the <b>Modern Research Data Portal</b> as UX engineer intern. 
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
            <div className="boxsection">
              <h3 className="boxsection-title" style={{color: '#0075A2'}} >Modern Research Data Portal (MRDP)</h3>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '20px'}}>
              <p className="paragraph">
                An interface that improves <b>scientific data sharing</b> by separating data management into three components: 
                a<b style={{fontStyle: 'italic'}}> portal server</b>, a <b style={{fontStyle: 'italic'}}>high-performance network</b> (Science DMZ), and a <b style={{fontStyle: 'italic'}}>data service</b> (Globus). 
              </p>
              </div>
              <br></br>
            </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >

            <div className="boxsection" style={{padding: '30px 30px 30px 30px'}}>
              <h3 className="boxsection-title">Who is this for?</h3>
              <StaticImage 
                  src="../../static/esnetmrdp/stakeholders.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ height: '100%', marginBottom: '0px'}}
                />
              <br></br>
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
              Modern Research Data Portal's current interface and customization workflows are not user-friendly. 
              We're <b>exploring solutions to simplify these processes</b>, enabling research institutions to <b>easily manage and customize</b> their data portals.
              </p>

              <p className="paragraph">
                How might we simplify data portal user flow, customization, and management for ESnet partner research institutions through Modern Research Data Portal?
              </p>


              <div 
                style={{display: "flex", alignItems: "center", transition: "fill 0.3s"}}>
              <a 
                href="https://mrdp.mooo.com" 
                style={{display: "flex", alignItems: "center", textDecoration: 'none'}}
                onMouseEnter={(e) => e.currentTarget.style.color = "#50C5DB"}
                onMouseLeave={(e) => e.currentTarget.style.color = "black"}
              >
              <p className="paragraph" style={{marginRight: "5px"}}>
              Sneak Peek: Check out MRDP live demo site!
              </p>
              <Link size={24} />
              </a>
              </div>
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
            <h3 className="subsection-title" style={{color: '#0075A2' }}>UX Audit</h3>
                <p className="paragraph">
                I initiated the redesign process by performing a thorough <b>audit of the original MRDP interface</b>,
                aiming to identify key areas for improvement, and then synthesized my findings into a <b>SWOT analysis</b>.
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
          <h3 className="boxsection-title" style={{color: '#0075A2'}} > Original Modern Research Data Portal</h3>
                <div className="slideshow-container"  style={{ marginTop: '60px',  marginBottom: '60px'}}>
                                <div className="slide fade">
                                    <p className="photoDescription">About / Landing Page</p>
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG1.png" alt="Slide 1" />
                                </div>
                                <div className="slide fade">
                                    <p className="photoDescription">Transfer Page</p>
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG2.png" alt="Slide 2" />
                                </div>
                                <div className="slide fade">
                                    <p className="photoDescription">MRDP Original Dataset Search Page</p>
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG3.png" alt="Slide 3" />
                                </div>
                                
                                <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                                <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
                            </div>
            </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
            <div className="boxsection">
            <h3 className="boxsection-title" style={{color: '#0075A2'}} > SWOT Analysis</h3>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/esnetmrdp/esnetaudit.png"
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
              <h3 className="subsection-title" style={{color: '#0075A2'}}>Competitor Research</h3>
              <p className="paragraph">To gain a comprehensive understanding of industry standards, 
                I conducted <b>competitive analysis,</b> exploring numerous software tool landing pages and competitor interfaces.
                I then synthesized my findings into a <b>FigJam brainstorm, visually organizing key insights.</b> 
              </p> 
              <div style={{display: "flex", alignItems: "center", transition: "fill 0.3s"}}>
                <a 
                  href="https://www.figma.com/board/MRZRkVkVs13bk74oygmytL/MRDP-Mockup-Brainstorm?node-id=0-1&t=nJYOGZvGlj3XXSmv-1" 
                  style={{display: "flex", alignItems: "center", textDecoration: 'none'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#50C5DB"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                >
                <p className="paragraph" style={{marginRight: "5px"}}> FigJam Board! </p>
                <Link size={24} />
                </a>
              </div>
            </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >

            <div className="subsection" >
              <h3 className="subsection-title" style={{color: '#0075A2'}}>Interview with Client Point of Contact</h3>
              <p className="paragraph">
              In a meeting with our client point of contact, we discussed the current pain points of MRDP. 
              He provided guidance on <b>UX design improvements and codebase restructuring</b>.
              </p>
            </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
            
            <div className="boxsection" style={{textAlign: 'left', display:'flex', flexDirection: 'column', gap: '20px'}} >
              <h3 className="boxsection-title" style={{color: '#0075A2', textAlign: 'center' }}>Key Takeaways</h3>
              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <KeyRound color="#50C5DB" size={48} />
                <p className="paragraph" style={{marginLeft: "20px"}}>
                  MRDP needs a <b>proper landing page</b> dedicated to customizable content catered to host institution or lab
                </p>
              </div>
              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <KeyRound color="#50C5DB" size={48}/>
                <p className="paragraph" style={{marginLeft: "20px"}}>
                  Common feature around other competitor interfaces is a <b>instruction page or section</b> that guide first users
                </p>
              </div>

              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <MessageCircle color="#50C5DB" size={72}/>
                <p className="paragraph" style={{marginLeft: "20px"}}>
                  Focus on the Django version of the Globus data portal, using data.lsstdesc.org as an example. 
                  Similarly, our <b>data search functionality can be removed</b> for now.
                </p>
              </div>

              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <MessageCircle color="#50C5DB" size={72}/>
                <p className="paragraph" style={{marginLeft: "20px"}}>
                Implement <b>customization entrypoints</b> to allow research institutions to add custom pages (e.g., "Our Team" or institution-specific pages) using Django template functionality.
                </p>
              </div>
            </div>
            </motion.div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Problem Solving</h2>
          <div className="flex-container">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
          <div className="subsection">
            <h3 className="subsection-title" style={{color: '#0075A2'}}>Low-fidelity Mockups</h3>
            <p className="paragraph">I determined that the essential user needs of MRDP could be addressed through two pivotal pages,
              distilling the user flow to<b> the landing page and the transfer page. </b>
              <br/>
              <br/>
              The landing page was designed to act as a central hub, providing access to key information and functionalities, 
              while the transfer page was structured to streamline and simplify the data transfer process.
            </p>
          </div>
          </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
          
          <div className="boxsection" style={{display:'flex', flexDirection: 'column', gap: '20px'}} >
          <h3 className="boxsection-title" style={{color: '#50C5DB' }}>Landing Page</h3>
              <p className="paragraph" style={{textAlign: 'left'}}> 
              Using the comparative analysis, I redesigned landing page to incorporate:
              <ul className="bullet-list">
                <li><b>Introduction Section</b> to provide summary and login entry point</li>
                <li><b>Instruction Section</b> that guides users to access the transfer page through logging in</li>
                <li><b>Featured Datasets Section</b> to highlight from institute</li>
                <li><b>Customization section</b> that include e.g., team or institution introductions</li>
              </ul>
              </p>
              <div className="slidepng-container" style={{borderRadius: '0', justifyContent: 'center'}}>
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/Landing Page - Low.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"
                  style={{borderRadius: '0'}}/>
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
              <div className="boxsection" style={{textAlign: 'left', display:'flex', flexDirection: 'column', gap: '20px'}} >
              <h3 className="boxsection-title" style={{color: '#50C5DB', textAlign: 'center' }}>Transfer Page</h3>
              <p className="paragraph"> 
                I merged the search and transfer page to streamline the <b>process of finding source and destination points, </b>
                taking inspiration from travel booking and cloud storage platforms.
              </p>

              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/Transfer Page - Low 1.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>
              <p><b style={{color: '#766459', fontWeight: '700'}}>Transfer Steps:</b>
              <ol className="bullet-list" style={{margin: '0'}}>
                <li style={{margin: '10px'}}>Once user logs in, users have the option to select the <b>source, destination, and dataset to transfer</b></li>
                <li style={{margin: '10px'}}>Source and destination search expands so that users can choose and scroll through</li>
                <li style={{margin: '10px'}}><b>Search engine</b> allows users to filter through datasets and find an appropriate one</li>
                <li style={{margin: '10px'}}>Once selected, dataset should be added to the transfer queue </li>
                <li style={{margin: '10px'}}><b>Check transfer queue </b> as a final confirmation of <b>datasets to transfer</b></li>
              </ol>
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
            <h3 className="subsection-title" style={{color: '#0075A2' }}>High-fidelity Mockups</h3>
            <p className='paragraph'>
            Following client approval of the low-fidelity mockups and user flow, 
            I proceeded to develop a high-fidelity prototype that showcased the customization capabilities of MRDP. 
            This included a <b>detailed example featuring ESNet's branding</b>, such as logos and color schemes, 
            as well as tailored content to demonstrate how partner institutions could personalize their data portal experience.
            </p>
          </div>
          </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
          <div className="mockup-box">
            <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/Final - Landing Page 2025.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"
                  style={{ border: '1px solid black'}}/>
                </div>
            </div>
            <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/Final - Transfer Page 2025.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"
                  style={{ border: '1px solid black'}}/>
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
          <h3 className="subsection-title" style={{color: '#0075A2' }}>Core Improvements</h3>
          <p className="paragraph">
              <ul className="bullet-list" style={{margin: '0'}}>
                <li><b>Optimized Transfer Workflow:</b> Streamlined the source-to-destination selection process, creating an intuitive transfer experience.</li>
                <li><b>Enabled Customization Access:</b> Integrated clear entry points on the landing page, allowing partner institutions to easily tailor their portal's content.</li>
                <li><b>Enhanced File Navigation:</b> Simplified dataset browsing within source nodes, improving user efficiency.</li>
                <li><b>Improved Directory Tracking:</b> Implemented a breadcrumb trail, enabling users to easily navigate file locations.</li>
                <li><b>Organized Transfer Management:</b> Introduced a transfer queue, providing clear visibility of selected files and transfer status, reducing errors.</li>
              </ul>
              </p>
          </div>
          </motion.div>

          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Final Deliverable</h2>
          <div className="flex-container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
          <div className="subsection">
            <h3 className="subsection-title" style={{ color: '#0075A2' }}>Development</h3>
            <p className='paragraph'>
            During development, I focused on building a clean, digestible codebase <b>to simplify MRDP customization</b> for research institutions.
            </p>
            <div style={{display: "flex", alignItems: "center", transition: "fill 0.3s"}}>
                <a 
                  href="https://github.com/esnet/data-transfer-bootstrap/tree/esnet_branch" 
                  style={{display: "flex", alignItems: "center", textDecoration: 'none'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#50C5DB"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                >
                <p className="paragraph" style={{marginRight: "5px"}}> MRDP Github Repository! </p>
                <Link size={24} />
                </a>
            </div>
            <div style={{display: "flex", alignItems: "center", transition: "fill 0.3s"}}>
                <a 
                  href="https://mrdp.mooo.com" 
                  style={{display: "flex", alignItems: "center", textDecoration: 'none'}}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#50C5DB"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "black"}
                >
                <p className="paragraph" style={{marginRight: "5px"}}> MRDP Example Deployment! </p>
                <Link size={24} />
                </a>
            </div>
          
          <p className='paragraph'>
              This deployment was delivered to the Science Engagement Team in order to distribute to any <b>ESnet's partner administrators that requires MRDP.</b>
            </p>

          </div> 
          </motion.div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title" >Reflection</h2>
          <div className="flex-container">

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
              whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
              viewport={{ once: true }} // Only animate once
              transition={{ duration: 0.3 }} // Animation duration
            >
            <div className="subsection">
          <div className="team-photo">
              <StaticImage 
              src="../../static/ESNetMRDPPresentation.jpg"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '40px', borderRadius: '10px' }}
              />
              <p className="photoDescription">
              Student Poster Session for Berkeley Lab Computing Sciences
              <br/>
               Presenting to ESNet Executive Director Inder Monga
              </p>
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
              <h3 className="subsection-title" style={{ color: '#0075A2'}}>User Flow Redesign</h3>
              <p className="paragraph">
              My project aimed to design for a <b>niche group of lab researchers,</b> shifting my focus from previous 
              GenZ targeting design projects. I aimed to create a UX that prioritized versatility and approachability, 
              leading to a redesign of the website's user flow, which simplified navigation by <b>consolidating two-page operations 
              into a efficient single-page experience</b>.
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
              <h3 className="subsection-title" style={{ color: '#0075A2'}}>Balancing Usability and Developer Adaptability</h3>
              <p className="paragraph">
              Another focus was creating templates that <b>future developers could easily customize</b>, ensuring that my 
              design was both <b>user-friendly for end-users and adaptable for developers</b>. This experience broadened my perspective on user 
              experience design and highlighted the importance of balancing technical requirements with usability.
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

export default ESNetMRDP;