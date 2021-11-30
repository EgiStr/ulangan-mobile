import React from 'react';
import {View, StyleSheet, Text, TextInput as Input} from 'react-native';
import { color } from 'react-native-reanimated';
import {globalColor} from '../styles/global';

export default function TextInput({errorText, description, label,...props}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Input
        style={styles.input}
        selectionColor={globalColor.activeColor}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    paddingHorizontal:10
    
  },
  text:{
    fontSize:16,
    fontWeight:'bold',
    color:globalColor.activeColor
  },
  input: {
    backgroundColor: globalColor.container,
    color:"black",
    padding:10,
  },
  description: {
    fontSize: 13,
    color: globalColor.activeColor,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: globalColor.clickColor,
    paddingTop: 8,
  },
});
