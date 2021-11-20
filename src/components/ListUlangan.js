import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ListUlangan({data}) {
  const onPress = () => {};
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Judul 50 Halaman</Text>
      </View>
      <View>
        <Text style={styles.author}>eggi satria</Text>
      </View>
      <View style={styles.button}>
        <Text>Belum diKerjakan</Text>
        <TouchableOpacity onPress={onPress} style={styles.buttonTitle}>
          <Text>Mulai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 1,
    marginTop: 4,
  },
  title: {
    paddingHorizontal: 2,
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  author: {
    marginLeft: 2,
  },
  button: {
    flexDirection: 'row',
    marginTop: 5,
  },
  buttonTitle: {
    justifyContent: 'center',
    backgroundColor: 'aqua',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
