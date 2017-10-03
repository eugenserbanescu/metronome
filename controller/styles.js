import {
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  bpmWrapper: {
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#ff4500',
    borderRadius: 15,
    justifyContent: 'center',
    overflow: 'hidden',
    padding: 0,
    height: 30,
    width: 30
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 30,
  },
  controller: {
    backgroundColor: '#ffffff',
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20
  }
});

export default styles;


// ,
// input: {
//   border: 0,
//   borderBottom: '1px solid #3d3d3d',
//   color: '#3d3d3d',
//   height: '30px',
//   fontSize: '20px',
//   lineHeight: '30px',
//   margin: '0, 5px',
//   textAlign: 'center'
// }
