import React, { useState, useEffect } from 'react';
import './CrossoutAnimation.css'; // We'll create this CSS file next
import './VideoWithText.css'; 
import profileGIF from '../../joprofile.gif'


function IntroductionSlide() {

    // CROSSOUTANIMINATION
    const [locations, setLocations] = useState(['Los Angeles, CA']);
    const allLocations = ['Los Angeles, CA', 'Seoul, Korea', 'Vientiane, Laos', 'Berkeley, CA', '?'];
  
    useEffect(() => {
      const interval = setInterval(() => {
        setLocations((prevLocations) => {
          const currentIndex = prevLocations.length;
          if (currentIndex < allLocations.length) {
            return [...prevLocations, allLocations[currentIndex]];
          }
          return prevLocations; // Stop adding after all locations are added
        });
      }, 2000); // Change location every 4 seconds
  
      return () => clearInterval(interval);
    }, [allLocations]);


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
                    fontSize: '100px',
                    fontWeight: 700,
                    color: '#00BE09'
                }}>Jo</span> 
                <span style={{
                    fontSize: '100px',
                    fontWeight: 700
                }}>hanna Lee</span>
                <br />
                <br />
                <br />
                <span> a designer and engineer based in </span>
                <br />
                {locations.map((location, index) => (
                    <React.Fragment key={index}>
                    <span 
                        className={`location ${index < locations.length - 1 ? 'crossed' : ''} ${
                        index === locations.length - 1 && location === '?' ? 'red-question-mark' : ''
                        }`}
                    >
                        {location}
                    </span>
                    {index < locations.length - 1 && <span className="space">&nbsp;</span>}
                    </React.Fragment>
                ))}
                <br />
                <br />
                <span> studying CS and design innovation </span>
                <br />
                <span> at University of California Berkeley</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default IntroductionSlide;