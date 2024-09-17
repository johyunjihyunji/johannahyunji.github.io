import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
  grid-auto-rows: minmax(50px, 1fr);
  pointer-events: none;
`;

const GridCell = styled.div`
  background-color: rgba(0, 0, 255, ${props => props.opacity});
  transition: background-color 0.1s ease;
`;

const GridBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const gridRef = useRef(null);


  if (typeof window === 'undefined') {
    return null; // Render nothing or a loading state on the server
  }
  

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const updateGrid = () => {
      if (!gridRef.current) return;

      const cells = gridRef.current.childNodes;
      cells.forEach((cell) => {
        const rect = cell.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distance = Math.sqrt(
          Math.pow(mousePosition.x - centerX, 2) + Math.pow(mousePosition.y - centerY, 2)
        );

        const maxDistance = 200; // Adjust this value to change the size of the "spotlight"
        const opacity = Math.max(0, 1 - distance / maxDistance);
        cell.style.backgroundColor = `rgba(0, 0, 255, ${opacity * 0.5})`;
      });
    };

    updateGrid();
  }, [mousePosition]);

  const createGrid = () => {
    const cellsCount = Math.ceil((window.innerWidth / 50) * (window.innerHeight / 50));
    return Array(cellsCount).fill().map((_, index) => (
      <GridCell key={index} />
    ));
  };

  return (
    <GridContainer ref={gridRef}>
      {createGrid()}
    </GridContainer>
  );
};

export default GridBackground;