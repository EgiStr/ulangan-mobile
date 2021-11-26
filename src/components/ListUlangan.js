import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {globalStyles} from '../styles/global';

export default function ListUlangan({data, navigation}) {
  const onPress = () => {
    navigation.navigate('PreUlangan');
  };
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
    backgroundColor: '#fff',
    marginHorizontal: 5,
    padding: 12,
    marginTop: 10,
    ...globalStyles.shadow,
  },
  title: {
    paddingHorizontal: 4,
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
    justifyContent: 'space-between',
  },
  buttonTitle: {
    justifyContent: 'center',
    backgroundColor: 'aqua',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
