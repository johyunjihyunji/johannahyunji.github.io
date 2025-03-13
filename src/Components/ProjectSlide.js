import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '../style/ProjectSlide.css'
import { motion, useViewportScroll, useTransform } from 'framer-motion';


const ProjectSlide = () => {
    const { scrollY } = useViewportScroll();

  return (
    <div className='GalleryContainer' id="projects">
      <nav className='GridContainer'>
        {/* Project MRDP */}
                                <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >
        <Link className='ImageItem'  to="/ESNetMRDP">
          <StaticImage 
            src="../../static/2025_thumbnails/esnet.png"
            alt="ESnetMRDPThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(98, 202, 245, 0.3)'}}>UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(98, 202, 245, 0.3)'}}>React Front-End Dev</div>
            <div className="Title">Reimagining Customizable Data Transfer Portal </div>
            <div className="Company">Energy Science Network</div>
            </div>
        </Link>
        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >

          {/* Project Waymo */}
          <Link className='ImageItem'  to="/SiaPartners">
          <StaticImage 
            src="../../static/2025_thumbnails/meta.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
           <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(4, 56, 198, 0.3)' }}>UX Research</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(4, 56, 198, 0.3)'  }}>UX Design</div>
            <div className="Title">Empowering Families through Meta Family Center</div>
            <div className="Company">Meta</div>
          </div>
        </Link>
        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                > 
      

      

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Waymo">
          <StaticImage 
            src="../../static/2025_thumbnails/waymo.png"
            alt="WaymoThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>UI Design</div>
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>Brand Design System</div>
            <div className="Title">Designing Waymo's Future: UI & Brand</div>
            <div className="Company">Waymo</div>
          </div>
        </Link>

        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >


                {/* Project Broke */}
        <Link className='ImageItem'  to="/Broke">
          <StaticImage 
            src="../../static/2025_thumbnails/broke.png"
            alt="BrokeThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />

          <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>Mobile UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>Brand Design System</div>
            <div className="Title">Designing Accessible Travel for Young Adults</div>
            <div className="Company">Broke</div>
          </div>
        </Link>

        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >
        

                {/* Project Yelp */}
                <Link className='ImageItem' to="/Yelp">
            <StaticImage 
            src="../../static/2025_thumbnails/yelp.png"
            alt="YelpThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(255, 23, 0, 0.3)'}} >Brand Design System</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(255, 23, 0, 0.3)'}} >Performance Marketing</div>
            <div className="Title">Yelp Home Services: Brand & Marketing</div>
            <div className="Company">Yelp</div>
            </div>
        </Link>

        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >
        
        <Link className='ImageItem'  href='https://johyunjihyunji.github.io/norainnoflower/'>
            <StaticImage 
            src="../../static/2025_thumbnails/game.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 113, 201, 0.5)'}}>Game Design</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 113, 201, 0.5)'}}>Graphic Illustrations</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 113, 201, 0.5)'}}>P5</div>
            <div className="Title">No Rain No Flower</div>
            <div className="Company">Personal Project</div>
          </div>
        </Link>
        </motion.div>
        <motion.div
                                  initial={{ opacity: 0, scale: 0.9, y: 20 }} // Initial state
                                  whileInView={{ opacity: 1, scale: 1, y: 0 }} // Animate state when in view
                                  viewport={{ once: true }} // Only animate once
                                  transition={{ duration: 0.3 }} // Animation duration
                                >

        
          <Link className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../static/2025_thumbnails/youtube.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Video Editing</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Vlogs</div>
            <div className="Title">Digital Diaries</div>
            <div className="Company">Youtube</div>
          </div>
        </Link>
        </motion.div>
                



      </nav>
    </div>
  );
};

export default ProjectSlide;