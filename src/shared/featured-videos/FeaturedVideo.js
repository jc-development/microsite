import React, { Component } from 'react';

import VideoPlayer from './child-components/VideoPlayer'
import { ViewportFullHeight } from './child-components/ViewportFullHeight'
import { displayCamXLogo, displayA4Logo } from '../assets/utils/logos';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlayCircle } from '@fortawesome/fontawesome-free-solid'
import './assets/css/featured-videos.css';

import camxVideos from './videos-definition';

if (process.env.IS_BROWSER) {
  var TimelineMax = require('gsap/TimelineMax');
  var TweenMax = require('gsap/TweenMax');
}

export default class FeaturedVideos extends Component {

  constructor (props) {
    super()
    this.onVideoPlay = this.onVideoPlay.bind(this);
    this.onVideoPause = this.onVideoPause.bind(this);
    this.playVideo = this.playVideo.bind(this);
    this.displayVideo = this.displayVideo.bind(this);

    this.sectionContent;
    this.video;
    this.videoTimeline;
  }

  componentDidMount() {
    this.videoTimeline = new TimelineMax({paused: true});
  }

  onVideoPlay(content, video) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Videos', 'play', { nonInteraction: true });
    // console.log('onVideoPlay start');

    // hide section video content
    this.videoTimeline.to(content, 1, {autoAlpha: 0})
    // show video player control bar
    this.videoTimeline.to(video.firstChild.childNodes[5], 1, {autoAlpha: 1}, "-=1")
    // increase video player wrapper z-index for user interaction
    this.videoTimeline.to(video.firstChild, 0, {css: {zIndex:4}})
    // play timeline
    this.videoTimeline.play()

    // console.log('onVideoPlay ended');
  }

  onVideoPause(content, video) {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Videos', 'pause', { nonInteraction: true });
    // console.log('onVideoPause start');

    // hold video player --- used to tap into player events
    const player = video.firstChild.player

    // check if video player is paused and user is not seeking
    if (player.paused() && !player.seeking()) {

        // check if video player is fullscreen
        if(player.isFullscreen()) {
          // exit fullscreen
          player.exitFullscreen()
        }

        // decrease video player wrapper z-index for user interaction
        this.videoTimeline.to(video.firstChild, 0, {css: {zIndex:'-1'}})
        // show section video content
        this.videoTimeline.to(content, 1, {autoAlpha: 1})
        // hide video player control bar
        this.videoTimeline.to(video.firstChild.childNodes[5], 1, {autoAlpha: 0}, "-=1")
        // play timeline
        this.videoTimeline.play()

        // check if video has finished playing in the player
        if(player.ended()) {
          // resets video player UI states (removes class that hides poster and other elements)
          player.hasStarted(false)
        }

    }

    // console.log('onVideoPause ended');
  }

  playVideo(video) {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Videos', 'play', { nonInteraction: true });
    // console.log('playVideoTransition start');

    // hold video player --- used to tap into player events
    const player = video.firstChild.player
    // play video in player
    player.play();

    // console.log('playVideoTransition ended');
  }

  displayVideo() {
    const videoOptions = {
      muted: false,
      autoplay: false,
      playsinline: false,
      loop: false,
      controls: true,
      preload: "metadata",
      poster: this.props.desktopVideoPoster,
      sources: [{
        src: this.props.desktopVideo,
        type: 'video/mp4'
      }],
      id: `${this.props.videoSectionRef}-video`,
      onPlay: () => this.onVideoPlay(this.sectionContent, this.video),
      onPause: () => this.onVideoPause(this.sectionContent, this.video)
    };

      return (
        <ViewportFullHeight id={`${this.props.videoSectionRef}-section`}>
          <div className="video-content-wrapper" ref={sectionContent => this.sectionContent = sectionContent}>
            {displayCamXLogo()}
            {displayA4Logo()}
            <h2>{this.props.videoSectionName}</h2>
            <FontAwesomeIcon icon={faPlayCircle} className="fas video-play-btn" onClick={() => this.playVideo(this.video)}></FontAwesomeIcon>
          </div>
         <VideoPlayer refVideoWrapper={video => this.video = video} {...videoOptions} />
        </ViewportFullHeight>
      );
  }

  render() {
    return (
      <div className="featured-videos-section">
        {this.displayVideo(this.props)}
      </div>
    );
  }
}
