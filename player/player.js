import { playNote, stopNote } from './note-player';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import notes from './notes.js';


function getRelativeIndex(note, noteIndex) {
  const diff = 16 / note;
  return noteIndex * diff;
}

class Player extends Component {
  getNextNotes(newQueues) {
    let queues = newQueues || this.props.queues;
    let finalQueue = new Array(16);

    Object.keys(queues).forEach(note => {
      const queue = queues[note];
      queue.forEach((shouldPlay, index) => {
        if (shouldPlay) {
          const relativeIndex = getRelativeIndex(note, index);
          if(!finalQueue[relativeIndex]) {
            finalQueue[relativeIndex] = {
              frequency: notes[note].frequency,
              start: notes[note].duration * index
            }
          }
        }
      });
    });

    return finalQueue.filter(n => n);
  }

  updateDurations(bpm) {
    Object.keys(notes).forEach(key => {
      notes[key].duration = notes[key].getDuration(bpm);
    });
  }

  componentWillMount() {
    this.updateDurations(this.props.bpm);
    this.noteQueue = this.getNextNotes();
  }

  componentWillReceiveProps(nextProps) {
    console.log('nextProps', nextProps);
    if(nextProps.bpm !== this.props.bpm) {
      this.updateDurations(nextProps.bpm);
      this.noteQueue = this.getNextNotes(nextProps.queues);
      this.currentLoop = this.prepareNextQueue(this.beatStart);
    }
    if(this.props.queues !== nextProps.queues) {
      this.noteQueue = this.getNextNotes(nextProps.queues);
      if(this.props.isPlaying && nextProps.isPlaying) {
        this.currentLoop = this.prepareNextQueue(this.beatStart);
      }
    }

    if(nextProps.isPlaying) {
      this.reset();
      requestAnimationFrame(this.playLoop.bind(this));
    } else {
      stopNote();
    }
  }

  reset() {
    this.notePlaying = false;
    this.currentLoop = null;
    this.beatStart = null;
    this.beatEnd = null;
    stopNote();
  }

  prepareNextQueue(beatStart) {
    return this.noteQueue.map(note => {
      return {
        ...note,
        start: note.start + beatStart
      };
    });
  }

  playLoop() {
    const { isPlaying } = this.props
    const currentTick = Date.now();
    if(!this.beatStart) {
      this.beatStart = currentTick;
      this.beatEnd = currentTick + notes[1].duration;
      this.currentLoop = this.prepareNextQueue(this.beatStart);
    }
    if(this.beatEnd <= currentTick) {
      this.beatStart = currentTick;
      this.beatEnd = currentTick + notes[1].duration;
      this.currentLoop = this.prepareNextQueue(currentTick);
    }

    if(this.currentLoop.length) {
      if(!this.notePlaying && this.currentLoop[0].start <= currentTick) {
        this.notePlaying = true;
        playNote(this.currentLoop[0].frequency);
      }

      if(this.notePlaying && this.currentLoop[0].start + 40 <= currentTick) {
        this.notePlaying = false;
        stopNote();
        this.currentLoop.splice(0,1);
      }
    }

    if (isPlaying) {
      requestAnimationFrame(this.playLoop.bind(this));
    }
  }

  render() {return null;}
}

function mapStateToProps(state, props) {
  return {
    bpm: state.audio.bpm,
    isPlaying: state.audio.isPlaying,
    queues: state.queues
  };
}

export default connect(mapStateToProps)(Player);
