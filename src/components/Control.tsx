import React, { useState, useEffect, FormEvent, useMemo } from 'react';
import { Sample } from '../types';
import { ControlStyle, PlayPause, Loop, Range, RangeInput } from '../styles/ControlStyles';
import { Row } from '../styles';

function round(value: number) {
  return Math.round(value * 10) / 10;
}

export const Control: React.FC<Props> = ({ ctx, sample }) => {
  const [playing, setPlaying] = useState(false);
  const [loop, setLoop] = useState(true);
  const [time, setTime] = useState(0);
  const [pan, setPan] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const { name, audio } = sample;
  const panner = useMemo(() => new StereoPannerNode(ctx, { pan: 0 }), [ctx]);
  const gain = useMemo(() => ctx.createGain(), [ctx]);
  // This effect handles connecting the nodes to the output
  useEffect(() => {
    // setup the track and connect to output.
    audio.loop = true;
    const track = ctx.createMediaElementSource(audio);
    track
      .connect(panner)
      .connect(gain)
      .connect(ctx.destination);
  }, [audio, ctx, panner, gain]);

  // This effect is strictly for handling update time event
  useEffect(() => {
    const updateTime = (e: Event) => {
      const element = e.target as HTMLAudioElement;
      if (!duration) {
        setDuration(round(element.duration));
      }
      setTime(round(element.currentTime));
    };
    // add event listeners
    audio.addEventListener('timeupdate', updateTime);
    // remove event listener on unmount
    return () => audio.removeEventListener('timeupdate', updateTime);
  }, [audio, ctx, panner, duration]);

  // similarly this effect is for handling audo ended event
  useEffect(() => {
    const onEnd = () => {
      if (loop) return;
      setPlaying(false);
    };
    audio.addEventListener('ended', onEnd);
    return () => audio.removeEventListener('ended', onEnd);
  }, [loop, audio]);

  const toggleLoop = () => {
    audio.loop = !loop;
    setLoop(!loop);
  };

  const onPan = (e: FormEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);
    setPan(value);
    panner.pan.setValueAtTime(value, ctx.currentTime);
  };

  const onVolume = (e: FormEvent<HTMLInputElement>) => {
    const value = parseFloat(e.currentTarget.value);
    setVolume(value);
    gain.gain.setValueAtTime(value, ctx.currentTime);
  };

  const playPause = () => {
    if (ctx.state === 'suspended') {
      ctx.resume();
    }
    if (playing) {
      audio.pause();
    } else {
      audio.play();
    }
    setPlaying(!playing);
  };
  // distortion
  // white box shadow on playing
  return (
    <ControlStyle>
      <header>{name}</header>
      <div>
        {time} / {duration}
      </div>
      <Row justifyContent='normal'>
        <PlayPause onClick={playPause} className={playing ? '' : 'pause'} />
        <Loop loop={loop} onClick={toggleLoop}>
          {loop ? 'Looping' : 'Loop'}
        </Loop>
      </Row>
      <Range>
        <div className='header'>
          <span>pan</span>
        </div>
        <Row justifyContent='space-between'>
          <div>L</div>
          <RangeInput value={pan} onChange={onPan} min='-1' max='1' step='0.01' type='range' />
          <div>R</div>
        </Row>
      </Range>
      <Range>
        <div className='header'>
          <span>vol</span>
        </div>
        <Row justifyContent='space-between'>
          <div>0</div>
          <RangeInput value={volume} onChange={onVolume} min='0' max='2' step='0.01' type='range' />
          <div>1</div>
        </Row>
      </Range>
    </ControlStyle>
  );
};

interface Props {
  ctx: AudioContext;
  sample: Sample;
}
