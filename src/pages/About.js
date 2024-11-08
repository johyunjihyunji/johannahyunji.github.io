import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../style/About.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import CustomCursor from '../Components/CustomCursor';
import StarIcon from '../../static/starIcon.png';


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
              brand design systems, and front-end development.
            </p>

          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="sectiontitle">
            <h2> <img src={StarIcon} alt="Experience Icon" className="section-icon" />Experience</h2>
        </div>
        <div className = "items">
            <div className="experience-item">
            <h3>Energy Sciences Network</h3>
            <p className="jobtitle">UX Engineer Intern</p>
            <p className="date">Jun 2024 - Present</p>
            </div>

            <div className="experience-item">
            <h3>Undergraduate Marketing Association Design</h3>
            <p className="jobtitle">Project Manager</p>
            <p className="date">Jun 2024 - Present</p>
            <p className="jobtitle">Consultant</p>
            <p className="date">Jan 2023 - Jun 2024</p>
            </div>

            <div className="experience-item">
            <h3>Kesem Berkeley</h3>
            <p className="jobtitle"> Chapter Director</p>
            <p className="date">June 2023 - Aug 2024</p>
            <p className="jobtitle"> Public Relation Coordinator</p>
            <p className="date">June 2022 - Aug 2023</p>

            </div>
            <div className="experience-item">
            <h3>Botticelli Capital Partners</h3>
            <p className="jobtitle"> Equity Research Intern</p>
            <p className="date">June 2022 - Aug 2022</p>

            </div>
        </div>
      </section>

      <section className="projects-section">
        <div className = "sectiontitle">
            <h2> <img src={StarIcon} alt="Experience Icon" className="section-icon" />Projects</h2>
        </div>
        <div className = "items">
        <div className="project-item">
          <h3>Yelp</h3>
          <p className="jobtitle">Performance Marketing Creative Design Consultant</p>
          <p className="date">Jan 2024 - Jun 2024</p>

        </div>
        <div className="project-item">
          <h3>Sia Partners</h3>
          <p className="jobtitle">Meta Family Center UX Design Consultant</p>
          <p className="date">Sept 2023 - Jan 2024</p>

        </div>
        <div className="project-item">
          <h3>Waymo</h3>
          <p className="jobtitle">UX and Brand Design Consultant</p>
          <p className="date">Feb 2023 - Jun 2023</p>

        </div>
        </div>
        {/* Add more project items as needed */}
      </section>

      <section className="skills-section">
      <div className = "sectiontitle">
        <h2> <img src={StarIcon} alt="Experience Icon" className="section-icon" />Skills</h2>
        </div>
      <div className = "items">
            <div className="skill-item">
                <h3>Technical</h3>
                <div className="tags">
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

            <div className="skill-item">
                <h3>Design & Video Editing</h3>
                <div className="tags">
                <span className="tag">Adobe Premiere Pro</span>
                <span className="tag">Final Cut Pro</span>
                <span className="tag">Adobe Illustrator</span>
                <span className="tag">Adobe Photoshop</span>
                <span className="tag">Procreate</span>
                <span className="tag">Figma</span>
                </div>
            </div>
        </div>
        </section>


      <section className="education-section">
      <div className = "sectiontitle">
        <h2> <img src={StarIcon} alt="Experience Icon" className="section-icon" />Education</h2>
        </div>
        <div className = "items">
        <div className="education-item">
          <h3>University of California Berkeley</h3>
          <p>BA in Computer Science</p>
          <p>Berkeley Certificate in Design Innovation</p>
          <p>Sutardja Center Certificate in Entrepreneurship & Technology</p>
        </div>
        </div>
      </section>

      <section className="education-section" style = {{marginBottom: "2vh"}}>
      <div className = "sectiontitle">
        <h2> <img src={StarIcon} alt="Experience Icon" className="section-icon" />Creating Portfolio</h2>
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
