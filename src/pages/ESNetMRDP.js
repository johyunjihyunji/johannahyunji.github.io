import React, { useEffect, useRef, useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/Project.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ESNetMRDP() {
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
          Redesigned Data Transfer Portal: Streamlined data transfers, created customizable code, and improved user experience.</div>
      
        <div className="info-row">
          <div className="info-item">
            <h3 className="info-title">Role</h3>
            <p className="info-content">UX Design & Engineer Intern</p>
          </div>
          <div className="info-item">
            <h3 className="info-title">Skills</h3>
            <p className="info-content">
              <b>UI Engineering:</b> 
              <br/>React Development, Jinja Templating, Django Framework, Ansible, Docker 
              <br />
              <b>UX Redesign:</b> <br/>UX Research, UX Interface Mockups, User Flow, Wireframing
            </p>
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
        </div>

        <div className="section">
          <h2 className="section-title" >Problem Space</h2>
          <div className="flex-container">
            <div className="subsection">
              <h3 className="subsection-title" style={{  color: '#0075A2' }}>Energy Science Network's Modern Research Data Portal</h3>
              <p className="paragraph">
              Energy Sciences Network is a <b>high-performance network</b> designed to support large-scale scientific research <br/>
               by <b>interconnecting the U.S. 
              Department of Energy's national laboratory system</b>. 
              </p>
              <p className="paragraph">
                Modern Research Data Transfer (MRDP) streamlines high-speed data transfer process by:
              </p>
              <p className="paragraph">
              <ul className="bullet-list">
                <li>Enables <b>file transfers between authorized Globus points.</b></li>
                <li>Provides a <b>single customoizable portal</b> for initiating transfers, browsing datasets, and monitoring progress.</li>
                <li>Accelerates research workflows, facilitating collaboration among researchers.</li>
              </ul>
              </p>
            </div>

            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0075A2' }}>Problem</h3>

              <div>
                <StaticImage 
                  src="../../static/esnetmrdp/esnethmw.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  style={{ borderRadius: '20px', border: '1.2px solid #000000', marginBottom: '0px'}}
                />
              </div>

              <p className="paragraph">
              During the internship, I improved Modern Research Data Portal (MRDP) through UI/UX redesign and Django-based web development to 
              create a <b>versatile, distributable, and customizable codebase solution</b>.
              </p>

              <div style={{display: "flex", alignItems: "center"}}>
            <p className="paragraph" style={{marginRight: "5px"}}>
            check out MRDP Live Site!
            </p>
            <a 
              href="https://mrdp.mooo.com" 
              style={{display: "flex", alignItems: "center"}}
            >
              <svg 
                width="20" 
                height="20"  
                viewBox="0 0 150 150" 
                fill="black" 
                xmlns="http://www.w3.org/2000/svg"
                style={{transition: "fill 0.3s"}}
                onMouseEnter={(e) => e.currentTarget.style.fill = "#50C5DB"}
                onMouseLeave={(e) => e.currentTarget.style.fill = "black"}
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2501 43.7499C29.5925 43.7499 28.0027 44.4084 26.8306 45.5805C25.6585 46.7526 25.0001 48.3423 25.0001 49.9999V118.75C25.0001 120.407 25.6585 121.997 26.8306 123.169C28.0027 124.341 29.5925 125 31.2501 125H100C101.658 125 103.247 124.341 104.419 123.169C105.592 121.997 106.25 120.407 106.25 118.75V81.2499C106.25 77.7981 109.048 74.9999 112.5 74.9999C115.952 74.9999 118.75 77.7981 118.75 81.2499V118.75C118.75 123.723 116.775 128.492 113.258 132.008C109.742 135.524 104.973 137.5 100 137.5H31.2501C26.2772 137.5 21.5081 135.524 17.9918 132.008C14.4755 128.492 12.5001 123.723 12.5001 118.75V49.9999C12.5001 45.0271 14.4755 40.2579 17.9918 36.7416C21.5081 33.2253 26.2773 31.2499 31.2501 31.2499H68.7501C72.2018 31.2499 75.0001 34.0481 75.0001 37.4999C75.0001 40.9517 72.2018 43.7499 68.7501 43.7499H31.2501Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.5001 18.7499C87.5001 15.2981 90.2983 12.4999 93.7501 12.4999H131.25C134.702 12.4999 137.5 15.2981 137.5 18.7499V56.2499C137.5 59.7017 134.702 62.4999 131.25 62.4999C127.798 62.4999 125 59.7017 125 56.2499V24.9999H93.7501C90.2983 24.9999 87.5001 22.2017 87.5001 18.7499Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M135.669 14.3305C138.11 16.7712 138.11 20.7285 135.669 23.1693L66.9194 91.9193C64.4786 94.3601 60.5214 94.3601 58.0806 91.9193C55.6398 89.4785 55.6398 85.5212 58.0806 83.0805L126.831 14.3305C129.271 11.8897 133.229 11.8897 135.669 14.3305Z" />
              </svg>
            </a>
          </div>

            </div>
            
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">UX Research</h2>
          <div className="flex-container">
          <div className="subsection">
            <h3 className="subsection-title" style={{color: '#0075A2' }}>UX Audit</h3>
                <p className="paragraph">
                  I conducted an audit of the original MRDP interface and synthesized a <b>SWOT analysis.</b>
                </p>

                <div className="slideshow-container"  style={{ marginBottom: '60px'}}>
                                <div className="slide fade">
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG1.png" alt="Slide 1" />
                                    <p className="photoDescription">MRDP Original Landing / About Page</p>
                                </div>
                                <div className="slide fade">
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG2.png" alt="Slide 2" />
                                    <p className="photoDescription">MRDP Original Transfer Page</p>
                                </div>
                                <div className="slide fade">
                                    <StaticImage className="sli" src="../../static/esnetmrdp/mrdpOG3.png" alt="Slide 3" />
                                    <p className="photoDescription">MRDP Original Dataset Search Page</p>
                                </div>
                                
                                <a className="prev" onClick={() => changeSlide(-1)}>&#10094;</a>
                                <a className="next" onClick={() => changeSlide(1)}>&#10095;</a>
                            </div>

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

            <div className="subsection">
              <h3 className="subsection-title" style={{color: '#0075A2' }}>Competitor Research</h3>
              <p className="paragraph">By going through software tool landing pages and other competitor interfaces, 
                I compiled my analysis in a FigJam brainstorm. 
                <br/>Key Takeaways:
              </p> 

              <div style={{display: "flex", alignItems: "center"}}>
              <svg style={{flexShrink: 0, width: '30px', height: '30px', marginRight: '10px'}} viewBox="0 0 150 150" fill="#50C5DB" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M137.5 81.2501C140.952 81.2501 143.75 84.0483 143.75 87.5001C143.75 102.419 137.824 116.726 127.275 127.275C116.726 137.824 102.418 143.75 87.4999 143.75C84.0482 143.75 81.2499 140.952 81.2499 137.5C81.2499 134.048 84.0482 131.25 87.4999 131.25C99.1032 131.25 110.231 126.641 118.436 118.436C126.641 110.231 131.25 99.1033 131.25 87.5001C131.25 84.0483 134.048 81.2501 137.5 81.2501Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M86.7417 49.2419C90.258 45.7256 95.0271 43.7501 99.9999 43.7501C104.973 43.7501 109.742 45.7256 113.258 49.2419C116.774 52.7582 118.75 57.5273 118.75 62.5001V68.7501C118.75 72.2019 115.952 75.0001 112.5 75.0001C109.048 75.0001 106.25 72.2019 106.25 68.7501V62.5001C106.25 60.8425 105.591 59.2528 104.419 58.0807C103.247 56.9086 101.658 56.2501 99.9999 56.2501C98.3423 56.2501 96.7526 56.9086 95.5805 58.0807C94.4084 59.2528 93.7499 60.8425 93.7499 62.5001C93.7499 65.9519 90.9517 68.7501 87.4999 68.7501C84.0482 68.7501 81.2499 65.9519 81.2499 62.5001C81.2499 57.5273 83.2254 52.7582 86.7417 49.2419Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7418 42.9917C65.2581 39.4754 70.0272 37.5 75 37.5C79.9728 37.5 84.7419 39.4754 88.2582 42.9917C91.7746 46.5081 93.75 51.2772 93.75 56.25V62.5C93.75 65.9518 90.9518 68.75 87.5 68.75C84.0482 68.75 81.25 65.9518 81.25 62.5V56.25C81.25 54.5924 80.5915 53.0027 79.4194 51.8306C78.2473 50.6585 76.6576 50 75 50C73.3424 50 71.7527 50.6585 70.5806 51.8306C69.4085 53.0027 68.75 54.5924 68.75 56.25V62.5C68.75 65.9518 65.9518 68.75 62.5 68.75C59.0482 68.75 56.25 65.9518 56.25 62.5V56.25C56.25 51.2772 58.2254 46.5081 61.7418 42.9917Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7418 11.7419C40.2581 8.22556 45.0273 6.25012 50.0001 6.25012C54.9729 6.25012 59.742 8.22556 63.2583 11.7419C66.7746 15.2582 68.7501 20.0273 68.7501 25.0001V59.3751C68.7501 62.8269 65.9518 65.6251 62.5001 65.6251C59.0483 65.6251 56.2501 62.8269 56.2501 59.3751V25.0001C56.2501 23.3425 55.5916 21.7528 54.4195 20.5807C53.2474 19.4086 51.6577 18.7501 50.0001 18.7501C48.3425 18.7501 46.7527 19.4086 45.5806 20.5807C44.4085 21.7528 43.7501 23.3425 43.7501 25.0001V87.5001C43.7501 90.9519 40.9518 93.7501 37.5001 93.7501C34.0483 93.7501 31.2501 90.9519 31.2501 87.5001V25.0001C31.2501 20.0273 33.2255 15.2582 36.7418 11.7419Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M125 62.4999C123.342 62.4999 121.753 63.1584 120.581 64.3305C119.409 65.5026 118.75 67.0923 118.75 68.7499C118.75 72.2017 115.952 74.9999 112.5 74.9999C109.048 74.9999 106.25 72.2017 106.25 68.7499C106.25 63.7771 108.225 59.0079 111.742 55.4916C115.258 51.9753 120.027 49.9999 125 49.9999C129.973 49.9999 134.742 51.9753 138.258 55.4916C141.775 59.0079 143.75 63.7771 143.75 68.7499V87.4999C143.75 102.418 137.824 116.726 127.275 127.275C116.726 137.824 102.418 143.75 87.5 143.75H75C55.82 143.75 43.6201 137.701 33.158 127.309L33.1431 127.294L10.6431 104.794C10.568 104.719 10.4949 104.642 10.4237 104.563C7.19809 100.991 5.46983 96.315 5.59674 91.5035C5.72365 86.692 7.69601 82.1135 11.1055 78.7162C14.5149 75.3188 19.1003 73.3626 23.9122 73.2527C28.7241 73.1429 33.394 74.8877 36.9549 78.1259C37.0281 78.1924 37.0996 78.2606 37.1695 78.3305L48.1695 89.3305C50.6102 91.7712 50.6102 95.7285 48.1695 98.1693C45.7287 100.61 41.7714 100.61 39.3306 98.1693L28.4534 87.2921C27.2786 86.2651 25.7605 85.7138 24.1975 85.7495C22.5936 85.7861 21.0651 86.4382 19.9286 87.5706C18.7921 88.7031 18.1347 90.2292 18.0924 91.8331C18.0512 93.3928 18.595 94.9099 19.6139 96.0874L41.967 118.441C41.9695 118.443 41.972 118.445 41.9744 118.448C50.1354 126.552 59.1849 131.25 75 131.25H87.5C99.1033 131.25 110.231 126.641 118.436 118.436C126.641 110.231 131.25 99.1031 131.25 87.4999V68.7499C131.25 67.0923 130.592 65.5026 129.419 64.3305C128.247 63.1584 126.658 62.4999 125 62.4999Z" fill="black"/>
                  </svg>
                <p className="paragraph" style={{marginLeft: "10px"}}>
                MRDP needs a <b>proper landing page</b> dedicated to customizable content catered to host institution/lab
                </p>
              </div>
              <div style={{display: "flex", alignItems: "center"}}>
              <svg style={{flexShrink: 0, width: '30px', height: '30px', marginRight: '10px'}} viewBox="0 0 150 150" fill="#50C5DB" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M137.5 81.2501C140.952 81.2501 143.75 84.0483 143.75 87.5001C143.75 102.419 137.824 116.726 127.275 127.275C116.726 137.824 102.418 143.75 87.4999 143.75C84.0482 143.75 81.2499 140.952 81.2499 137.5C81.2499 134.048 84.0482 131.25 87.4999 131.25C99.1032 131.25 110.231 126.641 118.436 118.436C126.641 110.231 131.25 99.1033 131.25 87.5001C131.25 84.0483 134.048 81.2501 137.5 81.2501Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M86.7417 49.2419C90.258 45.7256 95.0271 43.7501 99.9999 43.7501C104.973 43.7501 109.742 45.7256 113.258 49.2419C116.774 52.7582 118.75 57.5273 118.75 62.5001V68.7501C118.75 72.2019 115.952 75.0001 112.5 75.0001C109.048 75.0001 106.25 72.2019 106.25 68.7501V62.5001C106.25 60.8425 105.591 59.2528 104.419 58.0807C103.247 56.9086 101.658 56.2501 99.9999 56.2501C98.3423 56.2501 96.7526 56.9086 95.5805 58.0807C94.4084 59.2528 93.7499 60.8425 93.7499 62.5001C93.7499 65.9519 90.9517 68.7501 87.4999 68.7501C84.0482 68.7501 81.2499 65.9519 81.2499 62.5001C81.2499 57.5273 83.2254 52.7582 86.7417 49.2419Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M61.7418 42.9917C65.2581 39.4754 70.0272 37.5 75 37.5C79.9728 37.5 84.7419 39.4754 88.2582 42.9917C91.7746 46.5081 93.75 51.2772 93.75 56.25V62.5C93.75 65.9518 90.9518 68.75 87.5 68.75C84.0482 68.75 81.25 65.9518 81.25 62.5V56.25C81.25 54.5924 80.5915 53.0027 79.4194 51.8306C78.2473 50.6585 76.6576 50 75 50C73.3424 50 71.7527 50.6585 70.5806 51.8306C69.4085 53.0027 68.75 54.5924 68.75 56.25V62.5C68.75 65.9518 65.9518 68.75 62.5 68.75C59.0482 68.75 56.25 65.9518 56.25 62.5V56.25C56.25 51.2772 58.2254 46.5081 61.7418 42.9917Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M36.7418 11.7419C40.2581 8.22556 45.0273 6.25012 50.0001 6.25012C54.9729 6.25012 59.742 8.22556 63.2583 11.7419C66.7746 15.2582 68.7501 20.0273 68.7501 25.0001V59.3751C68.7501 62.8269 65.9518 65.6251 62.5001 65.6251C59.0483 65.6251 56.2501 62.8269 56.2501 59.3751V25.0001C56.2501 23.3425 55.5916 21.7528 54.4195 20.5807C53.2474 19.4086 51.6577 18.7501 50.0001 18.7501C48.3425 18.7501 46.7527 19.4086 45.5806 20.5807C44.4085 21.7528 43.7501 23.3425 43.7501 25.0001V87.5001C43.7501 90.9519 40.9518 93.7501 37.5001 93.7501C34.0483 93.7501 31.2501 90.9519 31.2501 87.5001V25.0001C31.2501 20.0273 33.2255 15.2582 36.7418 11.7419Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M125 62.4999C123.342 62.4999 121.753 63.1584 120.581 64.3305C119.409 65.5026 118.75 67.0923 118.75 68.7499C118.75 72.2017 115.952 74.9999 112.5 74.9999C109.048 74.9999 106.25 72.2017 106.25 68.7499C106.25 63.7771 108.225 59.0079 111.742 55.4916C115.258 51.9753 120.027 49.9999 125 49.9999C129.973 49.9999 134.742 51.9753 138.258 55.4916C141.775 59.0079 143.75 63.7771 143.75 68.7499V87.4999C143.75 102.418 137.824 116.726 127.275 127.275C116.726 137.824 102.418 143.75 87.5 143.75H75C55.82 143.75 43.6201 137.701 33.158 127.309L33.1431 127.294L10.6431 104.794C10.568 104.719 10.4949 104.642 10.4237 104.563C7.19809 100.991 5.46983 96.315 5.59674 91.5035C5.72365 86.692 7.69601 82.1135 11.1055 78.7162C14.5149 75.3188 19.1003 73.3626 23.9122 73.2527C28.7241 73.1429 33.394 74.8877 36.9549 78.1259C37.0281 78.1924 37.0996 78.2606 37.1695 78.3305L48.1695 89.3305C50.6102 91.7712 50.6102 95.7285 48.1695 98.1693C45.7287 100.61 41.7714 100.61 39.3306 98.1693L28.4534 87.2921C27.2786 86.2651 25.7605 85.7138 24.1975 85.7495C22.5936 85.7861 21.0651 86.4382 19.9286 87.5706C18.7921 88.7031 18.1347 90.2292 18.0924 91.8331C18.0512 93.3928 18.595 94.9099 19.6139 96.0874L41.967 118.441C41.9695 118.443 41.972 118.445 41.9744 118.448C50.1354 126.552 59.1849 131.25 75 131.25H87.5C99.1033 131.25 110.231 126.641 118.436 118.436C126.641 110.231 131.25 99.1031 131.25 87.4999V68.7499C131.25 67.0923 130.592 65.5026 129.419 64.3305C128.247 63.1584 126.658 62.4999 125 62.4999Z" fill="black"/>
                  </svg>
                <p className="paragraph" style={{marginLeft: "10px"}}>
                Common feature around other competitor interfaces is a <b>instruction page</b> that guide first users
                </p>
              </div>
              <iframe style={{border: "1px solid rgba(0, 0, 0, 0.1);", width: "100%", height: "600px"}}
                src="https://embed.figma.com/board/MRZRkVkVs13bk74oygmytL/MRDP-Mockup-Brainstorm?node-id=0-1&embed-host=share" 
                allowfullscreen></iframe>
            </div>

            <div className="subsection">
              <h3 className="subsection-title" style={{color: '#0075A2'}}>Interview with Client Point of Contact</h3>
              <p className="paragraph">
              I had a meeting with Ken Miller who was our <b>client point of contact.</b>
              <br/>
              Ken delivered <b>current painpoints of MRDP</b> and guidance on what I should focus on in terms of <b>UI and codebase design.</b>
              </p>
              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <svg style={{flexShrink: 0, width: '40px', height: '40px'}} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9999 18.7501C21.5767 18.7501 18.7499 21.5769 18.7499 25.0001V78.6613L33.0805 64.3307C34.2526 63.1586 35.8423 62.5001 37.4999 62.5001H74.9999C76.6575 62.5001 78.2472 61.8416 79.4194 60.6695C80.5915 59.4974 81.2499 57.9077 81.2499 56.2501V25.0001C81.2499 23.3425 80.5915 21.7528 79.4194 20.5807C78.2473 19.4086 76.6575 18.7501 74.9999 18.7501H24.9999ZM6.24994 25.0001C6.24994 14.6733 14.6732 6.25012 24.9999 6.25012H74.9999C79.9727 6.25012 84.7419 8.22556 88.2582 11.7419C91.7745 15.2582 93.7499 20.0273 93.7499 25.0001V56.2501C93.7499 61.2229 91.7745 65.9921 88.2582 69.5084C84.7419 73.0247 79.9728 75.0001 74.9999 75.0001H40.0888L16.9194 98.1695C15.1319 99.957 12.4436 100.492 10.1082 99.5244C7.7727 98.557 6.24994 96.278 6.24994 93.7501V25.0001Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M106.25 56.2499C106.25 52.7981 109.048 49.9999 112.5 49.9999H125C129.973 49.9999 134.742 51.9753 138.258 55.4916C141.775 59.0079 143.75 63.7771 143.75 68.7499V137.5C143.75 140.028 142.227 142.307 139.892 143.274C137.556 144.242 134.868 143.707 133.081 141.919L109.911 118.75H75C70.0272 118.75 65.2581 116.774 61.7418 113.258C58.2254 109.742 56.25 104.973 56.25 99.9999V93.7499C56.25 90.2981 59.0482 87.4999 62.5 87.4999C65.9518 87.4999 68.75 90.2981 68.75 93.7499V99.9999C68.75 101.657 69.4085 103.247 70.5806 104.419C71.7527 105.591 73.3424 106.25 75 106.25H112.5C114.158 106.25 115.747 106.908 116.919 108.08L131.25 122.411V68.7499C131.25 67.0923 130.592 65.5026 129.419 64.3305C128.247 63.1584 126.658 62.4999 125 62.4999H112.5C109.048 62.4999 106.25 59.7017 106.25 56.2499Z" fill="black"/>
                </svg>
                <p className="paragraph" style={{marginLeft: "20px"}}>
                  Focus on the Django version of the Globus data portal, using data.lsstdesc.org as an example. 
                  <br/>
                  Similarly, our <b>data search functionality can be removed</b> for now.
                </p>
              </div>

              <div style={{display: "flex", alignItems: "center", marginRight: '10px'}}>
                <svg style={{flexShrink: 0, width: '40px', height: '40px'}} viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M24.9999 18.7501C21.5767 18.7501 18.7499 21.5769 18.7499 25.0001V78.6613L33.0805 64.3307C34.2526 63.1586 35.8423 62.5001 37.4999 62.5001H74.9999C76.6575 62.5001 78.2472 61.8416 79.4194 60.6695C80.5915 59.4974 81.2499 57.9077 81.2499 56.2501V25.0001C81.2499 23.3425 80.5915 21.7528 79.4194 20.5807C78.2473 19.4086 76.6575 18.7501 74.9999 18.7501H24.9999ZM6.24994 25.0001C6.24994 14.6733 14.6732 6.25012 24.9999 6.25012H74.9999C79.9727 6.25012 84.7419 8.22556 88.2582 11.7419C91.7745 15.2582 93.7499 20.0273 93.7499 25.0001V56.2501C93.7499 61.2229 91.7745 65.9921 88.2582 69.5084C84.7419 73.0247 79.9728 75.0001 74.9999 75.0001H40.0888L16.9194 98.1695C15.1319 99.957 12.4436 100.492 10.1082 99.5244C7.7727 98.557 6.24994 96.278 6.24994 93.7501V25.0001Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M106.25 56.2499C106.25 52.7981 109.048 49.9999 112.5 49.9999H125C129.973 49.9999 134.742 51.9753 138.258 55.4916C141.775 59.0079 143.75 63.7771 143.75 68.7499V137.5C143.75 140.028 142.227 142.307 139.892 143.274C137.556 144.242 134.868 143.707 133.081 141.919L109.911 118.75H75C70.0272 118.75 65.2581 116.774 61.7418 113.258C58.2254 109.742 56.25 104.973 56.25 99.9999V93.7499C56.25 90.2981 59.0482 87.4999 62.5 87.4999C65.9518 87.4999 68.75 90.2981 68.75 93.7499V99.9999C68.75 101.657 69.4085 103.247 70.5806 104.419C71.7527 105.591 73.3424 106.25 75 106.25H112.5C114.158 106.25 115.747 106.908 116.919 108.08L131.25 122.411V68.7499C131.25 67.0923 130.592 65.5026 129.419 64.3305C128.247 63.1584 126.658 62.4999 125 62.4999H112.5C109.048 62.4999 106.25 59.7017 106.25 56.2499Z" fill="black"/>
                </svg>
                <p className="paragraph" style={{marginLeft: "20px"}}>
                Implement <b>customization entrypoints</b> to allow research institutions to add custom pages (e.g., "Our Team" or institution-specific pages) to the menu using Django template functionality.
                </p>
              </div>

            </div>

          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Prototyping</h2>
          <div className="flex-container">
          <div className="subsection">
            <h3 className="subsection-title" style={{color: '#0075A2'}}>Low-Fi Mockups</h3>
            <p className="paragraph">After discussions with James and Ken, I distilled the UX
              to two essential pages:<b> the landing page and the transfer page.</b>
            </p>
            <p className="paragraph" style={{color: '#50C5DB', margin: '30px 0 0 7px', fontFamily: 'Crimson-bold', fontSize: '1.7rem'}}>Landing Page</p>
              <p className="paragraph"> 
              Using the comparative analysis, I redesigned landing page to incorporate:
              <ul className="bullet-list">
                <li><b>Introduction Section</b> to provide summary and login entry point</li>
                <li><b>Insutrction Section</b> that guides users to access the transfer page through logging in</li>
                <li><b>Featured Datasets Section</b> to highlight from institute</li>
                <li><b>Customization section</b> that include eg. team or institution introductions</li>
              </ul>
              </p>
              <div className="mockup-box">
              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/mrdplowfi1.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>
              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/Landing Page - Low.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>
              </div>
              <p className="paragraph" style={{color: '#50C5DB', margin: '30px 0 0 7px', fontFamily: 'Crimson-bold', fontSize: '1.7rem'}}>Transfer Page</p>
              <p className="paragraph"> 
                I merged the search and transfer page to streamline the <b>process of finding source and destination points,</b>
                <br/>
                taking inspiration from travel booking and cloud storage platforms.
                <br/>
                <br/>
                <b style={{color: '#766459', fontFamily: 'Crimson-bold-italic', fontSize: '1rem'}}>Transfer Steps:</b>

              <ol className="bullet-list" style={{margin: '0'}}>
                <li style={{margin: '10px'}}>Once user logs in, users have the option to select the <b>source, destination, and dataset to tranfer</b></li>
                <li style={{margin: '10px'}}>Source and destination search expands so that users can choose and scroll through options</li>
                <li style={{margin: '10px'}}><b>Search engine</b> allows users to filter through datasets and find an appropriate one</li>
                <li style={{margin: '10px'}}>Once selected, dataset should be added to the “selected” box/cart </li>
                <li style={{margin: '10px'}}><b>“Selected box”</b> functions as a final confirmation of <b>datasets to transfer</b></li>
              </ol>
              </p>
            <div className="mockup-box">
              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/esnetmrdp/mrdplowfi2.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>

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
              </div>
          
          </div> 


          <div className="subsection">
            <h3 className="subsection-title" style={{color: '#0075A2' }}>High-Fi Mockups</h3>
            <p className='paragraph'>
            After confirming the low-fi mockups and user flow with the client point of contact,
            I developed the <br/>high-fi prototype incorporating an <b>example customization featuring ESNet's institution branding and content.</b>
            </p>

            <p className="paragraph">
            <b style={{color: '#766459', fontFamily: 'Crimson-bold-italic', fontSize: '1rem'}}>Key Components:</b>
              <ul className="bullet-list" style={{margin: '0'}}>
                <li style={{margin: '10px'}}>Streamlined the <b>file navigation interface</b>, browsing through source node’s datasets</li>
                <li style={{margin: '10px'}}><b>Introduced breadcrumb trail</b> at the top of file browser, allowing tracking of directories</li>
                <li style={{margin: '10px'}}>Introduced a <b>“transfer queue”</b> to organize selected files for transfer and details such as name, size, transfer status etc </li>
                <li style={{margin: '10px'}}>By choosing the source node and destination node in order, kept the <b>transfer process intuitive</b> and user friendly</li>
              </ul>
              </p>

            <div className="mockup-box">
            <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/Final - Landing Page 2025.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>
              <div className="slidepng-container">
              <div className="team-photo" ref={el => imageRefs.current.push(el)}>
                <StaticImage
                  src="../../static/Final - Transfer Page 2025.png"
                  alt="Project Header"
                  placeholder="blurred"
                  layout="constrained"
                  className="slidepng"/>
                </div>
              </div>
              
              </div>
          </div> 
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Final Deliverable</h2>
          <div className="flex-container">
          <div className="subsection">
            <h3 className="subsection-title" style={{ color: '#0075A2' }}>Development</h3>
            <p className='paragraph'>
            During development, I focused on building a clean, digestible codebase <b>to simplify MRDP customization</b> for research institutions.
            </p>

            <div style={{display: "flex", alignItems: "center"}}>
            <p className="paragraph" style={{marginRight: "5px", color:  '#50C5DB', fontFamily: 'Crimson-bold', }}>
              MRDP Github Repository
            </p>
            <a 
              href="https://github.com/esnet/data-transfer-bootstrap/tree/esnet_branch" 
              style={{display: "flex", alignItems: "center"}}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 150 150" 
                fill="black" 
                xmlns="http://www.w3.org/2000/svg"
                style={{transition: "fill 0.3s"}}
                onMouseEnter={(e) => e.currentTarget.style.fill = "#50C5DB"}
                onMouseLeave={(e) => e.currentTarget.style.fill = "black"}
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2501 43.7499C29.5925 43.7499 28.0027 44.4084 26.8306 45.5805C25.6585 46.7526 25.0001 48.3423 25.0001 49.9999V118.75C25.0001 120.407 25.6585 121.997 26.8306 123.169C28.0027 124.341 29.5925 125 31.2501 125H100C101.658 125 103.247 124.341 104.419 123.169C105.592 121.997 106.25 120.407 106.25 118.75V81.2499C106.25 77.7981 109.048 74.9999 112.5 74.9999C115.952 74.9999 118.75 77.7981 118.75 81.2499V118.75C118.75 123.723 116.775 128.492 113.258 132.008C109.742 135.524 104.973 137.5 100 137.5H31.2501C26.2772 137.5 21.5081 135.524 17.9918 132.008C14.4755 128.492 12.5001 123.723 12.5001 118.75V49.9999C12.5001 45.0271 14.4755 40.2579 17.9918 36.7416C21.5081 33.2253 26.2773 31.2499 31.2501 31.2499H68.7501C72.2018 31.2499 75.0001 34.0481 75.0001 37.4999C75.0001 40.9517 72.2018 43.7499 68.7501 43.7499H31.2501Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.5001 18.7499C87.5001 15.2981 90.2983 12.4999 93.7501 12.4999H131.25C134.702 12.4999 137.5 15.2981 137.5 18.7499V56.2499C137.5 59.7017 134.702 62.4999 131.25 62.4999C127.798 62.4999 125 59.7017 125 56.2499V24.9999H93.7501C90.2983 24.9999 87.5001 22.2017 87.5001 18.7499Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M135.669 14.3305C138.11 16.7712 138.11 20.7285 135.669 23.1693L66.9194 91.9193C64.4786 94.3601 60.5214 94.3601 58.0806 91.9193C55.6398 89.4785 55.6398 85.5212 58.0806 83.0805L126.831 14.3305C129.271 11.8897 133.229 11.8897 135.669 14.3305Z" />
              </svg>
            </a>
          </div>

          <div style={{display: "flex", alignItems: "center"}}>
            <p className="paragraph" style={{marginRight: "5px", color:  '#50C5DB', fontFamily: 'Crimson-bold', }}>
            MRDP Example Deployment!
            </p>
            <a 
              href="https://mrdp.mooo.com" 
              style={{display: "flex", alignItems: "center"}}
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 150 150" 
                fill="black" 
                xmlns="http://www.w3.org/2000/svg"
                style={{transition: "fill 0.3s"}}
                onMouseEnter={(e) => e.currentTarget.style.fill = "#50C5DB"}
                onMouseLeave={(e) => e.currentTarget.style.fill = "black"}
              >
                <path fill-rule="evenodd" clip-rule="evenodd" d="M31.2501 43.7499C29.5925 43.7499 28.0027 44.4084 26.8306 45.5805C25.6585 46.7526 25.0001 48.3423 25.0001 49.9999V118.75C25.0001 120.407 25.6585 121.997 26.8306 123.169C28.0027 124.341 29.5925 125 31.2501 125H100C101.658 125 103.247 124.341 104.419 123.169C105.592 121.997 106.25 120.407 106.25 118.75V81.2499C106.25 77.7981 109.048 74.9999 112.5 74.9999C115.952 74.9999 118.75 77.7981 118.75 81.2499V118.75C118.75 123.723 116.775 128.492 113.258 132.008C109.742 135.524 104.973 137.5 100 137.5H31.2501C26.2772 137.5 21.5081 135.524 17.9918 132.008C14.4755 128.492 12.5001 123.723 12.5001 118.75V49.9999C12.5001 45.0271 14.4755 40.2579 17.9918 36.7416C21.5081 33.2253 26.2773 31.2499 31.2501 31.2499H68.7501C72.2018 31.2499 75.0001 34.0481 75.0001 37.4999C75.0001 40.9517 72.2018 43.7499 68.7501 43.7499H31.2501Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M87.5001 18.7499C87.5001 15.2981 90.2983 12.4999 93.7501 12.4999H131.25C134.702 12.4999 137.5 15.2981 137.5 18.7499V56.2499C137.5 59.7017 134.702 62.4999 131.25 62.4999C127.798 62.4999 125 59.7017 125 56.2499V24.9999H93.7501C90.2983 24.9999 87.5001 22.2017 87.5001 18.7499Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M135.669 14.3305C138.11 16.7712 138.11 20.7285 135.669 23.1693L66.9194 91.9193C64.4786 94.3601 60.5214 94.3601 58.0806 91.9193C55.6398 89.4785 55.6398 85.5212 58.0806 83.0805L126.831 14.3305C129.271 11.8897 133.229 11.8897 135.669 14.3305Z" />
              </svg>
            </a>
          </div>
          
          <p className='paragraph'>
              This deployment was delivered to the Science Engagement Team in order to distribute to any <b>ESNet's partner administrater that requires MRDP.</b>
            </p>

          </div> 
          </div>
        </div>

        <div className="section">
          <h2 className="section-title" >Reflection</h2>
          <div className="flex-container">

          <div className="team-photo">
              <StaticImage 
              src="../../static/ESNetMRDPPresentation.jpg"
              alt="Project Header"
              placeholder="blurred"
              layout="constrained"
              style={{ marginTop: '40px', borderRadius: '10px' }}
              />
              <p className="photoDescription">
              Student Poster Session for Berkeley Lab Computing Sciences - Presenting to ESNet Executive Director Inder Monga
              </p>
            </div>


            <div className="subsection">
              <h3 className="subsection-title" style={{ color: '#0075A2', fontSize: '1.2rem' }}>User Flow Redesign:</h3>
              <p className="paragraph">
              My project aimed to design for a <b>niche group of lab researchers,</b> shifting my focus from previous 
              GenZ targeting design projects. I aimed to create a UX that prioritized versatility and approachability, 
              leading to a redesign of the website's user flow, which simplified navigation by <b>consolidating two-page operations 
              into a efficient single-page experience</b>.
              </p>

              <h3 className="subsection-title" style={{ color: '#0075A2' , fontSize: '1.2rem'}}>Distributable and Customizable Codebase Development:</h3>
              <p className="paragraph">
              Another focus was creating templates that <b>future developers could easily customize and distribute</b>, ensuring that my 
              design was both <b>user-friendly for end-users and adaptable for developers</b>. This experience broadened my perspective on user 
              experience design and highlighted the importance of balancing technical requirements with usability.
              </p>
            </div>


          </div>
        </div>



        

      </div>
    <Footer />
    </>
  );
}

export default ESNetMRDP;