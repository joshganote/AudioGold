import React from 'react';
import video from '../../assets/AGBackground.mp4';

import './HomeScreen.css';

export const HomeScreen = () => {
  return (
    <div>
      <video src={video} muted autoPlay></video>
      <h1>AudioGold</h1>
    </div>
  );
}
