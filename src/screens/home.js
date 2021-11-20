import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListUlangan from '../components/ListUlangan';

const home = ({navigation}) => {
  const data = [
    {name: 'mtk 50 soal'},
    {name: 'bindo 50 soal'},
    {name: 'fisika 50 soal'},
    {name: 'bio 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
    {name: 'sbk 50 soal'},
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item, i) => {
          return <ListUlangan key={i} />;
        })}
      </ScrollView>
    </View>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    marginTop: 10,
  },
});
