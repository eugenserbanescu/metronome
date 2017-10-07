import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  bar: {
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    paddingTop: 20,
    paddingBottom: 20
  },
  line: {
    flexDirection: 'row',
    padding: 5,
  },
  note: {
    backgroundColor: '#cccccc',
    borderRadius: 4,
    flex: 1,
    height: 30,
    overflow: 'hidden'
  },
  noteActive: {
    backgroundColor: '#ff4500',
    borderRadius: 4,
    flex: 1,
    height: 30,
    overflow: 'hidden'
  }
});

export default styles;
