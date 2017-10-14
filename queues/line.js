import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import Note from './note.js';
import React from 'react';

const Line = props => {
  return (
    <View style={[styles.line, props.isRotated && styles.lineRotated]}>
      {props.queue.map((enabled, index) => <Note enabled={enabled} note={props.note} index={index} key={props.note + index} />)}
    </View>
  );
};

function mapStateToProps(state, props) {
  return {
    queue: state.queues[props.note]
  };
}

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    padding: 5,
    alignItems: 'stretch',
  },
  lineRotated: {
    flexDirection: 'column',
    height: '80%',
  },
});

export default connect(mapStateToProps)(Line);
