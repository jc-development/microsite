import React, { Component } from 'react';
import FeaturesList from  './FeaturesList';
import ColorsList from './ColorsList';
import './../assets/css/features-menu.css';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'

import _find from 'lodash/find';

export default class FeaturesMenu extends Component {

  constructor(props) {
    super(props);

    this.mobileArrowScrollLeft = this.mobileArrowScrollLeft.bind(this);
    this.mobileArrowScrollRight = this.mobileArrowScrollRight.bind(this);
    this.mobileListScrollResize = this.mobileListScrollResize.bind(this);

    this.state = {
      showComponent: 'features',
      mobileListScrollCount: 0
    };

  }

  showComponentToRender(name) {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.props.resetCrossbow();

    this.setState({
      showComponent: name,
      mobileListScrollCount: 0
    });
  }

  mobileArrowScrollLeft(list) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const scrollNodes = list.childNodes.length - 1
    if (this.state.mobileListScrollCount > 0) {
      const scrollableWidth = list.scrollWidth;
      const viewableWidth = list.getBoundingClientRect().width;
      const maxScroll = scrollableWidth - Math.round(viewableWidth);
      const currentScrollPosition = list.scrollLeft;
      TweenMax.to(list, 0.5, {scrollTo:{x: currentScrollPosition - (maxScroll/scrollNodes)}})
      this.setState({ mobileListScrollCount: this.state.mobileListScrollCount - 1});
    }
  }

  mobileArrowScrollRight(list) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    const scrollNodes = list.childNodes.length - 1
    if (this.state.mobileListScrollCount < scrollNodes) {
      const scrollableWidth = list.scrollWidth;
      const viewableWidth = list.getBoundingClientRect().width;
      const maxScroll = scrollableWidth - Math.round(viewableWidth);
      const currentScrollPosition = list.scrollLeft;
      TweenMax.to(list, 0.5, {scrollTo:{x: currentScrollPosition + (maxScroll/scrollNodes)}})
      this.setState({ mobileListScrollCount: this.state.mobileListScrollCount + 1});
    }
  }

  mobileListScrollResize() {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'resize'); 
    let list;
    if (this.state.showComponent === 'features') {
      list = this.featuresWrapper;
    } else {
      list = this.colorsWrapper;
    }
    const match = _find(list.childNodes, (listItem, i) => {
      return i === this.state.mobileListScrollCount;
    });
    const viewableWidth = list.getBoundingClientRect().width;
    TweenMax.to(list, 0, {scrollTo:{x: viewableWidth * this.state.mobileListScrollCount}})
  }

  componentDidMount () {
    if (window.innerWidth < 701) {
      window.addEventListener('resize' , this.mobileListScrollResize)
    }
  }

  componentWillUnmount () {
    if (window.innerWidth < 701) {
      window.removeEventListener('resize' , this.mobileListScrollResize)
    }
  }

  render() {

    const activeTab = {
      background: 'rgb(193, 32, 38)'
    }

    return (
      <div id="features-menu-wrapper">
        <nav id="features-menu">
          <li style={this.state.showComponent === 'features' ? activeTab : null} onClick={() => this.showComponentToRender('features')}>FEATURES</li>
          <li style={this.state.showComponent === 'colors' ? activeTab : null} onClick={() => this.showComponentToRender('colors')}>COLORS</li>
          <li onClick={() => this.props.resetCrossbow()}>RESET A4</li>
        </nav>

        <div id="component-wrapper">
          <FontAwesomeIcon icon={faChevronLeft} className="chevron-nav-left" onClick={() => this.mobileArrowScrollLeft(this.state.showComponent === 'features' ? this.featuresWrapper : this.colorsWrapper)}/>
          <FontAwesomeIcon icon={faChevronRight} className="chevron-nav-right" onClick={() => this.mobileArrowScrollRight(this.state.showComponent === 'features' ? this.featuresWrapper : this.colorsWrapper)} />
          <FeaturesList
             updateCad={this.props.updateCad}
             resetFeatures={this.props.resetFeatures}
             showComponent={this.state.showComponent}
             refFeaturesWrapper={featuresWrapper => this.featuresWrapper = featuresWrapper}
          />
          <ColorsList
            switchColor={this.props.switchColor}
            showComponent={this.state.showComponent}
            resetFeatures={this.props.resetFeatures}
            refColorsWrapper={colorsWrapper => this.colorsWrapper = colorsWrapper}

          />
        </div>
      </div>
    );
  }

}
