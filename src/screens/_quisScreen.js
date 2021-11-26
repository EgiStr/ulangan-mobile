import React, {Component, useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, TouchableOpacity} from 'react-native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/FontAwesome';

const option_letters = ['A', 'B', 'C', 'D'];
const base_url = ' http://127.0.0.1:8000';

export default function Quiz({route, navigation}) {
  const {pusher, myUsername, quizChannel} = route.params;
  const [data, setData] = useState({
    display_question: false,
    countdown: 10,
    show_result: false,
    selected_option: null,
    disable_options: true,
    total_score: 0,

    index: 1,

    display_top_users: false,
  });
  useEffect(() => {
    quizChannel.bind('question-given', data => {
        console.log(data)
        const interval = setInterval(() => {
        setData(prevState => {
          const cnt = prevState.countdown > 0 ? prevState.countdown - 1 : 0;
          if (cnt == 0) {
            clearInterval(interval);
          }

          return {
            countdown: cnt,
          };
        });
      }, 1000);
    });
  }, []);
  return <View><Text>{data&&data.countdown}</Text></View>;
}
const styles = {
  container: {
    flex: 1,
    padding: 10,
  },
  countdown: {
    alignItems: 'flex-end',
    padding: 20,
  },
  countdown_text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quiz: {
    flex: 1,
    justifyContent: 'center',
  },
  big_text: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  sub_text: {
    fontSize: 18,
  },
  list_container: {
    marginTop: 30,
  },
  option: {
    padding: 25,
    flexDirection: 'row',
  },
  option_text: {
    fontSize: 20,
    marginRight: 10,
  },
  top_users: {
    alignItems: 'center',
  },
};
