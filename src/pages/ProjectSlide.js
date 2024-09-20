import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

const GalleryContainer = styled.div`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  position: relative;
`;

const ScrollingInnerContainer = styled.div`
  display: inline-block;
  animation: scroll-left 20s linear infinite; /* Adjust speed here */
  
  &:hover {
    animation-play-state: paused; /* Pause on hover */
  }

  @keyframes scroll-left {
    0% {
      transform: translateX(0); /* Start from the original position */
    }
    100% {
      transform: translateX(-50%); /* Move to left by half of the container */
    }
  }
`;

const ImageItem = styled.a`
  display: inline-block;
  height: 300px;
  margin-right: 20px;
  margin-left: 20px;
  transition: all 0.3s ease; // Smooth transition for all changes
  position: relative; // Add this
  z-index: 1; // Add this

  &:hover {
    z-index: 2; // Ensure hovered item is on top
    margin-left: 30px; // Increased margin
    margin-right: 30px; // Increased margin

    img {
      transform: scale(1.2); // Scale the image instead of the container
    }
  }

  img {
    transition: transform 0.3s ease; // Smooth transition for image scaling
  }
`;

const ImageTitle = styled.div`
  text-align: center;
  color: white;
`;

const ProjectSlide = () => {

  return (
    <GalleryContainer>
      <ScrollingInnerContainer>
        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
            <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>

        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
          <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>
        
        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
          <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>
        
        {/* Project Yelp */}
          <ImageItem href="./projects/Yelp">
            <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>

        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
          <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>
        
        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
          <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>

        {/* Project Yelp */}
        <ImageItem href="./projects/Yelp">
            <StaticImage 
            src="../../static/YelpThumbnail.png"
            alt="yelp"
            placeholder="blurred" // Optional placeholder
            layout="constrained" // Layout options
            height={300} // Desired width
            style={{ borderRadius: '5px' }}
            />
        </ImageItem>


      </ScrollingInnerContainer>
    </GalleryContainer>
  );
};

export default ProjectSlide;