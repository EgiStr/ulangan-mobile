import {StyleSheet} from 'react-native';

export const globalColor = {
  background: "rgba(54,58,102,0.8)",
  container: '#3b82f6',
  activeColor: '#FFB8BF',
  clickColor: '#3b82f6',
  buttonA:"#982AA8",
  buttonB:"#BC344C",
  text: '#fff',

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
