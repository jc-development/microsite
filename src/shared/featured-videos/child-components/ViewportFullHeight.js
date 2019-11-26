import React from 'react';

import './../assets/css/viewport-full-height.css';

export const ViewportFullHeight = (props) => {
  return (
    <section id={props.id} className="viewport-full-height">
      {props.children}
    </section>
  );
}
