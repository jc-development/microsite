import React, { Component } from 'react';
import FeaturedVideo from '../featured-videos/FeaturedVideo';
import factoryTestedImg from './assets/images/perf-tested.jpg';

import './assets/css/assembly.css';

export default class Assembly extends Component {
  render() {
    const displayHero = () => <img src={factoryTestedImg} id="packages-hero" alt="All CAMX CROSSBOWS ARE FACTORY TESTED TO ENSURE OUT OF THE BOX MAXIMUM PERFORMANCE" />;
    return (
      <section>
        <article>
          <header>
            <h1>Easily Assembled in two easy steps</h1>
            <p>Right out of the box the CamX A4 is scoped, tuned, and ready</p>
            <p>Comfortek stock comes with Monobloc scope mounted. Guaranteed Performance Test attached - shows the actual shot results; speed, date, tech that performed the test. 4 arrows shooting less than 1 inch within a 20 yard circle.
            Guarantees that your Arc Scope is fully sighted in for 10 to 100 yards. Bow is fully assembled - Stirrup is already pre-mounted and Inboard Cams are already pre-strung. Shim kit to change the length and pull of your crossbow stock.
            If you want to make it longer or shorter based on your preference. Cocking Sled and Quivers.
            </p>
          </header>
          <FeaturedVideo
            videoName={"Assembling The A4 Crossbow"}
            videoSectionRef={"assembly"}
            videoSectionName={"Right out of the box, in just two simple steps, that take about 35 seconds, your CamX crossbow is ready to head into the woods for a great hunt!"}
            desktopVideo={"https://s3.amazonaws.com/camx/videos/a4/A4_Assembly_Desktop.mp4"}
            desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_Assembly_Desktop_Poster.jpg'}
          />
          {displayHero()}
        </article>
      </section>
    );
  }
}
