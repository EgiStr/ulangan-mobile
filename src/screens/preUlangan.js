import React from 'react';
import {Share, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalColor} from '../styles/global';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Pusher from 'pusher-js/react-native';
import generateUUID from '../helpers/uuid';

const baseURL = 'https://98a5-114-142-173-5.ngrok.io/api/v1/';

const pusher_app_key = 'ed208f4daf54b4f9b8fd';
const pusher_app_cluster = 'ap1';

export default function preUlangan({navigation, route}) {
  const data = route.params.data;

  const enterQuizSolo = async () => {
    const uuid = generateUUID();
    const pusher = new Pusher(pusher_app_key, {
      authEndpoint: `${baseURL}/pusher/auth`,
      cluster: pusher_app_cluster,
      encrypted: true,
    });

    const quizChannel = pusher.subscribe(`quiz-channel-private-${uuid}`);
    quizChannel.bind('pusher:subscription_error', status => {
      console.log(status);
      Alert.alert(
        'Error',
        'Subscription error occurred. Please restart the app',
      );
    });

    quizChannel.bind('pusher:subscription_succeeded', () => {
      navigation.navigate('Ulangan', {
        pusher,
        quizChannel,
        id: data._id,
      });
    });
  };
  const enterQuizMultiplayer = async () => {
    const uuid = generateUUID();
    const pusher = new Pusher(pusher_app_key, {
      authEndpoint: `${baseURL}/pusher/auth`,
      cluster: pusher_app_cluster,
      encrypted: true,
    });
    const quizChannel = pusher.subscribe(`quiz-channel-public-${uuid}`);
    quizChannel.bind('pusher:subscription_error', status => {
      console.log(status);
      Alert.alert(
        'Error',
        'Subscription error occurred. Please restart the app',
      );
    });
    quizChannel.bind('pusher:subscription_succeeded', () => {
      navigation.navigate('UlanganMultiplayer', {
        pusher,
        quizChannel,
        id: data._id,
      });
    });
  };
  // function to Share the post to other apps
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "hey, I'm challenging you to do this quiz, check it out! " +
          data.title,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.containerContent}>
      {/* section Action */}
      <View style={styles.containerAction}>
        <TouchableOpacity onPress={enterQuizSolo} style={styles.buttonAction}>
          <Text style={styles.buttonActionText}>
            <Ionicons
              name="ios-arrow-back"
              size={16}
              color="black"
              style={{alignSelf: 'center', justifyContent: 'center'}}
            />
            Start
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={enterQuizMultiplayer}
          style={styles.buttonAction}>
          <Text style={styles.buttonActionText}>
            <Ionicons
              name="ios-share"
              size={16}
              color="black"
              style={{alignSelf: 'center', justifyContent: 'center'}}
            />
            Tantang Teman
          </Text>
        </TouchableOpacity>
      </View>
      {/* section detail  */}
      <View style={styles.containerDetail}>
        <View style={styles.containerDetailTitle}>
          <Text style={styles.titleDetail}>{data.title}</Text>
          <Text style={styles.authorDetail}>
            by{' '}
            {
              <Text style={{color: 'black', fontSize: 20}}>
                {data.owner.username}
              </Text>
            }
          </Text>
          <TouchableOpacity style={styles.buttonShare} onPress={onShare}>
            <Text style={styles.buttonShareText}>
              <Ionicons
                name="share-social"
                size={16}
                color="black"
                style={{alignSelf: 'center', justifyContent: 'center'}}
              />
              Share
            </Text>
          </TouchableOpacity>
          {/* share button to devices */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // title text
  title: {
    fontSize: 20,
    margin: 10,
    fontWeight: 'bold',
    color: 'black',
    justifyContent: 'center',
    textAlign: 'center',
  },
  containerContent: {
    flex: 1,
    padding: 10,
    backgroundColor: globalColor.background,
    justifyContent: 'center',
  },
  // card bootsrap
  // detail section
  containerDetail: {
    flex: 1,
  },
  containerDetailTitle: {
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
  },
  titleDetail: {
    fontSize: 26,
    color: 'black',
    fontWeight: 'bold',
    marginHorizontal: 10,
  },
  authorDetail: {
    marginLeft: 2,
  },
  // share button
  containerShare: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonShare: {
    backgroundColor: 'aqua',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonShareText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // action section
  containerAction: {
    marginVertical: 20,
  },
  buttonAction: {
    marginTop: 10,
    backgroundColor: 'aqua',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 5,
    width: '80%',
    alignSelf: 'center',
  },
  buttonActionText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
