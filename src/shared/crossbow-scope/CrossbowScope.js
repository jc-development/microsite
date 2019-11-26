import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FeaturedVideo from '../featured-videos/FeaturedVideo';

import './assets/css/crossbow-scope.css';

import a4ScopeImage from './assets/images/a4-scope-reticle-clear2.png';
import a4LifestyleImage from './assets/images/a4-lifestyle-buck.jpg';
import a4TrajectoryImage from './assets/images/a4-scope-arrow-trajectory.jpg';

export default class CrossbowScope extends Component {
  render() {
    const reticleImgStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      maxWidth: '100%'
    };

    const displayScopeReticleImgVid = () => (
      <div className="reticle">
        <video id="scope" autoPlay muted playsInline loop src="https://cdn.shopify.com/s/files/1/1251/6841/files/camx-animals.mp4?14923602807509582009" poster="https://cdn.shopify.com/s/files/1/1251/6841/files/camx-recticle-number-background.jpg?9465156825005228358">
              <source src="https://cdn.shopify.com/s/files/1/1251/6841/files/camx-animals.mp4?14923602807509582009" type="video/mp4" />
              <source src="https://cdn.shopify.com/s/files/1/1251/6841/files/camx-animals.m4v?16986193345175500925" type="video/m4v" />
        </video>
        <img style={reticleImgStyle} src={a4ScopeImage} alt="CamX - Arc Crossbow Scope Recticle" />
      </div>
    );
    const displayLifestyleImg = () => <span  className="hero-img" style={{backgroundImage: `url(${a4LifestyleImage})`}}  />;
    const displayTrajectoryImg = () => <img className="trajectory" src={a4TrajectoryImage} alt="CamX A4 Crossbow Scope Arrow Trajectory"  />;

    return (
      <section className="scope">
        <article>
          <header>
            <h1>ARC 370 4x32  ILLUMINATED CROSSBOW SCOPE</h1>
            <p>an industry leading 4 powered magnification optic with short eye relief</p>
            <p>The A4’s Short Eye Relief has a natural cheek weld, and allows an extremely quick target acquisition without having to draw your head back or forward to adjust. Your target accurately appears where it is supposed to be.
              10 to 50 yards (hunting zone) are illuminated which allows for better shots in darker lighting. 70 to 100 yards (recreational) are chevrons which allow you to train at farther distances so you can nail your closer shots much easier.</p>
          </header>
        </article>
        <article className="hero-wrapper">
          {displayLifestyleImg()}
          <div className="intro">
            <h1>ARC 370 4x32  ILLUMINATED CROSSBOW SCOPE</h1>
            <p>The ARC™ features two key technologies: SER™ (Short Eye Relief) and ARC™ (Arrow Range Compensation). SER™ 1 1⁄2” eye relief permits comfortable scope positioning. compact and lightweight other ARC™ features include fully coated optics, cross/dot reticle, 1/4” click turrets at 20 yards, 30 yard parallax free, independent eye piece focus and is fog proof, waterproof, shockproof, and carries a lifetime warranty.</p>
          </div>
        </article>
        <article className="scope-content">
          <header>
            <div>
              <h2>ARC 370 4x32  ILLUMINATED CROSSBOW SCOPE FEATURES</h2>
              <ul>
                <li>Designed exclusively for the CAMX A4 Crossbow</li>
                <li>Precalibrated from 10 to 100 yards</li>
                <li>Numbered fast fire reticle</li>
                <li>Illuminated crossdot aim dots from 10 to 50 yards</li>
                <li>Mounted with 1” Weaver® style rings</li>
                <li>Six illumination settings with off stops</li>
              </ul>
            </div>
            <div>
                {displayScopeReticleImgVid()}
            </div>
            <div>
                {displayTrajectoryImg()}
            </div>
          </header>
        </article>
        <FeaturedVideo
          videoName={"CamX A4 Arc Illuminated Crossbow Scope"}
          videoSectionRef={"arc-scope"}
          videoSectionName={"View the video to see all the benefits that come with the CAMX A4 ARC SCOPE"}
          desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_Scope_Desktop.mp4'}
          desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_Scope_Desktop_Poster.jpg'}
        />
      </section>
    );
  }
}
