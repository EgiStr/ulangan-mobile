import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {globalColor, globalStyles} from '../styles/global';

export default function ListUlangan({data, navigation}) {
  const onPress = () => {
    navigation.navigate('PreUlangan',{
      data:data
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{data.title}</Text>
      </View>
      <View>
        <Text style={styles.author}>{data.owner.username}</Text>
      </View>
      <View style={styles.button}>
        <Text style={styles.tuntas}>Belum diKerjakan</Text>
        <TouchableOpacity onPress={onPress} style={styles.buttonTitle}>
          <Text style={{color:"black"}}>Mulai</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    marginHorizontal: 5,
    padding: 12,
    marginTop: 10,
    borderBottomColor: '#eaeaea',
    borderBottomWidth: 1,
  },
  title: {
    paddingHorizontal: 5,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  author: {
    paddingHorizontal: 5,
    marginLeft: 2,
  },
  tuntas: {
    paddingHorizontal: 5,
    fontSize: 12,
    fontWeight: 'bold',
    color: 'green',
  },
  button: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between',
  },
  buttonTitle: {
    justifyContent: 'center',
    backgroundColor: globalColor.activeColor,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 5,
    color: 'white',
  },
});
