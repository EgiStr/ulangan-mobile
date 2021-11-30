import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';
import axiosApiInstance from '../../services/axios/axiosApi';
import ListUlangan from '../components/ListUlangan';
import {getUser} from '../helpers/setCredentials';
import {globalColor, globalStyles} from '../styles/global';

const home = ({navigation}) => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  async function getUserAsync() {
    setUser(await getUser());
  }
  // infinite scroll for list ulangan when user scroll to bottom of screen
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setRefreshing(true);
    setLoading(true);
    try {
      const response = await axiosApiInstance.get(`ulangan?page=${page}`);
      setData(response.data.ulangan);
      setHasMore(response.data.HasNextPage);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  useEffect(() => {
    getUserAsync();
  }, []);
  useEffect(() => {
    fetchData();
  }, [page]);

  const handleLoadMore = async () => {
    console.log(loading);
    console.log(hasMore);
    if (loading) return;

    if (!hasMore) return;
    setLoading(true);

    try {
      const response = await axiosApiInstance.get(`ulangan?page=${page + 1}`);
      setData([...data, ...response.data.ulangan]);
      setPage(page + 1);
      setLoading(false);
      setHasMore(response.data.hasNextPage);
    } catch (error) {
      setError(error);
    }
  };
  const handleRefresh = async () => {
    setPage(1);
    setLoading(true);
    setRefreshing(true);
    try {
      const response = await axiosApiInstance.get(`ulangan?page=${page}`);
      setData(response.data.ulangan);
      setHasMore(response.data.hasNextPage);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  return (
    // scrollView is used to make infinite scroll
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
      }
      onScroll={({nativeEvent}) => {
        if (
          nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
          nativeEvent.contentSize.height
        ) {
          handleLoadMore();
        }
      }}
      style={styles.container}>
      <View style={styles.profileBox}>
        <View style={{padding: 10}}>
          <Text style={styles.titleProfile}>Hey, {user && user.username}</Text>
          <Text style={styles.titleProfile}>Selamat Datang</Text>
        </View>
      </View>

      {data && data.length > 0 ? (
        <>
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
            {data.map((item, i) => (
              <ListUlangan key={i} data={item} navigation={navigation} />
            ))}
          </View>
        </>
      ) : (
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
            Belum ada ulangan
          </Text>
        </View>
      )}
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
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // style for make profile box with avatar
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileBox: {
    backgroundColor: '#fff',
    margin: 5,
    borderRadius: 5,
    ...globalStyles.shadow,
  },
});
