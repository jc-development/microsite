import React, { Component } from 'react';
import { colors } from './../assets/utils/featuresColors';

export default class ColorsList extends Component {

  constructor(props) {
    super(props);

    this.handleDisplay = this.handleDisplay.bind(this);

    this.state = {
      currentlyViewing: "REALTREE XTRA"
    }
  }

  handleDisplay(name) {
     if (process.env.IS_BROWSER) window.ga('send', 'event', 'Page Interaction', 'click');
    this.setState({
      currentlyViewing: name
    }, () => {
      this.props.switchColor(name);
    });
  }

  render() {

    const activeDivStyle = (colorName) => {
      if (this.state.currentlyViewing === colorName && this.props.resetFeatures === false) {
        return {
          // border: '1px solid #ccc',
          // padding: '0.5rem'
        };
      } else {
        return null;
      }
    };

    const displayColorNodes = () => {
      return colors.map( (color, i) => {
        return (
          <li onClick={ () => this.handleDisplay(color.name) } key={i}>
            <div style={activeDivStyle(color.name)}>
              <h6>{color.name}</h6>
              <img src={color.src} />
            </div>
          </li>
        );
      });
    };

    const ulDisplayStyle = () => {
      if (this.props.showComponent === 'colors') {
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
      <ul style={ulDisplayStyle()} ref={this.props.refColorsWrapper}>
        {displayColorNodes()}
      </ul>
    );
  }
}
