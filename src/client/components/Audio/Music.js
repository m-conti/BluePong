import React, { useEffect, useState } from 'react';

import music from './music.mp3';

import { IconButton } from '@material-ui/core';
import { VolumeOff, VolumeUp } from '@material-ui/icons';

const MusicComponent = ( props ) => {
  const [ sound, setSound ] = useState(null);
  const [ muted, setMuted ] = useState(false);

  useEffect(() => {
    const sound_music = new Audio(music);
    sound_music.loop = true;
    sound_music.volume = 0.02;
    sound_music.addEventListener("canplaythrough", () => { sound_music.play(); });
    setSound(sound_music);

    return () => {
      sound_music.pause();
    }
  }, []);

  useEffect(() => {
    if (sound) sound.muted = muted;
  }, [sound, muted]);

  return <IconButton onClick={() => setMuted(!muted)}>{ muted ? <VolumeOff style={{ color: '9C9C9C'}} /> : <VolumeUp style={{ color: '#FCFCFC'}} />}</IconButton>
}

export default MusicComponent;