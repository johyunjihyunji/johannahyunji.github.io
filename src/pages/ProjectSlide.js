import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  overflow: hidden; /* Hide overflow */
  white-space: nowrap; /* Prevent line breaks */
  position: relative;
`;

const ScrollingInnerContainer = styled.div`
  display: inline-block;
  animation: scroll-left 30s linear infinite; /* Adjust speed here */
  
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
  display: inline-block; /* Ensure items are inline */
  margin-right: 20px; /* Space between images */
  
  &:hover img {
    transform: scale(1.2); /* Scale up on hover */
    margin-left: 2vw;
    margin-right: 2vw;
  }
`;

const Image = styled.img`
  width: auto; /* Allow images to maintain their aspect ratio */
  height: 300px; /* Set a consistent height */
  transition: transform 0.3s ease; /* Smooth scaling effect */
`;

const ImageTitle = styled.div`
  text-align: center;
  color: white;
`;

const LopsterGallery = () => {
  const images = [
    { src: './../../YelpThumbnail.png', title: 'Yelp Marketing Design', link: '/YelpHomeServices' },
    { src: 'https://via.placeholder.com/200', title: 'Project B', link: '/project-b' },
    { src: 'https://via.placeholder.com/250', title: 'Project C', link: '/project-c' },
    { src: 'https://via.placeholder.com/300', title: 'Project D', link: '/project-d' },

    // Add more images as needed
  ];

  return (
    <GalleryContainer>
      <ScrollingInnerContainer>
        {/* Original Images */}
        {images.map((image, index) => (
          <ImageItem key={index} href={image.link}>
            <Image src={image.src} alt={image.title} />
            <ImageTitle>{image.title}</ImageTitle>
          </ImageItem>
        ))}
        {/* Duplicate Images for seamless scrolling */}
        {images.map((image, index) => (
          <ImageItem key={`duplicate-${index}`} href={image.link}>
            <Image src={image.src} alt={image.title} />
            <ImageTitle>{image.title}</ImageTitle>
          </ImageItem>
        ))}
      </ScrollingInnerContainer>
    </GalleryContainer>
  );
};

export default LopsterGallery;