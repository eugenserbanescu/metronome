const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
let oscillator;
let gainNode;

export function playNote(frequency) {
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  oscillator.frequency.value = frequency;
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);
  oscillator.type = 'sine';
  gainNode.gain.value = 0.9;
  oscillator.start(0);
}

export function stopNote() {
  if(oscillator) {
    oscillator.stop();
    oscillator.disconnect();
  }
  if(gainNode) {
    gainNode.disconnect();
  }
}
