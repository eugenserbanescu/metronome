import { StyleSheet } from 'react-native';

const bar = {

  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'space-between',
};

const line = {
  flexDirection: 'row',
  padding: 5,
  alignItems: 'stretch',
};

const note = {
  backgroundColor: '#b2d3e6',
  borderRadius: 4,
  flex: 1,
  margin: 1,
  minHeight: 20,
  minWidth: 20,
  overflow: 'hidden'
}

const styles = StyleSheet.create({
  barContainer: {
    backgroundColor: '#ffffff',
    padding: 20,
  },
  rotateButton: {
    backgroundColor: '#cccccc',
    borderRadius: 5,
    width: 200
  },
  rotateButtonText: {
    color: '#ffffff',
    fontSize: 24,
    textAlign: 'center'
  },
  bar: bar,
  barRotated: {
    ...bar,
    flexDirection: 'row',
    height: '90%',
  },
  line: line,
  lineRotated: {
    ...line,
    flexDirection: 'column',
    height: '80%',
  },
  note: note,
  noteActive: {
    ...note,
    backgroundColor: '#4390bc',
  }
});

export default styles;
