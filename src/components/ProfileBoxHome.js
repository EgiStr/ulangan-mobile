import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {globalStyles} from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
const ProfileBoxHome = ({user}) => {
  return (
    <View style={styles.container}>
      <View style={styles.join}>
        {/* button inside TextInput View  */}
        <TextInput
          style={styles.joinInput}
          placeholder="Enter Code Quizz"
          placeholderTextColor="#fff"
          inlineImageLeft="Join"
        />
        <TouchableOpacity>
          <Text style={styles.joinText}>Join</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.searchView}>
        <TextInput style={styles.searchInput} placeholder="Search" />
        <Ionicons name="ios-search" size={30} color="white" />
      </View>
    </View>
  );
};

export default ProfileBoxHome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  join: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 20,
    width: 200,
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    color: 'white',
  },
  joinText: {
    fontSize: 18,
    color: 'white',
    marginRight: 12,
  },
  joinButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },

  joinInput: {
    width: "75%",
    height: 40,
  },

  searchView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  searchText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  searchInput: {
    color: 'black',
    width: '90%',
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
});
