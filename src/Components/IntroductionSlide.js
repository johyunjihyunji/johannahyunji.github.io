import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import '../style/CrossoutAnimation.css';
import '../style/VideoWithText.css';
import profileGIF from '../../static/jo.png';
import joModel from '../../static/jo3d.gltf';

function IntroductionSlide() {
  const [locations, setLocations] = useState(['Los Angeles, CA']);
  const mountRef = useRef(null);
  const modelRef = useRef(null);

  useEffect(() => {
    const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', 'Where Now ?'];
    
    const interval = setInterval(() => {
      setLocations((prevLocations) => {
        const currentIndex = prevLocations.length;
        if (currentIndex < allLocations.length) {
          return [...prevLocations, allLocations[currentIndex]];
        }
        return prevLocations;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="background">
      <div ref={mountRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
      <div className="top-text" style={{ color: '#282828' }}>passionate about fashion, apple cider, and travel</div>
      <div className="text-container">
        <span className="left-text" style={{ color: '#282828' }}>Designer</span>
        <span className="center-text" style={{ color: '#000000' }}>Johanna Lee</span>
        <span className="right-text" style={{ color: '#282828' }}>Engineer</span>
      </div>
      <img className="joImage" src={profileGIF} alt="profile gif" />
      <div className="bottom-text" style={{ color: '#282828' }}>
        based in
        <br/> 
        {locations.map((location, index) => (
          <React.Fragment key={index}>
            <span 
              className={`location ${index < locations.length - 1 ? 'crossed' : ' '} ${
                index === locations.length - 1 && location === 'Where Now ?' ? 'red-question-mark' : ''
              }`}
            >
              {location}
            </span>
            {index < locations.length - 1 && <span className="space">&nbsp; &nbsp;</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default IntroductionSlide;
