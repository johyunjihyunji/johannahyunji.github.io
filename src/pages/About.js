import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/About.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CustomCursor from '../Components/CustomCursor';


const About = () => {
  return (
    <>
    <CustomCursor />
    <Header />
    <div className="about-container">
      <section className="intro-section">
        <div className="about-content">
          <div className="about-image">
            <StaticImage 
              src="../../static/profile-photo.jpg"
              alt="Johanna Lee"
              placeholder="blurred"
              layout="constrained"
              height={500}
              style={{ borderRadius: '40%' ,filter: 'grayscale(100%)' }}
            />
          </div>
          <div className="about-text">
            <h1>Hello! </h1>
            <h2>This is Johanna Lee :)</h2>
            <p className="introText">
              I am a senior at the University of California, Berkeley, studying computer science and innovative design.
            </p>
            <p className="introText">
              With a unique blend of technical and creative skills, I have a background in UI/UX design, 
              marketing design, and front-end engineering.
            </p>

          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="sectiontitle">
            <h2> Experience</h2>
        </div>
        <div className = "items">
            <div className="experience-item">
            <h3>Energy Sciences Network at Lawrence National Berkeley Laboratory</h3>
            <div className="experience-desc">
              <p className="jobtitle">UX Engineer Intern</p>
              <p className="date">Jun 2024 - Present</p>
            </div>
              {/* <p className="desc">
                Led UI/UX redesign and front-end development of a data transfer portal, conducting UX research, creating wireframes to prototypes, and successfully delivering finalized product to Science Engagement Team for launch 
              </p>
              <p className="desc">
                Engineered a customized and distributable MRDP codebase, enabling research labs to brand and deploy as needed
                </p>
                <p className="desc">
                Design and implement design system from ground up, gradually unifying UI across various ESnet product offerings
              </p> */}
            </div>

            <div className="experience-item">
            <h3>Undergraduate Marketing Association Design</h3>
            <div className="experience-desc">
              <p className="jobtitle">Design Project Manager</p>
              <p className="date">Jun 2024 - Present</p>
            </div>
            <div className="experience-desc">
              <p className="jobtitle">Design Consultant</p>
              <p className="date">Jan 2023 - Jun 2024</p>
            </div>
            </div>

            <div className="experience-item">
            <h3>Kesem Berkeley</h3>
            <div className="experience-desc">
              <p className="jobtitle">Finance Lead</p>
              <p className="date">Aug 2024 - Present</p>
            </div>
            <div className="experience-desc">
              <p className="jobtitle">President</p>
              <p className="date">June 2023 - Aug 2024</p>
            </div>
            <div className="experience-desc">
              <p className="jobtitle">Head of Marketing</p>
              <p className="date">June 2022 - Aug 2023</p>
            </div>
            </div>

            <div className="experience-item">
            <h3>Botticelli Capital Partners</h3>
            
            <div className="experience-desc">
            <p className="jobtitle"> Equity Research Intern</p>
            <p className="date">June 2022 - Aug 2022</p>
            </div>

            </div>
        </div>
      </section>

      <section className="projects-section">
        <div className = "sectiontitle">
            <h2> Projects</h2>
        </div>
        <div className = "items">
          <div className="project-item">
            <h3>Yelp</h3>
            <div className="experience-desc">
            <p className="jobtitle">Performance Marketing Creative Design Consultant</p>
            <p className="date">Jan 2024 - Jun 2024</p>
            </div>

          </div>
          <div className="project-item">
            <h3>Meta</h3>
            <div className="experience-desc">
            <p className="jobtitle">UX Design Consultant</p>
            <p className="date">Sept 2023 - Jan 2024</p>
            </div>

          </div>
          <div className="project-item">
            <h3>Waymo</h3>
            <div className="experience-desc">
            <p className="jobtitle">UX and Brand Design Consultant</p>
            <p className="date">Feb 2023 - Jun 2023</p>
            </div>

          </div>
        </div>
        {/* Add more project items as needed */}
      </section>

      <section className="skills-section">
      <div className = "sectiontitle">
        <h2> Skills</h2>
        </div>
      <div className = "skill-items">
        <div className="skill-item">
                <h3>Language</h3>
                <div className="tags">
                <span className="tag">Korean</span>
                <span className="tag">English</span>
                <span className="tag">Mandarin</span>
                </div>
            </div>
          <div className="skill-item">
                <h3>Design</h3>
                <div className="tags">
                <span className="tag">Figma</span>
                <span className="tag">Prototpying</span>
                <span className="tag">Wireframing</span>
                <span className="tag">Video Editing</span>
                <span className="tag">Adobe Premiere Pro</span>
                <span className="tag">Final Cut Pro</span>
                <span className="tag">Adobe Illustrator</span>
                <span className="tag">Adobe Photoshop</span>
                <span className="tag">Procreate</span>
                <span className="tag">Social Media Marketing</span>
                
                </div>
            </div>
            <div className="skill-item">
                <h3>Technical</h3>
                <div className="tags">
                <span className="tag">HTML</span>
                <span className="tag">CSS</span>
                <span className="tag">JS</span>
                <span className="tag">React</span>
                <span className="tag">Microsoft Office</span>
                <span className="tag">G-suite</span>
                <span className="tag">Jira</span>
                <span className="tag">Python</span>
                <span className="tag">Java</span>
                <span className="tag">SQL</span>
                <span className="tag">C</span>
                <span className="tag">GoLang</span>
                <span className="tag">Rust</span>
                <span className="tag">GDB</span>
                <span className="tag">Bash</span>
                <span className="tag">React</span>
                <span className="tag">Ansible</span>
                <span className="tag">Docker</span>
                </div>
            </div>

        </div>
        </section>


      <section className="education-section">
      <div className = "sectiontitle">
        <h2> Education</h2>
        </div>
        <div className = "items">
        <div className="education-item">
          <h3>University of California Berkeley</h3>
          <div className="desc">
          <p className="jobtitle">B.A. in Computer Science</p>
          <p>Berkeley Certificate in Design Innovation</p>
          <p>Sutardja Center Certificate in Entrepreneurship & Technology</p>
          </div>
        </div>
        </div>
      </section>

      <section className="education-section" style = {{marginBottom: "2vh"}}>
      <div className = "sectiontitle">
        <h2>  Creating Portfolio</h2>
        </div>
        </section>
        <iframe 
          title="Broke App Prototype"
          style={{ marginBottom: "8vh", border: "1px solid rgba(0, 0, 0, 0.1)", width: "100%", height: "700px" }}
          src="https://embed.figma.com/proto/uEQv5fIEdHBvAgIPLFQUsx/Untitled?page-id=268%3A242&node-id=326-17&node-type=canvas&viewport=1554%2C739%2C0.14&scaling=contain&content-scaling=fixed&embed-host=share"
          allowFullScreen
          ></iframe>
    </div>
    <Footer />
    </>
  );
};

export default About;
