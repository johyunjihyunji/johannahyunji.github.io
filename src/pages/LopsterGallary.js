import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center; /* Center the content horizontally */
`;

const ImageItem = styled.div`
  margin-right: 20px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${props => `rotate(${props.rotation}deg)`};

  &:hover {
    transform: scale(1.1) ${props => `rotate(${props.rotation}deg)`};
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;


const LopsterGallery = () => {
  const [rotations, setRotations] = useState([]);

  // Image list with speed and direction
  const images = useMemo(() => [
    { src: './../../favicon.ico', speed: 2, direction: 1 }, // clockwise
    { src: './../../favicon.ico', speed: 3, direction: -1 }, // counterclockwise
    { src: './../../favicon.ico', speed: 1, direction: 1 },
    { src: './../../favicon.ico', speed: 4, direction: -1 },
    { src: './../../favicon.ico', speed: 2, direction: 1 },
    { src: './../../favicon.ico', speed: 3, direction: -1 },
    { src: './../../favicon.ico', speed: 1, direction: 1 },
    { src: './../../favicon.ico', speed: 4, direction: -1 },
    { src: './../../favicon.ico', speed: 2, direction: 1 },
    { src: './../../favicon.ico', speed: 3, direction: -1 },
    // Add more images as needed
  ], []); 

  useEffect(() => {
    // Initialize rotations for each image
    const initialRotations = Array(images.length).fill(0);
    setRotations(initialRotations);

    const interval = setInterval(() => {
      setRotations(prevRotations =>
        prevRotations.map((rotation, index) => {
          const { speed, direction } = images[index];
          return (rotation + speed * direction) % 360; // Update rotation based on speed and direction
        })
      );
    }, 30); // Adjust this value to control overall rotation speed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageItem key={index} rotation={rotations[index]}>
          <Image src={image.src} alt={`Lobster ${index + 1}`} />
        </ImageItem>
      ))}
    </GalleryContainer>
  );
};

export default LopsterGallery;