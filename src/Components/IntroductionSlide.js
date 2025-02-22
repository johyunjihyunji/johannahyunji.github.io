import React from 'react';
import '../style/CrossoutAnimation.css';
import '../style/VideoWithText.css';
import profileGIF from '../../static/profileDraw.png';

function IntroductionSlide() {

  return (
    <div className="background">
      <div class="left-image">
        <img className="joImage" src={profileGIF} alt="profile gif" />
        </div>
        <div class="right-text">
          <div class="my-name">
          Johanna Lee 
          </div>
          <p>
            a designer and engineer studying computer science @ UC Berkeley
            <br/>
            currently UX Design Intern @ ESNet (Summer 2024 - Present) 
          </p>    
          <br/><br/>
          <div class="tilting-text">
            Designing Solutions from a Different Angle
          </div>


        </div>  
    </div>
  );
}

export default IntroductionSlide;