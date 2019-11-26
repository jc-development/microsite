import React,  { Component } from 'react';
import VideoJS from 'video.js'

if (process.env.IS_BROWSER) {
  require('video.js/dist/video-js.css')
}

export default class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = VideoJS(this.videoNode, this.props, function onPlayerReady() {
      // console.log('player: ', this)
    });
  }

  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div className="video-wrapper" ref={this.props.refVideoWrapper}>
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } id={this.props.id} className="video-js vjs-big-play-centered" onPlay={this.props.onPlay} onPause={this.props.onPause}></video>
        </div>
      </div>
    )
  }
}
