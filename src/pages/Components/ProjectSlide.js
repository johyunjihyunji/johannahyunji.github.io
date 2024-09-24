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
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </Link>

        {/* Project MRDP */}
        <Link className='ImageItem'  to="/Projects/ESNetMRDP">
          <StaticImage 
            src="../../../static/ESnetMRDPThumbnail.png"
            alt="ESNet MRDP"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </Link>
        
        {/* Project Broke */}
        <Link className='ImageItem'  to="/Projects/Broke">
          <StaticImage 
            src="../../../static/BrokeThumbnail.png"
            alt="broke"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </Link>

        {/* Project Electrocraft */}
        <Link className='ImageItem'  to="/Projects/Electrocrafting">
          <StaticImage 
            src="../../../static/ElectrocraftThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </Link>
        
        {/* Project Youtube*/}
          <Link className='ImageItem'  href='https://www.youtube.com/@johannalee8172/videos'>
            <StaticImage 
            src="../../../static/Youtube.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </Link>

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
        </Link>



      </nav>
    </div>
  );
};

export default ProjectSlide;