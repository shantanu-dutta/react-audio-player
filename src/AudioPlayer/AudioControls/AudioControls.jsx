import React from 'react';

import { ReactComponent as Play } from '@/assets/play.svg';
import { ReactComponent as Pause } from '@/assets/pause.svg';
import { ReactComponent as Next } from '@/assets/next.svg';
import { ReactComponent as Prev } from '@/assets/prev.svg';

import './AudioControls.css';

const AudioControls = ({
  isPlaying,
  onPlayPauseClick,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className="previous"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <Prev />
      </button>
      {isPlaying ? (
        <button
          type="button"
          className="pause"
          aria-label="Pause"
          onClick={onPlayPauseClick}
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          aria-label="Play"
          onClick={onPlayPauseClick}
        >
          <Play />
        </button>
      )}
      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
      >
        <Next />
      </button>
    </div>
  );
};

export default AudioControls;
