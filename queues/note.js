import { connect } from 'react-redux';
import { toggleNote } from './actions.js';
import { Text, TouchableHighlight } from 'react-native';
import React from 'react';
import styles from './styles';

const Note = props => (
  <TouchableHighlight
    // color={props.enabled ? styles.noteActive.backgroundColor : styles.note.backgroundColor}
    style={props.enabled ? styles.noteActive : styles.note}
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
