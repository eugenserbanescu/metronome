import { StyleSheet } from 'react-native';

const bar = {
  backgroundColor: '#ffffff',
  flexDirection: 'column',
  padding: 20,
  alignItems: 'stretch',
  justifyContent: 'space-between',
};

const line = {
  flexDirection: 'row',
  padding: 5,
  alignItems: 'stretch',
};

const note = {
  backgroundColor: '#cccccc',
  borderRadius: 4,
  flex: 1,
  minHeight: 20,
  minWidth: 20,
  overflow: 'hidden'
}

const styles = StyleSheet.create({
  bar: bar,
  barRotated: {
    ...bar,
    flexDirection: 'row',
    height: '100%',
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
    backgroundColor: '#ff4500',
  }
});

export default styles;
