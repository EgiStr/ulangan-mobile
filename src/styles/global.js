import {StyleSheet} from 'react-native';

export const globalColor = {
  background: '#d3e3e2',
  container: '#fff',
  activeColor: '#7bc5c1',
  clickColor: 'eab875',
  text:"black"
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#1f2224',
  },
  shadow:{
    shadowColor:"black",
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 4,
  }
});
