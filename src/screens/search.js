import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function search() {
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
      setData(response.data.ListUlangan);
      setHasMore(response.data.hasNextPage);
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
      setPage(page + 1);
      setLoading(false);
      setHasMore(response.data.hasNextPage);
    } catch (error) {
      setError(error);
    }
  };
  const handleRefresh = async () => {
    setRefreshing(true);
    try {
      const response = await axiosApiInstance.get(`ulangan?page=${page}`);
      setData(response.data);
      setRefreshing(false);
    } catch (error) {
      setError(error);
    }
  };
  return (
    <ScrollView
      style={globalStyles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
          colors={[globalColor.primary]}
        />
      }>
      <View style={styles.profile}>
        <View style={{padding: 10}}>
          <Text style={styles.titleProfile}>Hey, {user && user.username}</Text>
          <Text style={styles.titleProfile}>Selamat Datang</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Ulangan</Text>
        {data &&
          data.map((item, i) => {
            return <ListUlangan key={i} data={item} navigation={navigation} />;
          })}
        {loading && <Text>Loading...</Text>}
        {error && <Text>{error.message}</Text>}
        {hasMore && !loading && (
          <View style={styles.loadMore}>
            <Text onPress={handleLoadMore}>Load More</Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
