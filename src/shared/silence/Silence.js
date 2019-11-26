import React, { Component } from 'react';
import FeaturedVideo from '../featured-videos/FeaturedVideo';

export default class Silence extends Component {
  render() {
    return (
      <section>
        <article>
          <header>
            <h1>The sound of silence</h1>
            <p>Noise doesn't belong in the conversation when being stealthy</p>
            <p>At CamX, we don’t just focus on speed, because that's only solving part of the problem. Just adding more speed would only yield more noise and more vibration. The CAMX A4 is engineered to be the complete package: Speed, Hyper-Accuracy, and virtually no noise or vibration.</p>
          </header>
          <FeaturedVideo
            videoName={"The Quiet Game"}
            videoSectionRef={"QUIET-GAME"}
            videoSectionName={"See and listen to how much quieter the A4 is against other comparable crossbows. You'll agree that the A4 is the quietest!"}
            desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_QuietGame_Desktop.mp4'}
            desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_QuietGame_Desktop_Poster.jpg'}
          />
        </article>
      </section>
    );
  }
}
