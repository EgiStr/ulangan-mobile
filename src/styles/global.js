import {StyleSheet} from 'react-native';

export const globalColor = {
  background: "#29262B",
  container: '#3c3541',
  activeColor: '#E3A2EE',
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
