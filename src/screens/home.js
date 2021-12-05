import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import axiosApiInstance from '../../services/axios/axiosApi';
import ListUlangan from '../components/ListUlangan';
import ProfileBoxHome from '../components/ProfileBoxHome';
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
  // useRef for flatlist
  const flatListRef = React.useRef(null);

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
    fetchData();
  }, []);
  const handleLoadMore = async () => {
    if (loading) return;
    if (!hasMore) return;
    setLoading(true);

    try {
      const response = await axiosApiInstance.get(`ulangan?page=${page + 1}`);
      setData([...data, ...response.data.ulangan]);
      setPage(prev => prev + 1);
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
      const response = await axiosApiInstance.get(`ulangan?page=${1}`);
      setData(response.data.ulangan);
      setHasMore(response.data.hasNextPage);
      setRefreshing(false);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  // function when press header go to top of screen
  const handleScrollToTop = async () => {
    try {
      if (flatListRef.current) {
        flatListRef.current.scrollToOffset({offset: 0, animated: true});
        await handleRefresh()
      }
    } catch (error) {
      setError(error);
    }
  };

  return data && data.length > 0 ? (
    // header view when click go to top of screen
    <View
      style={{
        backgroundColor: globalColor.background,
      }}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ListUlangan navigation={navigation} data={item} />
        )}
        ref={flatListRef}
        keyExtractor={item => item._id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={() => <ProfileBoxHome user={user} />}
        ListFooterComponent={
          loading && hasMore ? (
            <ActivityIndicator size={18} color={'blue'} />
          ) : null
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={handleRefresh}
            colors={['#6f42c1']}
          />
        }
      />
    </View>
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
  );
};

export default home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: globalColor.background,
  },
});
