import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Silence from '../silence/Silence';
import Assembly from '../assembly/Assembly';
import CrossbowScope from './../crossbow-scope/CrossbowScope';
import FeaturedVideo from '../featured-videos/FeaturedVideo';
import { AllNew } from './../all-new/AllNew';
import CADModelTour from '../cad-model-tour/CADModelTour';
import Packages from '../packages/PackagesContainer';
import { SafetyContainer } from '../safety/SafetyContainer';
import Price from '../price/Price';

import './../assets/shared-css/shared-styles.css';
import './assets/css/home.css';

import homePageImage from './assets/images/camx-a4-home.jpg';
import { displayCamXLogo, displayA4Logo, displayNewLogo } from './../assets/utils/logos';

import VideoPlayer from './../featured-videos/child-components/VideoPlayer'

export default class HomePage extends Component {

  render() {
    const displayHeroImg = () => <span className="hero-img" style={{backgroundImage: `url(${homePageImage})`}} />;
    const displayPackages = () => {
      return (
        <ul id="package">
          <li>
            <dl>
              <dt>A4 EXPEDITION PACKAGE</dt>
              <dd>A4 Crossbow</dd>
              <dd>ARC 370 4x32 Illuminated Crossbow Scope</dd>
              <dd>Weaver Style Steel Scope Rings</dd>
              <dd>Wishbone 4 Arrow Quiver</dd>
              <dd>CAMX Cocking Sled</dd>
              <dd>4 Accuspine Matched Crossbow Arrows</dd>
              <dd>Lo Ready Sling</dd>
              <dd>4 Xbow 100 Crossbow Broadheads</dd>
              <dd>Wax & Lube Kit</dd>
              <dd>4 Extra Accuspine Matched Crossbow Arrows (total of 8)</dd>
              <dd>Premium Soft Case</dd>
            </dl>
          </li>
        </ul>
      );
    };

    const messaging = () => (
      <header id="messaging">
        <a className="shop-now-mobile" href="https://camxcrossbows.com/products/camx-a4-base-package" target="_blank" rel="noopener noreferrer">SHOP NOW</a>
        {displayNewLogo()}
        {displayA4Logo()}
        <h1>The quietest crossbow on the market</h1>
        <p>Right out of the box, the New CAMX A4 Gives you 370 FPS, hyper-accuracy, a perfect trigger, and <em>minimum noise &amp; vibration</em>!</p>
        <p>It takes <em>less than a minute</em> to easily assemble! In no time, you'll ready for the hunt!</p>
        <a className="shop-now-desktop" href="https://camxcrossbows.com/products/camx-a4-base-package" target="_blank" rel="noopener noreferrer">SHOP NOW</a>
      </header>
    );

    const displayStats = () => {
      return (
        <ul id="stats">
          <li>SPEED<span>370 <div>FPS</div></span></li>
          <li>MASS WEIGHT<span>7 <div>LBS</div> 8 <div>OZ</div></span></li>
          <li>AXLE TO AXLE COCKED<span>10.5 <div>INCHES</div></span></li>
          <li>LENGTH<span>35 <div>INCHES</div></span></li>
          <li>POWER STROKE<span>13 <div>INCHES</div></span></li>
          <li>ARROW<span>18 <div>INCHES</div></span></li>
        </ul>
      );
    };

    const headerVideoOptions = {
      muted: true,
      autoplay: true,
      playsinline: true,
      loop: true,
      controls: false,
      preload: "metadata",
      poster: homePageImage,
      sources: [{
        src: 'https://s3.amazonaws.com/camx/videos/a4/combined-final-header-web.mp4',
        type: 'video/mp4'
      }],
    }
    return (
      <div>
        <section className="home">
          <article id="hero-wrapper">
            {/* {displayHeroImg()} */}
            {messaging()}
            {displayStats()}
            <VideoPlayer refVideoWrapper={video => this.video = video} {...headerVideoOptions} />
          </article>
        </section>
        <Silence />
        <CrossbowScope />
        <AllNew />
        <CADModelTour />
        <Assembly />
        <SafetyContainer />
        <Packages />
        <Price />
      </div>
    );
  }
}
