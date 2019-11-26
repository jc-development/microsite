import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/fontawesome-free-solid'

if (process.env.IS_BROWSER) {
  require('./assets/css/compare-package.css');
}


export const ComparePackages = (props) => {
  return (
    <article id="comparePackages">
      <h2>COMPARE PACKAGES</h2>
      <div className="package-compare-container">
        <FontAwesomeIcon icon={faChevronLeft} className="chevron-nav-left" onClick={props.scrollLeft} />
        <div className="package-compare-wrapper" ref={props.refCompareWrapper}>
          {listPackages(props)}
        </div>
        <FontAwesomeIcon icon={faChevronRight} className="chevron-nav-right" onClick={props.scrollRight} />
      </div>
    </article>
  );
};

const listPackages = (props) => {
  return props.packages.map( (camxPackage, i) => {
    return (
      <div key={i}>
        <img src={camxPackage.smallImage} />
        <div>
          <h3>{camxPackage.name}</h3>
          <a href={camxPackage.buyLink} target="_blank" rel="noopener noreferrer">LEARN MORE</a>
          {/* <h4>{camxPackage.price}</h4> */}
        </div>
        <dl>
          <dt>What's included:</dt>
          {listContents(camxPackage.contents)}
        </dl>
      </div>
    )
  });
};

const listContents = (packageContents) => {
  return packageContents.map( (content, i) => {
    return (
      <dd key={i}>{content}</dd>
    );
  });
};
