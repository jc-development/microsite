import React from 'react';
import FeaturedVideo from '../featured-videos/FeaturedVideo';

export const SafetyContainer = (props) => {
  return (
    <section>
      <article>
        <header>
          <h1>Safety built right in</h1>
          <p>The thumbsaver &amp; thumbsaver ii mechanisms offer more hand protection allowing you to take a more natural hold</p>
        </header>
        <FeaturedVideo
          videoName={"Thumbsavers Safety Features"}
          videoSectionRef={"THUMBSAVER"}
          videoSectionName={"Two important safety features are included on the A4. The original protects your fingers for the entire flight path of the arrow. The thumbsaver II protects you from the cables as well."}
          desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_Thumbsaver_Desktop.mp4'}
          desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_Thumbsaver_Desktop_Poster.jpg'}
        />
        <FeaturedVideo
          videoName={"Cocking The A4 Crossbow"}
          videoSectionRef={"COCKING"}
          videoSectionName={"The A4 comes with a cocking sled that guarantees even limb load and a safe cocking effort. The auto return thumbsaver engages to ensure safe conditions to load your arrow. Not only do you have full hand protection from the string on the entire flight path of the arrow from above, but also from below with the thumbsaver II."}
          desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop.mp4'}
          desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop_Poster.jpg'}
        />
        {/* <FeaturedVideo
          videoName={"Decocking the A4 Crossbow"}
          videoSectionRef={"DECOCKING"}
          videoSectionName={"To decock, simply Align your arrow’s vein with the visible notch to ensure it is loaded properly. With the A4, you are in total control and safe while decocking your crossbow in a few simple easy steps."}
          desktopVideo={'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop.mp4'}
          desktopVideoPoster={'https://s3.amazonaws.com/camx/videos/a4/A4_CockingLoading_Desktop_Poster.jpg'}
        /> */}
      </article>
    </section>
  );
};
