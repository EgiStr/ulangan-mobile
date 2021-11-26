import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function preUlangan({navigation}) {
  const onPress = () => navigation.navigate('Ulangan');
  return (
    <View>
      <Text>Persiapan Ulangan</Text>
      <TouchableOpacity onPress={onPress}>
        <Text>Comfirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
