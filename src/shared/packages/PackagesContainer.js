import React, { Component } from 'react';
import camxPackages from './packages-definition';
import { ComparePackages } from './ComparePackages';
import _find from 'lodash/find';

import './assets/css/packages.css';

import TweenMax from 'gsap/TweenMax';
import scrollTo from 'gsap/ScrollToPlugin';

export default class PackagesContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {
      package: camxPackages[2]
    };

    this.showLargePackageImage = this.showLargePackageImage.bind(this);
    this.listPackageContents = this.listPackageContents.bind(this);
    this.viewPackage = this.viewPackage.bind(this);
    this.activeStyle = this.activeStyle.bind(this);
    this.mobileArrowScrollLeft = this.mobileArrowScrollLeft.bind(this);
    this.mobileArrowScrollRight = this.mobileArrowScrollRight.bind(this);
  }

  viewPackage(name) {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    let matchedPackage = _find(camxPackages, (camxPackage) => {
      return camxPackage.name === name;
    });

    this.setState({
      package: matchedPackage
    }, () => {
      this.listPackageContents();
    });
  }

  listPackageContents() {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    return this.state.package.contents.map( (contentItem, i) => {
      return (<dd key={i}>{contentItem}</dd>);
    });
  }

  showLargePackageImage() {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    let imagePath = this.state.package.largeImage;
    return <img src={imagePath}  className="package-img" />

  }

  activeStyle(name) {
    const activeStyle = {
      background: '#C12026'
    };

    const inactiveStyle = {
      background: '#000'
    };

    if (this.state.package.name === name) return activeStyle;
    return inactiveStyle;
  }

  mobileArrowScrollLeft() {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const scrollableWidth = this.compareWrapper.scrollWidth;
    const viewableWidth = this.compareWrapper.getBoundingClientRect().width;
    const maxScroll = scrollableWidth - Math.round(viewableWidth);
    const currentScrollPosition = this.compareWrapper.scrollLeft;
    TweenMax.to(this.compareWrapper, 0.5, {scrollTo:{x: currentScrollPosition - (maxScroll/2)}})
    // console.log('Get entire width (including overflowed content) ', scrollableWidth)
    // console.log('Get width of viewable area ', viewableWidth)
    // console.log('Max scroll amount', maxScroll)
    // console.log('Current scroll position from left', currentScrollPosition)
  }

  mobileArrowScrollRight() {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const scrollableWidth = this.compareWrapper.scrollWidth;
    const viewableWidth = this.compareWrapper.getBoundingClientRect().width;
    const maxScroll = scrollableWidth - Math.round(viewableWidth);
    const currentScrollPosition = this.compareWrapper.scrollLeft;
    TweenMax.to(this.compareWrapper, 0.5, {scrollTo:{x: currentScrollPosition + (maxScroll/2)}})
  }

  render() {
    return (
      <section className="packages">
        <div className="intro">
          <h1>A4 CROSSBOW PACKAGES</h1>
          <p>Camx provides an out-of the box hunting setup that prepares you for success from the first shot.</p>
          <p>Whether it's your first arrow or your latest trophy harvest, each CAMX Crossbow is factory-sighted for hyper-accurate shooting.</p>
          <nav>
            <ul>
              <li style={this.activeStyle("BASE")} onClick={() => this.viewPackage("BASE")}>BASE PACKAGE</li>
              <li style={this.activeStyle("HUNTING")} onClick={() => this.viewPackage("HUNTING")}>HUNTING PACKAGE</li>
              <li style={this.activeStyle("EXPEDITION")} onClick={() => this.viewPackage("EXPEDITION")}>EXPEDITION PACKAGE</li>
            </ul>
          </nav>
        </div>
        <article id="overviewPackages">
          <div className="package-content">
            {this.showLargePackageImage()}
            <dl>
              <dt>{this.state.package.name} PACKAGE</dt>
              <dd className="pre-order"><a href={this.state.package.buyLink} target="_blank" rel="noopener noreferrer">LEARN MORE</a></dd>
              {this.listPackageContents()}
            </dl>
          </div>
        </article>

        <ComparePackages
          packages={camxPackages}
          scrollLeft={this.mobileArrowScrollLeft}
          scrollRight={this.mobileArrowScrollRight}
          refCompareWrapper={compareWrapper => this.compareWrapper = compareWrapper}
        />
      </section>
    );
  }
}
