import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import { notesList } from '../player/notes';
import Line from './line';
import styles from './styles';

class Bar extends Component {
  state = {
    isRotated: true
  }

  rotate = () => {
    this.setState({
      isRotated: !this.state.isRotated
    });
  }

  render() {
    const list = this.state.isRotated ? notesList.slice(0).reverse() : notesList;
    return (
      <View style={styles.barContainer}>
        <TouchableHighlight style={styles.rotateButton} onPress={this.rotate}>
          <Text style={styles.rotateButtonText}>Rotate queues!</Text>
        </TouchableHighlight>
        <View style={this.state.isRotated ? styles.barRotated : styles.bar}>
          {list.map(note => <Line isRotated={this.state.isRotated} key={`line-${note}`} note={note} />)}
        </View>
      </View>
    )
  }
}

export default Bar;
