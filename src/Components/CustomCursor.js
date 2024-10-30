import React, { useState, useEffect } from 'react';
import '../style/Home.css';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [blurbPosition, setBlurbPosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const updatePosition = (e) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const moveBlurb = () => {
        setBlurbPosition(prevPos => ({
          x: prevPos.x + (position.x - prevPos.x) * 0.2,
          y: prevPos.y + (position.y - prevPos.y) * 0.2
        }));
        requestAnimationFrame(moveBlurb);
      };
  
      window.addEventListener('mousemove', updatePosition);
      const animationId = requestAnimationFrame(moveBlurb);
  
      return () => {
        window.removeEventListener('mousemove', updatePosition);
        cancelAnimationFrame(animationId);
      };
    }, [position]);
  
    return (
      <>
        <div 
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: -1, // Change this to a negative value
            left: blurbPosition.x,
            top: blurbPosition.y,
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '800px',
            borderRadius: '50%',
            background:  'radial-gradient(circle, rgba(255, 23, 0, 0.7) 0%, rgba(255, 23, 0, 0) 70%)',
            filter: 'blur(30px)',
            transition: 'left 0.3s ease-out, top 0.3s ease-out',
          }}
        />
        <div 
          style={{
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: -1, // Change this to a negative value
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
            width: '50px',
            height: '60px',
            borderRadius: '80%',
            background: 'radial-gradient(circle, rgba(4, 56, 198, 0.6) 0%, rgba(4, 56, 198, 0) 90%)',
            filter: 'blur(5px)',
          }}
        />
      </>
    );
  };
  
export default CustomCursor;
