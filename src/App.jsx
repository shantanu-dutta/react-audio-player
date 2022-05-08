import React from 'react';

import AudioPlayer from './AudioPlayer/AudioPlayer';
import tracks from './tracks';

import './App.css';


function App() {
  return (
    <div className="App">
      <AudioPlayer tracks={tracks} />
    </div>
  );
}

export default App;
