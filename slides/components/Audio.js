import React, { useEffect } from 'react';
import bass from '../assets/bass.wav';

export function AudioTag() {
  return (
    <article>
      <audio controls src={bass} />
    </article>
  );
}

export function AudioEvent() {
  const play = e => {
    const audio = document.querySelector('audio');
    audio.play();
  };

  useEffect(() => {
    const button = document.querySelector('button');
    button.addEventListener('click', play);
    return () => button.removeEventListener('click', play);
  }, []);

  return (
    <section>
      <article>
        <button
          style={{
            background: 'palevioletred',
            border: `none`,
            fontSize: '2rem',
            padding: '1rem 2rem',
            width: `100%`
          }}
        >
          Play
        </button>
      </article>
      <article>
        <audio controls src={bass} />
      </article>
    </section>
  );
}
