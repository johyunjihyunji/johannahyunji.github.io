import React from 'react';
import '../style/CrossoutAnimation.css';
import '../style/VideoWithText.css';
import profileGIF from '../../static/profileDraw.png';

function IntroductionSlide() {

  return (
    <div className="background">
      <div class="text-container">
        <div class="left-text"></div>

        <div class="right-text">
          <div class="my-name">
          Johanna Lee 
          </div>
          <br/>
          a designer and engineer studying computer science @ UC Berkeley

        </div>
      </div>

      <img className="joImage" src={profileGIF} alt="profile gif" />
      
    </div>
  );
}

export default IntroductionSlide;