import React, { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import Lopster from '../../../static/lopster.png'

const GalleryContainer = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  flex-wrap: wrap; // Allow wrapping for multiple rows
`;

const ImageItem = styled.div`
  margin: 10px;
  position: relative;
  transition: transform 0.3s ease;
  transform: ${props => `rotate(${props.$rotation}deg)`};

  &:hover {
    transform: ${props => `scale(1.2) rotate(${props.$rotation}deg)`};
  }
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const LopsterGallery = () => {
  const [rotations, setRotations] = useState([]);

  const images = useMemo(() => [
    { src: Lopster, speed: 2, direction: 1 },
    { src: Lopster, speed: 3, direction: -1 },
    { src: Lopster, speed: 1, direction: 1 },
    { src: Lopster, speed: 4, direction: -1 },
    { src: Lopster, speed: 2, direction: 1 },
    { src: Lopster, speed: 3, direction: -1 },
    { src: Lopster, speed: 1, direction: 1 },
    { src: Lopster, speed: 4, direction: -1 },
    { src: Lopster, speed: 2, direction: 1 },
    { src: Lopster, speed: 3, direction: -1 },
  ], []); 

  useEffect(() => {
    const initialRotations = Array(images.length).fill(0);
    setRotations(initialRotations);

    const interval = setInterval(() => {
      setRotations(prevRotations =>
        prevRotations.map((rotation, index) => {
          const { speed, direction } = images[index];
          return (rotation + speed * direction + 360) % 360; // Ensure positive rotation
        })
      );
    }, 50); // Adjust for desired speed

    return () => clearInterval(interval);
  }, [images]);

  return (
    <GalleryContainer>
      {images.map((image, index) => (
        <ImageItem $rotation={rotations[index]} key={index}>
          <Image src={image.src} alt={`Lobster ${index + 1}`} />
        </ImageItem>
      ))}
    </GalleryContainer>
  );
};

export default LopsterGallery;