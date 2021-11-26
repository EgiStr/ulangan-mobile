import React,{useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import ListUlangan from '../components/ListUlangan';
import {globalColor, globalStyles} from '../styles/global';

const home = ({navigation}) => {
  const [data, setData] = useState([
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
  ]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={{padding: 10}}>
            <Text style={styles.titleProfile}>Hey, Eggi Satria</Text>
            <Text>Selamat Datang</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            marginTop: 5,
            padding: 5,
            borderRadius: 5,
          }}>
          <Text
            style={{
              marginTop: 5,
              fontSize: 25,
              color: 'black',
              justifyContent: 'center',
              textAlign: 'center',
            }}>
            List Ulangan
          </Text>
          {data.map((item, i) => {
            return <ListUlangan key={i} data={item} navigation={navigation} />;
          })}
        </View>
      </View>
    </ScrollView>
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: globalColor.background,
  },
  profile: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    ...globalStyles.shadow,
  },
  titleProfile: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
