import React from 'react';
import { AppStyle } from '../styles';
import { samples } from '../data/samples';
import { ctx } from '../audio/';
import { Control } from './Control';

const App: React.FC = () => {
  return (
    <AppStyle>
      <header className='App-header'>
        <h2>?</h2>
      </header>
      <section className='controls'>
        {samples.map((sample, i) => (
          <Control key={i} sample={sample} ctx={ctx} />
        ))}
      </section>
    </AppStyle>
  );
};

export default App;
