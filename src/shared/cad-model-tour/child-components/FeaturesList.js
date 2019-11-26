import React, { Component } from 'react';
import { features } from './../assets/utils/featuresColors';

export default class FeaturesList extends Component {

  constructor(props) {
    super(props);

    this.handleDisplay = this.handleDisplay.bind(this);

    this.state = {
      currentlyViewing: ""
    }
  }

  handleDisplay(name) {
    if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.setState({
      currentlyViewing: name
    }, () => {
      this.props.updateCad(name);
    });
  }

  render() {

    const activeDivStyle = (featureName) => {
      if (this.state.currentlyViewing === featureName && this.props.resetFeatures === false) {
        return {
          // border: '1px solid #ccc',
          // padding: '0.5rem'
        };
      } else {
        return null;
      }
    };

    const showHideStyle = (featureName) => {
      if (window.innerWidth > 700) {
        if (this.state.currentlyViewing === featureName && this.props.resetFeatures === false) {
          return { display: 'flex' };
        } else {
          return { display: 'none' };
        }
      } else {
        return { display: 'flex' };
      }
    };

    const displayFeatureNodes = () => {
      return features.map( (feature, i) => {
        return (
          <li key={i} onClick={() => this.handleDisplay(feature.name)}>
            <div style={activeDivStyle(feature.name)}>
              <h6>{feature.name}</h6>
              <p style={ showHideStyle(feature.name) }>{feature.description}</p>
            </div>
          </li>
        );
      });
    }

    const ulDisplayStyle = () => {
      if (this.props.showComponent === 'features') {
        if (window.innerWidth > 700) {
          return {
            display: 'flex',
            flexDirection: 'column'
          };
        } else {
          return {
            display: 'flex'
          };
        }
      } else {
        return {
          display: 'none'
        };
      }
    };

    return (
      <ul style={ulDisplayStyle()} ref={this.props.refFeaturesWrapper}>
        {displayFeatureNodes()}
      </ul>
    );
  }
}
