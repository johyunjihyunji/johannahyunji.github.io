import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
// import App from '../index';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Yelp() {

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
            src="../../static/2025_headers/Artboard 61.png"
            alt="Project Header"
            style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
          />
        </div>


        <div className="project-title">Yelp Home Services</div>
        <div className="project-summary">
          Developed video ad concepts and brand design system for Yelp Home Services performance marketing.</div>
      
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
              Consumer Survey
              <br />
              Brand Design System
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
            UMA Design Team
            <br/>
            Yelp Marketing Team
            </p>
          </div>
          
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{color: "#E00707"}}>Yelp Home Services</h3>
              <p className="paragraph">
                My team focused on promoting <b>Yelp's Home Services</b>,<br/>which <b>connects consumers with trusted professionals for various home improvement tasks.</b> 
                </p>
                <p className="paragraph">
                By leveraging Yelp's pre-established extensive food businesses review platform, <br/>the project aims to <b>broaden the scope of Yelp's recognition and 
                enhance visibility</b> for these home service providers. 
                </p>

                <div className="team-photo" >
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
                <p className="paragraph">
                There are two project scopes assigned by Yelp's team:
              </p>

              <h3 className="subsection-title" style={{color: "#FF1A1A"}}>1. Performance Marketing</h3>
              <p className="paragraph">
              Deliver Performance Marketing ideations for <b>Home Services project</b> to enhance engagement <b> among Gen Z, millennials, and young homeowners </b> needing home services. 
              </p>

              <h3 className="subsection-title"  style={{color: "#FF1A1A"}}>2. Brand Design System</h3>
              <p className="paragraph">
              Establish a robust <b>graphic design system</b> that reinforces brand consistency and strengthens connection with three 
              distinct audiences: <b>Consumers, Local Businesses, and Brand stakeholders</b>.
              </p>

            </div>
            
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">User Research</h2>
          <div className="flex-container">

            
            <div className="subsection">
            <h3 className="subsection-title" style={{color: "#E00707"}}>Preliminary Research</h3>

            <p className="paragraph">
              We did an initial research on marketing ad trends and content preferences for different user groups: Gen Z, Millennials, and Gen X/Homeowners
              </p>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpPreliminaryResearch.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <h3 className="subsection-title"  style={{color: "#E00707"}}>SWOT Analysis</h3>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpSwot.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>
              <h3 className="subsection-title"  style={{color: "#E00707"}}>User Survey</h3>
              <p className="paragraph">
              We conducted a user survey to collect insights regarding <b>Yelp sentiments, problem spaces/needs in home services, and preferences in ad content. </b>
              There was a total of 163 respondents primarily in their early 20s.
              </p>

              <h3 className="subsection-title" style={{color: "#FF1A1A", fontSize: '1.2rem', marginLeft: '20px'}}>Yelp & Home Services</h3>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpUserSurvey1.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <h3 className="subsection-title" style={{color: "#FF1A1A", fontSize: '1.2rem', marginLeft: '20px'}}>Advertisement Content</h3>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpUserSurvey2.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <h3 className="subsection-title"  style={{color: "#E00707"}}>A/B Testing</h3>
              <p className="paragraph">
              My team conducted<b> A/B testing with 21 participants.</b>
              <br/><br/>
              Each participant is shown a pair of video advertisements and asked to provide feedback. The purpose is to gather insights on which advertisement version performs better based on viewer feedback. 
              </p>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpABTesting.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

            </div>

          </div>
        </div>


        <div className="section">
          <h2 className="section-title" >User Personas</h2>
          <div className="flex-container">
            <div className="subsection">

            <p className="paragraph">
              Based off of the preliminary research, user surveys, and A/B testing, our team developed 3 user personas representative of each user group we are studying.
            </p>

              <h3 className="subsection-title"  style={{color: "#E00707", marginLeft: '20px', fontSize: '1.2rem'}}>User Group 1: Gen Z</h3>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpUserPersona1.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <h3 className="subsection-title"  style={{color: "#E00707", marginLeft: '20px', fontSize: '1.2rem'}}>User Group 2: Millennials</h3>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpUserPersona3.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>


              <h3 className="subsection-title"  style={{color: "#E00707", marginLeft: '20px', fontSize: '1.2rem'}}>User Group 3: Gen X / Homeowners</h3>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpUserPersona2.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

            </div>
            
          </div>
        </div>

        <div className="section">
          <h2 className="section-title"> Solution 1:
            <br/>
           Performance Marketing
           </h2>
          <div className="flex-container">
            <div className="subsection">
            <p className="paragraph">
              For performance marketing content ideation, we delivered <b>story boards for 3 different ad video concepts:</b>
            </p>

            <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/VideoConceptDirection.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>


              <h3 className="subsection-title" style={{color: "#E00707"}}> Grow with Yelp </h3>

              <p className="paragraph">
              <b>“Grow with Yelp”</b> is a storytelling-based advertisement that showcases how Yelp is able to <b>continuously provide</b> the tools one needs throughout their <b>different stages of life.</b>
              </p>

              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/GrowWithYelp.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

               <p className="paragraph">
              We aim to <b>grow brand loyalty within the younger generation.</b>
              <br/>
              <br/>
               As young users face new responsibilities, they should view <b>Yelp as a go-to app</b> they are already familiar with. 
               <br/>
              It repositions Yelp as <b style={{fontFamily: 'Crimson-semibold-italic'}}>an everyday lifestyle tool rather than just a food review app.</b>
              </p>

              
              <h3 className="subsection-title" style={{color: "#E00707"}}>Yelp Demo</h3>
              <p className="paragraph">
              This is an advertisement designed to highlight the <b>diverse services available in Yelp’s home service section.</b>
              </p>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/Demo.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <p className="paragraph">
              The purpose is to demonstrate how Yelp makes <b>home management easier</b> and more efficient.
              <br/>
              This advertisement aims to position Yelp as a <b style={{fontFamily: 'Crimson-semibold-italic'}}>trusted resource in home management and improvement.</b>
              </p>
             

              <h3 className="subsection-title" style={{color: "#E00707"}}>Yelp for Help</h3>
              <p className="paragraph">
              "Yelp for Help" aims to solidify Yelp's brand identity as the <b>ultimate go-to resource for quick and reliable assistance.</b> 
              </p>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpForHelp.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div>

              <p className="paragraph">
              Through <b>engaging typography transitions,</b> the video <b>captures the fast-paced lifestyle of younger audiences</b>.
              <br/>
               This concept <b style={{fontFamily: 'Crimson-semibold-italic'}}>positions Yelp as a verb</b> synonymous with <b style={{fontFamily: 'Crimson-semibold-italic'}}>seeking help and recommendations</b>.
              </p>
              

              {/* <h3 className="subsection-title">Funny</h3>
              <p className="paragraph">
              "Yelp for Help" is a dynamic video concept that aims to solidify Yelp's brand identity as the <b>ultimate go-to resource</b> for quick and reliable assistance in everyday situations.
              </p>

              <p className="paragraph">
              The purpose is to demonstrate how Yelp makes home management easier and more efficient, helping users find and connect with top professionals effortlessly.

              This advertisement aims to position Yelp as a <b>trusted resource in home management and improvement.</b>
              </p>
              <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/Funny.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
                </div>
              </div> */}




            </div>
            
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Solution 2: <br/> Brand Design System</h2>
          <div className="flex-container">

          <div className="subsection">


          <h3 className="subsection-title" style={{color: "#E00707"}}>Consumer</h3>

          <p className="paragraph">
          Yelp for consumers should:
            <ul>
              <li>Be the <b>most visually appealing</b>, targeting a broad audience with <b>eye-catching design</b>.</li>
              <li>Utilize a <b>wide color palette</b> with strong pops of red to expand the Yelp brand beyond food. </li>
              <li><b>Use diverse shapes</b> while maintaining order, establishing Yelp as both refreshingly fun and reliable.</li>
            </ul>
          </p>

          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Design System Direction</h3>
          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/DesignSystemDirectionConsumers.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Mockups</h3>


          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpForConsumers1.png"
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
                              src="../../static/yelp/YelpForConsumers2.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Templates</h3>


          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpForConsumers3.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>

          <h3 className="subsection-title" style={{color: "#E00707"}}>Business</h3>

          <p className="paragraph">
          Yelp for business should:
          <ul>
            <li>Be <b>minimalistic and straightforward,</b> targeting local businesses viewing Yelp as a <b>growth opportunity within a community-based</b> platform.</li>
            <li>Utilize a <b>minimal color palette</b> featuring strong reds and secondary blues to establish a <b>professional</b> tone that businesses can identify with. </li>
            <li><b>Simple forms and relatable imagery</b> fosters trust and familiarity with Yelp among businesses.</li>
          </ul>
          </p>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Design System Direction</h3>
          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/DesignSystemDirectionLocalBusiness.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Mockups</h3>


          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpBusiness2.png"
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
                              src="../../static/yelp/YelpBusiness1.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Templates</h3>


          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpBusiness3.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>


          

          <h3 className="subsection-title" style={{color: "#E00707"}}>Brand</h3>

          <p className="paragraph">
          Yelp for brands should:
          <ul>
            <li>Use <b>bold and memorable, </b> targeting large brands that can leverage Yelp’s platform for <b>targeted advertising.</b></li>
            <li>Use a <b>limited color palette</b> primarily red paired with some whites and blacks, to enhance <b>boldness and fun.</b> </li>
            <li>Incorporate<b>singular shapes, greater white space, </b> and limited image content to create memorable grand gestures.</li>
          </ul>
          </p>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Design System Direction</h3>

          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/DesignSystemDirectionBrand.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Mockups</h3>

          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpBrands1.png"
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
                              src="../../static/yelp/YelpBrands2.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>
          <h3 style={{fontFamily: 'Crimson-semibold-italic', color: "#FF1A1A", fontSize: '1.5rem', marginLeft: '20px', marginBottom: "0"}}>Graphic Templates</h3>

          <div className="slidepng-container">
                          <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                            <StaticImage
                              src="../../static/yelp/YelpBrands3.png"
                              alt="Project Header"
                              placeholder="blurred"
                              layout="constrained"
                              className="slidepng"
                            />
          </div>
          </div>


            </div>
          </div>
        </div>




        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">

          <div className="team-photo">
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

            <div className="subsection">
              <h3 className="subsection-title">Designing Branding System</h3>
              <p className="paragraph">
              The biggest challenge was creating a branding system for Yelp that <b>remained cohesive 
        under the main brand while catering to different target groups. </b> Took trial and error to successfully differentiate
        the design system for consumers, brands, and businesses, maintaining Yelp's overall identity while addressing the unique needs of each audience.
              </p>

              <h3 className="subsection-title">Video Concept Ideation</h3>
              <p className="paragraph">
              I particularly enjoyed the video concept ideation and storyboard mock-ups stage, given my experience 
              in personal video content creation. This project offered a new perspective as I approached <b>video creation from a marketing standpoint, </b>
              contrasting to catering personal memories and experiences.
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