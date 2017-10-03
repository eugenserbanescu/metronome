import { connect } from 'react-redux';
import { View } from 'react-native';
import styles from './styles';
import Note from './note.js';
import React from 'react';

const Line = props => {
  return (
    <View style={styles.line}>
      {props.queue.map((enabled, index) => <Note enabled={enabled} note={props.note} index={index} key={props.note + index} />)}
    </View>
  );
};

function mapStateToProps(state, props) {
  return {
    queue: state.queues[props.note]
  };
}

export default connect(mapStateToProps)(Line);
