import { bass, drums, guitar, synth } from '../audio/';
import { Sample } from '../types';

export const samples: Sample[] = [
  { name: `Drums`, audio: new Audio(drums) },
  { name: `Bass`, audio: new Audio(bass) },
  { name: `Guitar`, audio: new Audio(guitar) },
  { name: `Synth`, audio: new Audio(synth) }
];
