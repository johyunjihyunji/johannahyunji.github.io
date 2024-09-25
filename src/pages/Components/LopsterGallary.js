import React, { useState, useEffect, useMemo } from 'react';
import Lopster from '../../../static/lopster.png';
import '../style/Lopster.css';
const LopsterGallery = () => {
  const [rotations, setRotations] = useState([]);

  const images = useMemo(() => [
    { id: 1, src: Lopster, speed: 10, direction: 1 },
    { id: 2, src: Lopster, speed: 9, direction: -1 },
    { id: 3, src: Lopster, speed: 14, direction: 1 },
    { id: 4, src: Lopster, speed: 8, direction: -1 },
    { id: 5, src: Lopster, speed: 13, direction: 1 },
    { id: 6, src: Lopster, speed: 10, direction: -1 },
    { id: 7, src: Lopster, speed: 8, direction: 1 },
    { id: 8, src: Lopster, speed: 9, direction: -1 },
    { id: 9, src: Lopster, speed: 7, direction: 1 },
    { id: 10, src: Lopster, speed: 5, direction: -1 },
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
    <div className='LopGalleryContainer'>
      {images.map((image, index) => (
        <div 
          key={image.id} 
          className="LopImageItem" 
          style={{ 
            animationDuration: `${image.speed}s`,
            transform: `rotate(${rotations[index]}deg)`
          }}
        >
          <img className='LopImage' src={image.src} alt={`Lobster ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default LopsterGallery;
