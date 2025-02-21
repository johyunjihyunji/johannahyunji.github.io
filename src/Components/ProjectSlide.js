import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '../style/ProjectSlide.css'


const ProjectSlide = () => {

  return (
    <div className='GalleryContainer'>
      <nav className='GridContainer'>
        {/* Project MRDP */}
        <Link className='ImageItem'  to="/ESNetMRDP">
          <StaticImage 
            src="../../static/AThumbs/EsnetThumb.png"
            alt="ESnetMRDPThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}}>UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}}>React Front-End Dev</div>
            <div className="Title">Reimagining Customizable Data Transfer Portal </div>
            <div className="Company">Energy Science Network</div>
            </div>
        </Link>


          {/* Project Waymo */}
          <Link className='ImageItem'  to="/SiaPartners">
          <StaticImage 
            src="../../static/AThumbs/MetaThumb.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
           <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(4, 56, 198, 0.3)' }}>UX Research</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(4, 56, 198, 0.3)'  }}>UX Design</div>
            <div className="Title">Empowering Families: Redesigning Meta Family Center</div>
            <div className="Company">Meta</div>
          </div>
        </Link>
      

      

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Waymo">
          <StaticImage 
            src="../../static/AThumbs/WaymoThumb.png"
            alt="WaymoThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>UI Design</div>
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>Brand Design System</div>
            <div className="Title">Designing Waymo's Future: Brand & UX</div>
            <div className="Company">Waymo</div>
          </div>
        </Link>


                {/* Project Broke */}
        <Link className='ImageItem'  to="/Broke">
          <StaticImage 
            src="../../static/AThumbs/BrokeThumb.png"
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
        

                {/* Project Yelp */}
                <Link className='ImageItem' to="/Yelp">
            <StaticImage 
            src="../../static/AThumbs/YelpThumb.png"
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

        
          <a className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../static/AThumbs/YoutubeThumb.png"
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
        </a>

                
        {/* <a className='ImageItem'  href='https://johyunjihyunji.github.io/norainnoflower/'>
            <StaticImage 
            src="../../static/AThumbs/GameThumb.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            className = "staticimage"
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 113, 201, 0.5)'}}>Game Design</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 113, 201, 0.5)'}}>Graphic Illustrations</div>
            <div className="Title">No Rain No Flower</div>
          </div>
        </a> */}



      </nav>
    </div>
  );
};

export default ProjectSlide;