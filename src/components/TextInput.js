import React from 'react'
import { View, StyleSheet, Text ,TextInput as Input} from 'react-native'
import { globalColor } from '../styles/global'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
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
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
  },
  input: {
    backgroundColor: globalColor.background,
  },
  description: {
    fontSize: 13,
    color: globalColor.container,
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: globalColor.clickColor,
    paddingTop: 8,
  },
})