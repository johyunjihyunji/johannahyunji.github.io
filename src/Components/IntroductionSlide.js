import React from 'react';
import '../style/CrossoutAnimation.css';
import '../style/VideoWithText.css';
import profileGIF from '../../static/profileDraw.png';
import { Link } from 'gatsby';
import Swing from '../../static/Artboard 1.png';

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
          <p>a designer studying computer science <br />@ UC Berkeley</p>  
          <p>currently designing 
            <br/>@ Lawrence Berkeley National Laboratory</p>    
        </div> 
        {/* <Link to="/About"> */}
        <Link>
          <img className='Swing' src={Swing} alt="swing"/>
        </Link>
    </div>
  );
}

export default IntroductionSlide;