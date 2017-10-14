import { connect } from 'react-redux';
import { StyleSheet } from 'react-native';
import { toggleNote } from './actions.js';
import { Text, TouchableHighlight } from 'react-native';
import React from 'react';

const Note = props => (
  <TouchableHighlight
    // color={props.enabled ? styles.noteActive.backgroundColor : styles.note.backgroundColor}
    style={[styles.note, props.enabled && styles.noteActive]}
    onPress={() => props.toggleNote(props.note, props.index)}>
      <Text></Text>
    </TouchableHighlight>
);

function mapStateToProps(state, props) {
  return {};
}

const mapDispatchToProps = {
  toggleNote
};

export default connect(mapStateToProps,mapDispatchToProps)(Note);

const styles = StyleSheet.create({
  note: {
    backgroundColor: '#b2d3e6',
    borderRadius: 4,
    flex: 1,
    margin: 1,
    minHeight: 20,
    minWidth: 20,
    overflow: 'hidden'
  },
  noteActive: {
    backgroundColor: '#4390bc',
  }
});
