import React, { Component } from 'react';
import FeaturedVideo from '../featured-videos/FeaturedVideo';

export default class Price extends Component {
  render() {
    return (
      <section>
        <article>
          <header>
            <h1>We deliver the complete package of everything that you want in a crossbow</h1>
            <p>More effort and care goes into every CamX A4 to ensure your success in the field</p>
            <p>Each and every CamX trigger is thoroughly tested prior to being installed in the stock and additionally through actual live fire testing on the range.  Live fire testing gives us that real world human element allowing our technicians to not only insure safe operation but that your trigger “feels” correct.  No other crossbow manufacture evaluates and touches each and every trigger the way we do at CamX.</p>
          </header>
          <FeaturedVideo
            videoName={"Price Tag"}
            videoSectionRef={"PRICE-TAG"}
            videoSectionName={"For $1149.99 – speed, accuracy, quietness, ease of assembly, ease of reloading, durability, safety, immediate high performance out of the box."}
            desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_PriceTag_Desktop.mp4'}
            desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_PriceTag_Desktop_Poster.jpg'}
          />
        </article>
      </section>
    );
  }
}
