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
          <p>a designer studying computer science <wbr />@ UC Berkeley</p>  
          <p>currently designing 
            <br/>@ Lawrence Berkeley National Laboratory</p>    
        </div>  
    </div>
  );
}

export default IntroductionSlide;