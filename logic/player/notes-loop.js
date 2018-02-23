import {playNote, stopNote} from './note-player';

let isPlaying = false;
let animationFrame = null;
const queue = [];

function loop() {
  if (isPlaying) {
    animationFrame = requestAnimationFrame(loop);
  }
}

export function startPlaying() {
  isPlaying = true;
  animationFrame = requestAnimationFrame(loop);
}

export function stopPlaying() {
  stopNote();
  isPlaying = false;
  cancelAnimationFrame(animationFrame);
}

export function setQueue(newQueue) {
  queue = newQueue;
}
