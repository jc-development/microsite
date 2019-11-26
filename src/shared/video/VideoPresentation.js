/*
  This is old and will be removed
*/


import React, { Component } from 'react';

import './assets/css/video.css';
import videoPosterSrc from './assets/images/a4-quiet-game-poster.jpg'; //'./assets/images/camx-a4-poster.jpg';

const videoSrc = 'https://s3.amazonaws.com/camx/videos/a4/A4_QuietGame_Desktop.mp4'; //'https://s3.amazonaws.com/camx/a4-promo/video/a4.mp4';

export default class VideoPresentation extends Component {
  render() {
    return (
      <video playsInline controls poster={videoPosterSrc}>
        <source src={videoSrc} type="video/mp4"/>
      </video>
    );
  }
}
