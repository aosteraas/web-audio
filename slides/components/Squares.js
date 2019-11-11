import React from 'react';

export function Squares() {
  return (
    <>
      <Solid />
      <Bordered />
    </>
  );
}

const squareStyles = {
  position: 'fixed',
  padding: `2vh`,
  backgroundColor: 'tomato'
};
const positions = [
  { top: 0, left: 0 },
  { top: 0, right: 0 },
  { bottom: 0, left: 0 },
  { bottom: 0, right: 0 }
];

function Solid() {
  return (
    <>
      {positions.map((p, i) => (
        <div key={i} style={{ ...squareStyles, ...p }} />
      ))}
    </>
  );
}

const borderStyles = {
  border: `2px solid tomato`,
  padding: `3vh`,
  position: 'fixed'
};

const borderPositions = [
  { top: 0, left: `2vh` },
  { top: `2vh`, left: 0 },
  { top: 0, right: `2vh` },
  { top: `2vh`, right: 0 },
  { bottom: 0, left: `2vh` },
  { bottom: `2vh`, left: 0 },
  { bottom: 0, right: `2vh` },
  { bottom: `2vh`, right: 0 }
];

function Bordered() {
  return (
    <>
      {borderPositions.map((p, i) => (
        <div key={i} style={{ ...borderStyles, ...p }} />
      ))}
    </>
  );
}
