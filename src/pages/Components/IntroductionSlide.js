import React, { useState, useEffect } from 'react';
import '../style/CrossoutAnimation.css'; // We'll create this CSS file next
import '../style/VideoWithText.css'; 
import profileGIF from '../../../joprofile.gif'


function IntroductionSlide() {
  const [locations, setLocations] = useState(['Los Angeles, CA']);

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
    }, []); // Empty dependency array


    return (
        <div className="container">
        <div className="video-text-wrapper">
          <div className="video-container">
              <img src={profileGIF} alt="profile gif" style={{ maxWidth: '40vw' }} />
          </div>
          <div className="text-container">
            <div className="animation-container" 
            style={{
                    fontFamily: "'Inter', sans-serif",
                }}>
                <span style={{
                    fontFamily: "'IkeaFont', sans-serif",
                    fontSize: '4vw',
                }}>Johanna's
                <br />
                Portfolio
                </span>
                <br />
                <br />
                <br />
                <span> Johanna Lee is a designer, engineer, and artist </span>
                <br />
                <span> based in </span>
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
                <br />
                <br />
                <span> passionate about fashion, chai latte, and travel</span>
                <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default IntroductionSlide;