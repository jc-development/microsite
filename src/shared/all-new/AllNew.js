import React from 'react';
import FeaturedVideo from '../featured-videos/FeaturedVideo';

import './assets/css/all-new.css';

export const AllNew = () => {
  return (
    <section id="all-new">
      <article>
      <header>
        <h1>THE ALL NEW A4 CROSSBOW</h1>
        <p>THE A4 BRINGS AN EXPERIENCE LIKE NO OTHER TO THE CROSSBOW HUNTER</p>
        <p>The A4 suspension system features a patent-pending swingarm system that keeps the string, cable, and cams inside the tips of the limbs. this innovative system maximizes durability, minimizes noise, and eliminates vibration.</p>
      </header>
      <FeaturedVideo
        videoName={"A4 Swing Arm"}
        videoSectionRef={"SWING-ARM"}
        videoSectionName={"Engineered for a gentle finish at the bottom of the shot. When the crossbow is cocked, the cam position is past 90 degrees. When the arrow travels forward, the suspension system catches up to the shot after the string has hit the bumper pad one time. Hardly any noise or any vibration, while still generating 370 FPS."}
        desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_SwingArm_Desktop.mp4'}
        desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_SwingArm_Desktop_Poster.jpg'}
      />
      </article>
    </section>
  );
}
