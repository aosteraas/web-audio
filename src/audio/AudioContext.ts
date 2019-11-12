// polyfill for Safari
if (!window.AudioContext && window.webkitAudioContext) {
  const oldFunc = webkitAudioContext.prototype.decodeAudioData;
  webkitAudioContext.prototype.decodeAudioData = function(arraybuffer: ArrayBuffer) {
    return new Promise((resolve, reject) => {
      oldFunc.call(this, arraybuffer, resolve, reject);
    });
  };
}

const getAudioContext = () => {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
  } catch {
    alert('Web Audio API is not supported');
  }
};
const ctx = getAudioContext()!;

export { ctx };
