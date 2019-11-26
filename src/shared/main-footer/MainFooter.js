import React, { Component } from 'react';
import './assets/css/main-footer.css';
import bgImg from './assets/images/footer-bg.jpg';

export default class MainFooter extends Component {
  render() {
    const displayBgImg = () => {
      return <div id="footer-img" style={{backgroundImage: `url(${bgImg})`}} ></div>
    };

    return (
      <footer>
        {displayBgImg()}
      </footer>
    );
  }
}
