import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { notesList } from '../player/notes';
import Line from './line';
import styles from './styles';

class Bar extends Component {
  state = {
    isRotated: false
  }

  render() {
    const list = this.state.isRotated ? notesList.slice(0).reverse() : notesList;
    return (
      <View style={this.state.isRotated ? styles.barRotated : styles.bar}>
        {list.map(note => <Line isRotated={this.state.isRotated} key={`line-${note}`} note={note} />)}
      </View>
    )
  }
}

export default Bar;
