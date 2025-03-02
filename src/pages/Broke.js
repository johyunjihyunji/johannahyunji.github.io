import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function Broke() {
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
            src="../../static/2025_headers/Artboard 151_1.png"
            alt="Project Header"
            placeholder="blurred"
            layout="constrained"
            style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
          />
        </div>

        <div className="project-title">Broke App for Travel Budgeting</div>
        <div className="project-summary">
          Led the end-to-end design of the Broke travel budgeting app, from research and branding to high-fidelity prototyping</div>
      
      
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
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Sutardja Center Entrepreneurship & Technology</h3>
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

              <p className="paragraph"><b>The last three weeks of my study abroad program, I participated in EIA.</b></p>

            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Project Scope</h2>
          <div className="flex-container">
          <p className="paragraph">
              First day of EIA, I teamed up with 4 other passionate travellers to identify and solve problems under <b style={{fontSize: '1.4', fontFamily: 'Crimson-bold-italics', color: '#000065'}}>"travel accessibility"</b>.
              </p>
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
            <div className="subsection">
              
              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Problem Space</h3>
              <p className="paragraph">
              Through <b> 200+ survey results and 17 interviews,</b> we identified the following pain points of travel accessibility for young adults: <br/>
               financial constraints, lack of budgeting knowledge,
                limited access to travel resources.
                </p>
                <div className="header-image">
                <StaticImage 
                  src="../../static/Brokehmw.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ borderRadius: '20px', border: '1.2px solid #000000'}}
                />
              </div>


              <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Ideation</h3>
              <p className="paragraph">
              We recognized a common aspiration among individuals to explore their dream destinations.
              <br/>
              The primary insight stemmed from the understanding financial barriers, particularly for middle to low-income young adults.
              <br/>
              <br/>
              <br/>
              <br/>
              <b>Four Focal Points:</b>
              </p>
              <p className="paragraph" >
                <b style={{margin: '5px', padding: '3px', borderRadius: '10px', fontFamily: 'Crimson-bold-italic', fontSize: '1.2rem', background: 'rgba(107, 12, 118, 0.2)', color: '#000065'}}>Travel Budgeting: </b>
                Users struggle to create budgets that align with their specific financial situation and travel goals.<br />
                <br/> 
                <b style={{margin: '5px', padding: '3px', borderRadius: '10px', fontFamily: 'Crimson-bold-italic', fontSize: '1.2rem', background: 'rgba(107, 12, 118, 0.2)', color: '#000065'}}>Lack of Motivation: </b>
                Users often lose track of their spending and saving in real-time, discouraging them from traveling.<br />
                <br/> 
                <b style={{margin: '5px', padding: '3px', borderRadius: '10px', fontFamily: 'Crimson-bold-italic', fontSize: '1.2rem', background: 'rgba(107, 12, 118, 0.2)', color: '#000065'}}>Burden of Currency Exchange: </b> 
                Users face financial burden and security concerns when making transactions abroad.  <br />
              </p>
              

              <div className="team-photo" style={{marginBottom: '0' }}>
              <StaticImage 
              src="../../static/brokecard.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ 
                width: '40%',
                marginTop: '40px'
              }}
              />
            </div>
            <h3 className="subsection-title" style={{color: '#000065', fontFamily: 'Crimson-bold', fontSize: '2.5rem' }}>Broke</h3>
              <p className="paragraph" style={{margin: '0'}}>
              a <b style={{background: 'none'}}>travel budgeting mobile app</b> that allows users to <b>track expenses, manage transactions, and plan itineraries.</b>
              </p>
            </div>
          </div>
        </div>

        <div className="section" style = {{marginBottom: '10px'}}>
          <h2 className="section-title">Brand Design System</h2>
          <div className="flex-container">
          <p className='paragraph' >
          Drawing inspiration from EIA’s color scheme, I <b>developed a brand design system</b> featuring a vibrant palette of yellow and green paired with deeper blue and purple tones. 
          </p>
          
            <div className="slidepng-container">
            <div className="team-photo" ref={el => imageRefs.current.push(el)}>
              <StaticImage
                src="../../static/BrokeBrandDesignHigh.png"
                alt="Project Header"
                placeholder="blurred"
                layout="constrained"
                className="slidepng"
              />
            </div>
            </div>      
          
        </div>
        </div>


        <div className="section" style = {{marginBottom: '10px'}}>
          <h2 className="section-title">Prototyping</h2>
          <div className="flex-container">
          <h3 className="subsection-title" style={{ color: '#6B0C76' }}>Low-fidelity Prototyping</h3>
          <p className="paragraph">
          The team came together to brainstorm and sketch out the structure of our budgeting tool, targeting each painpoint at a time.
          </p>
          
          <div style={{display: "flex", alignItems: "center", padding: '0', marginTop: '40px'}}>
          <svg style={{marginRight: '10px'}}width="30" height="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M21.7142 7.18356C23.5568 6.04477 25.8577 5.94124 27.7951 6.90996L37.5 11.7624L47.2049 6.90996C48.9645 6.03019 51.0355 6.03019 52.7951 6.90996L62.5 11.7624L72.2049 6.90996C73.9645 6.03019 76.0355 6.03019 77.7951 6.90996L87.5 11.7624L97.2049 6.90996C98.9645 6.03019 101.036 6.03019 102.795 6.90996L112.5 11.7624L122.205 6.90996C124.142 5.94124 126.443 6.04477 128.286 7.18356C130.128 8.32235 131.25 10.334 131.25 12.5001V137.5C131.25 139.666 130.128 141.678 128.286 142.817C126.443 143.955 124.142 144.059 122.205 143.09L112.5 138.238L102.795 143.09C101.036 143.97 98.9645 143.97 97.2049 143.09L87.5 138.238L77.7951 143.09C76.0355 143.97 73.9645 143.97 72.2049 143.09L62.5 138.238L52.7951 143.09C51.0355 143.97 48.9645 143.97 47.2049 143.09L37.5 138.238L27.7951 143.09C25.8577 144.059 23.5568 143.955 21.7142 142.817C19.8716 141.678 18.75 139.666 18.75 137.5V12.5001C18.75 10.334 19.8716 8.32235 21.7142 7.18356ZM31.25 22.6128V127.387L34.7049 125.66C36.4645 124.78 38.5355 124.78 40.2951 125.66L50 130.512L59.7049 125.66C61.4645 124.78 63.5355 124.78 65.2951 125.66L75 130.512L84.7049 125.66C86.4645 124.78 88.5355 124.78 90.2951 125.66L100 130.512L109.705 125.66C111.464 124.78 113.536 124.78 115.295 125.66L118.75 127.387V22.6128L115.295 24.3403C113.536 25.2201 111.464 25.2201 109.705 24.3403L100 19.4878L90.2951 24.3403C88.5355 25.2201 86.4645 25.2201 84.7049 24.3403L75 19.4878L65.2951 24.3403C63.5355 25.2201 61.4645 25.2201 59.7049 24.3403L50 19.4878L40.2951 24.3403C38.5355 25.2201 36.4645 25.2201 34.7049 24.3403L31.25 22.6128Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M49.2417 49.2419C52.758 45.7256 57.5271 43.7501 62.4999 43.7501H99.9999C103.452 43.7501 106.25 46.5483 106.25 50.0001C106.25 53.4519 103.452 56.2501 99.9999 56.2501H62.4999C60.8423 56.2501 59.2526 56.9086 58.0805 58.0807C56.9084 59.2528 56.2499 60.8425 56.2499 62.5001C56.2499 64.1577 56.9084 65.7474 58.0805 66.9195C59.2526 68.0916 60.8423 68.7501 62.4999 68.7501H87.4999C92.4728 68.7501 97.2419 70.7256 100.758 74.2419C104.275 77.7582 106.25 82.5273 106.25 87.5001C106.25 92.4729 104.275 97.2421 100.758 100.758C97.2419 104.275 92.4728 106.25 87.4999 106.25H49.9999C46.5482 106.25 43.7499 103.452 43.7499 100C43.7499 96.5484 46.5482 93.7501 49.9999 93.7501H87.4999C89.1575 93.7501 90.7473 93.0917 91.9194 91.9195C93.0915 90.7474 93.7499 89.1577 93.7499 87.5001C93.7499 85.8425 93.0915 84.2528 91.9194 83.0807C90.7473 81.9086 89.1575 81.2501 87.4999 81.2501H62.4999C57.5271 81.2501 52.758 79.2747 49.2417 75.7584C45.7254 72.2421 43.7499 67.4729 43.7499 62.5001C43.7499 57.5273 45.7254 52.7582 49.2417 49.2419Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M75.0001 37.5C78.4518 37.5 81.2501 40.2982 81.2501 43.75V106.25C81.2501 109.702 78.4518 112.5 75.0001 112.5C71.5483 112.5 68.7501 109.702 68.7501 106.25V43.75C68.7501 40.2982 71.5483 37.5 75.0001 37.5Z" fill="black"/>
          </svg>
            <p style={{margin: '0', fontSize: '1rem', fontFamily: 'Crimson-bold-italic', color: 'black'}}>
            Expense tracking and bill splitting                 
            </p>
          </div>
          <ul>
            <li>Users can track expenses and split bills.</li>
            <li>Specific transactions and payments are recorded.</li>
            <li>Options for splitting bills are available.</li>
          </ul>

          <div style={{display: "flex", alignItems: "center"}}>
          <svg  style={{marginRight: '10px'}} width="30" height="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M92.9918 92.9916C96.5081 89.4753 101.277 87.4999 106.25 87.4999H134.625C138.077 87.4999 140.875 90.2981 140.875 93.7499C140.875 97.2017 138.077 99.9999 134.625 99.9999H106.25C104.592 99.9999 103.003 100.658 101.831 101.83C100.659 103.003 100 104.592 100 106.25V134.625C100 138.077 97.2018 140.875 93.7501 140.875C90.2983 140.875 87.5001 138.077 87.5001 134.625V106.25C87.5001 101.277 89.4755 96.5079 92.9918 92.9916Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M43.75 14.625C47.2018 14.625 50 17.4232 50 20.875V31.25C50 34.5652 51.317 37.7446 53.6612 40.0888C56.0054 42.433 59.1848 43.75 62.5 43.75C67.4728 43.75 72.2419 45.7254 75.7582 49.2418C79.2746 52.7581 81.25 57.5272 81.25 62.5C81.25 65.9232 84.0768 68.75 87.5 68.75C89.1576 68.75 90.7473 68.0915 91.9194 66.9194C93.0915 65.7473 93.75 64.1576 93.75 62.5C93.75 52.1732 102.173 43.75 112.5 43.75H132.313C135.764 43.75 138.563 46.5482 138.563 50C138.563 53.4518 135.764 56.25 132.313 56.25H112.5C109.077 56.25 106.25 59.0768 106.25 62.5C106.25 67.4728 104.275 72.2419 100.758 75.7582C97.2419 79.2746 92.4728 81.25 87.5 81.25C77.1732 81.25 68.75 72.8268 68.75 62.5C68.75 60.8424 68.0915 59.2527 66.9194 58.0806C65.7473 56.9085 64.1576 56.25 62.5 56.25C55.8696 56.25 49.5107 53.6161 44.8223 48.9277C40.1339 44.2393 37.5 37.8804 37.5 31.25V20.875C37.5 17.4232 40.2982 14.625 43.75 14.625Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.5625 68.7501C6.5625 65.2983 9.36072 62.5001 12.8125 62.5001H31.25C36.2228 62.5001 40.9919 64.4756 44.5083 67.9919C48.0246 71.5082 50 76.2773 50 81.2501V87.5001C50 89.1577 50.6585 90.7474 51.8306 91.9195C53.0027 93.0916 54.5924 93.7501 56.25 93.7501C61.2228 93.7501 65.9919 95.7256 69.5082 99.2419C73.0246 102.758 75 107.527 75 112.5V137.188C75 140.639 72.2018 143.438 68.75 143.438C65.2982 143.438 62.5 140.639 62.5 137.188V112.5C62.5 110.843 61.8415 109.253 60.6694 108.081C59.4973 106.909 57.9076 106.25 56.25 106.25C51.2772 106.25 46.5081 104.275 42.9918 100.758C39.4754 97.2421 37.5 92.4729 37.5 87.5001V81.2501C37.5 79.5925 36.8415 78.0028 35.6694 76.8307C34.4973 75.6586 32.9076 75.0001 31.25 75.0001H12.8125C9.36072 75.0001 6.5625 72.2019 6.5625 68.7501Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M74.9999 18.7501C43.9339 18.7501 18.7499 43.9341 18.7499 75.0001C18.7499 106.066 43.9339 131.25 74.9999 131.25C106.066 131.25 131.25 106.066 131.25 75.0001C131.25 43.9341 106.066 18.7501 74.9999 18.7501ZM6.24994 75.0001C6.24994 37.0305 37.0304 6.25012 74.9999 6.25012C112.97 6.25012 143.75 37.0305 143.75 75.0001C143.75 112.97 112.97 143.75 74.9999 143.75C37.0304 143.75 6.24994 112.97 6.24994 75.0001Z" fill="black"/>
          </svg>

            <p style={{margin: '0', fontSize: '1rem', fontFamily: 'Crimson-bold-italic', color: 'black'}}>
            Trip planning and budgeting                
            </p>
          </div>
          <ul>
            <li>Users can plan trips and manage budgets.</li>
            <li>Budget calculations and currency options are provided.</li>
            <li>Past trips and current progress can be viewed.</li>
          </ul>

          <div style={{display: "flex", alignItems: "center"}}>
          <svg  style={{marginRight: '10px'}} width="30" height="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M75 24.9999C61.1929 24.9999 50 36.1928 50 49.9999C50 63.807 61.1929 74.9999 75 74.9999C88.8071 74.9999 100 63.807 100 49.9999C100 36.1928 88.8071 24.9999 75 24.9999ZM37.5 49.9999C37.5 29.2892 54.2893 12.4999 75 12.4999C95.7107 12.4999 112.5 29.2892 112.5 49.9999C112.5 70.7106 95.7107 87.4999 75 87.4999C54.2893 87.4999 37.5 70.7106 37.5 49.9999Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M35.2252 91.4752C45.7742 80.9263 60.0816 75 75 75C89.9184 75 104.226 80.9263 114.775 91.4752C125.324 102.024 131.25 116.332 131.25 131.25C131.25 134.702 128.452 137.5 125 137.5C121.548 137.5 118.75 134.702 118.75 131.25C118.75 119.647 114.141 108.519 105.936 100.314C97.7312 92.1094 86.6032 87.5 75 87.5C63.3968 87.5 52.2688 92.1094 44.0641 100.314C35.8594 108.519 31.25 119.647 31.25 131.25C31.25 134.702 28.4518 137.5 25 137.5C21.5482 137.5 18.75 134.702 18.75 131.25C18.75 116.332 24.6763 102.024 35.2252 91.4752Z" fill="black"/>
          </svg>
            <p style={{margin: '0', fontSize: '1rem', fontFamily: 'Crimson-bold-italic', color: 'black'}}>
            User profile and preferences              
            </p>
          </div>
          <ul>
            <li>Users can update their profiles and preferences.</li>
            <li> Preferences for accommodations and activities can be set.</li>
            <li>(Optional) page for managing subscriptions, if subscription based.</li>
          </ul>

          <iframe style={{ marginBottom: "8vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
             width="800" height="450" src="https://embed.figma.com/board/3jvzIuP94ZqnYa6bmLlieG/Broke-Wirefram?node-id=0-1&embed-host=share" allowfullscreen></iframe>
          
       
          <h3 className="subsection-title" style={{ color: '#6B0C76' }}>High-fidelity Prototyping</h3>
          <p className="paragraph">
          After iterating through <b>multiple rounds of low-fidelity wireframes and conducting user experience interviews,</b>
          <br/>
          I crafted high-fidelity wireframe prototype.
          <br/>          </p>

`          <iframe 
          title="Broke App Prototype"
          style={{ marginBottom: "2vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
          src="https://embed.figma.com/proto/FsqiWSeQoGw2Ogth08y5pP/Untitled?page-id=0%3A1&node-id=70-1308&node-type=canvas&viewport=477%2C212%2C0.09&scaling=scale-down&content-scaling=fixed&starting-point-node-id=70%3A1308&embed-host=share" 
          allowFullScreen
          ></iframe>`
          <p className='paragraph'>
         This prototype was <b>presented to potential investors and program instructors/mentors at the final day of EIA program.</b> 
          </p>
          </div>
          
        </div>




        <div className="section">
          <h2 className="section-title">Reflection</h2>
          <div className="flex-container">
          <div className="team-photo" style={{display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: "center"}}>
              <StaticImage 
              src="../../static/BrokeTeam.png"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '25px',borderRadius: '10px' , width: '50%'}}
              />
              <p className="photoDescription">
              Broke team after pitching to investors at the last day of EIA program!
              </p>
            </div>

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



            

          </div>
        </div>

        

        



        

      </div>
      <Footer />
      </>
  );
}

export default Broke;