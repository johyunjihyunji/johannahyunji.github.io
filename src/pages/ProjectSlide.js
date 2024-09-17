// src/Gallery.js
import React from 'react';
import styled from 'styled-components';
import './Gallary.css'; 

// Sample image URLs (replace these with your own images)
const images = [
  'https://via.placeholder.com/150',
  'https://via.placeholder.com/300x400',
  'https://via.placeholder.com/400x300',
  'https://via.placeholder.com/200',
  'https://via.placeholder.com/250x400',
  'https://via.placeholder.com/350x200',
  'https://via.placeholder.com/300',
  'https://via.placeholder.com/450x300',
  'https://via.placeholder.com/300x250',
];

// Function to shuffle the images array
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
};

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px; /* Space between items */
  padding: 20px;
  margin: 10vw 10vw
`;

const GalleryItem = styled.div`
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
    display: block;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  &.square img {
    aspect-ratio: 1 / 1; /* Square */
    object-fit: cover;
  }

  &.horizontal img {
    aspect-ratio: 3 / 4; /* Horizontal rectangle */
    object-fit: cover;
  }

  &.vertical img {
    aspect-ratio: 4 / 3; /* Vertical rectangle */
    object-fit: cover;
  }
`;

const getRandomSizeClass = () => {
  const sizes = ['square', 'horizontal', 'vertical'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const ProjectSlide = () => {
  
// Shuffle images to randomize their order
shuffleArray(images);

return (
    <GalleryContainer>
      {images.map((src, index) => (
        <GalleryItem key={index} className={getRandomSizeClass()}>
          <img src={src} alt={`Gallery item ${index + 1}`} />
        </GalleryItem>
      ))}
    </GalleryContainer>
);
};

export default ProjectSlide;