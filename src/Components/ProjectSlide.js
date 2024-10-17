import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
//import { Link } from 'react-router-dom';
import '../style/ProjectSlide.css'


const ProjectSlide = () => {

  return (
    <div className='GalleryContainer'>
      <nav className='ScrollingInnerContainer'>

                {/* Project Waymo */}
                <Link className='ImageItem'  to="/SiaPartners">
          <StaticImage 
            src="../../static/SiaPartnersMetaThumbnail.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
           <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Research</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Design</div>
            <div className="Title">Sia Partners</div>
          </div>
        </Link>
        

        {/* Project Yelp */}
        <Link className='ImageItem' to="/Yelp">
            <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="YelpThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.3)'}} >Brand Design System</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.3)'}} >Performance Marketing</div>
            <div className="Title">Yelp</div>
            </div>
        </Link>

        {/* Project MRDP */}
        <Link className='ImageItem'  to="/ESNetMRDP">
          <StaticImage 
            src="../../static/ESnetMRDPThumbnail.png"
            alt="ESnetMRDPThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}} >UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}}>React Front-end Dev</div>
            <div className="Title">Energy Science Network</div>
            </div>
        </Link>
        
        {/* Project Broke */}
        <Link className='ImageItem'  to="/Broke">
          <StaticImage 
            src="../../static/BrokeThumbnail.png"
            alt="BrokeThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />

          <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>Brand Design System</div>
            <div className="Title">Broke</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Waymo">
          <StaticImage 
            src="../../static/WaymoThumbnail.png"
            alt="WaymoThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>UI Design</div>
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>Brand Design System</div>
            <div className="Title">Waymo</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/SiaPartners">
          <StaticImage 
            src="../../static/SiaPartnersMetaThumbnail.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
           <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Research</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Design</div>
            <div className="Title">Sia Partners</div>
          </div>
        </Link>
        
        
        {/* Project Youtube*/}
          <a className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../static/Youtube.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Video Editing</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Vlogs</div>
            <div className="Title">Youtube</div>
          </div>
        </a>

               {/* Project Yelp */}
               <Link className='ImageItem' to="/Yelp">
            <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="YelpThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.3)'}} >Brand Design System</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.3)'}} >Performance Marketing</div>
            <div className="Title">Yelp</div>
            </div>
        </Link>

        {/* Project MRDP */}
        <Link className='ImageItem'  to="/ESNetMRDP">
          <StaticImage 
            src="../../static/ESnetMRDPThumbnail.png"
            alt="ESnetMRDPThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}} >UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(0, 190, 9, 0.3)'}}>React Front-end Dev</div>
            <div className="Title">Energy Science Network</div>
            </div>
        </Link>
        
        {/* Project Broke */}
        <Link className='ImageItem'  to="/Broke">
          <StaticImage 
            src="../../static/BrokeThumbnail.png"
            alt="BrokeThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />

          <div className="ImageOverlay">
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>UX Design</div>
            <div className="Tags" style ={{backgroundColor: 'rgba(240, 215, 50, 0.5)'}}>Brand Design System</div>
            <div className="Title">Broke</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Waymo">
          <StaticImage 
            src="../../static/WaymoThumbnail.png"
            alt="WaymoThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>UI Design</div>
              <div className="Tags" style ={{backgroundColor: 'rgba(4, 56, 198, 0.4)'}}>Brand Design System</div>
            <div className="Title">Waymo</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/SiaPartners">
          <StaticImage 
            src="../../static/SiaPartnersMetaThumbnail.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
           <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Research</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(255, 23, 0, 0.3)' }}>UX Design</div>
            <div className="Title">Sia Partners</div>
          </div>
        </Link>
        
        
        {/* Project Youtube*/}
          <a className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../static/Youtube.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Video Editing</div>
            <div className="Tags" style ={{ backgroundColor: 'rgba(128, 128, 128, 0.3)'}}>Vlogs</div>
            <div className="Title">Youtube</div>
          </div>
        </a>


      </nav>
    </div>
  );
};

export default ProjectSlide;