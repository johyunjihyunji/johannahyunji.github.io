import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import '../style/ProjectSlide.css'


const ProjectSlide = () => {

  return (
    <div className='GalleryContainer'>
      <nav className='ScrollingInnerContainer'>
        {/* Project Yelp */}
        <Link className='ImageItem' to="/Projects/Yelp">
            <StaticImage 
            src="../../../static/YelpThumbnail.png"
            alt="YelpThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags">Data Analysis, Visualization</div>
            <div className="Title">Yelp Project</div>
            </div>
        </Link>

        {/* Project MRDP */}
        <Link className='ImageItem'  to="/Projects/ESNetMRDP">
          <StaticImage 
            src="../../../static/ESnetMRDPThumbnail.png"
            alt="ESnetMRDPThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags">Data Analysis, Visualization</div>
            <div className="Title">Yelp Project</div>
            </div>
        </Link>
        
        {/* Project Broke */}
        <Link className='ImageItem'  to="/Projects/Broke">
          <StaticImage 
            src="../../../static/BrokeThumbnail.png"
            alt="BrokeThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />

          <div className="ImageOverlay">
            <div className="Tags">Network, Data Management</div>
            <div className="Title">ESNet MRDP</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Projects/Waymo">
          <StaticImage 
            src="../../../static/WaymoThumbnail.png"
            alt="WaymoThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
             <div className="ImageOverlay">
            <div className="Tags">Network, Data Management</div>
            <div className="Title">ESNet MRDP</div>
          </div>
        </Link>

        {/* Project Waymo */}
        <Link className='ImageItem'  to="/Projects/SiaPartners">
          <StaticImage 
            src="../../../static/SiaPartnersMetaThumbnail.png"
            alt="SiaPartnersMetaThumbnail"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
           <div className="ImageOverlay">
            <div className="Tags">Network, Data Management</div>
            <div className="Title">ESNet MRDP</div>
          </div>
        </Link>
        
        
        {/* Project Youtube*/}
          <a className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../../static/Youtube.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags">Network, Data Management</div>
            <div className="Title">ESNet MRDP</div>
          </div>
        </a>

        {/* Project Yelp */}
        <Link className='ImageItem'  to="/Projects/Yelp">
          <StaticImage 
            src="../../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
            <div className="ImageOverlay">
            <div className="Tags">Network, Data Management</div>
            <div className="Title">ESNet MRDP</div>
          </div>
        </Link>



      </nav>
    </div>
  );
};

export default ProjectSlide;