import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axiosApiInstance from '../../services/axios/axiosApi';
import OptionComponent from '../components/OptionComponent';

export default function ulangan({navigation, route}) {
  const [cooldown, setCooldown] = useState(4);
  const [countdown, setCountdown] = useState(10);
  const [show_result, setShowResult] = useState(false);

  function timeoutPromise(ms, promise) {
    return new Promise((resolve, reject) => {
      // countdown timer for countdown
      const interval = setInterval(() => {
        setCooldown(prevState => {
          const cnt = prevState > 0 ? prevState - 1 : 0;
          if (cnt === 0) {
            clearInterval(interval);
          }
          return cnt;
        });
      }, 1000);

      if (countdown === 0) {
        promise.then(
          res => {
            clearInterval(interval);
            resolve(res);
          },
          err => {
            clearInterval(interval);
            reject(err);
          },
        );
      }
    });
  }
  async function getQuestions() {
    //   fecth using axiosAPi
    const response = await timeoutPromise(
      countdown,
      new Promise((resolve, reject) => {
        resolve('yess');
      }),
    );
    console.log(response);
  }
  useEffect(() => {
    if (!route.params.pusher || !route.params.quizChannel) {
      navigation.navigate('Home');
    }
    getQuestions();
  }, []);

  return (
    <View style={styles.container}>
      {/* overlay style view */}
      {cooldown > 0 ? (
        <View style={styles.overlay}>
          {/* countdown style view */}
          <View style={styles.countdown}>
            <Text style={styles.countdown_text}>Start {cooldown}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            {countdown > 0 && (
              <View style={styles.countdown}>
                <Text style={styles.countdown_text}>{countdown} Sec Left</Text>
              </View>
            )}
            <View style={styles.attemp_quiz}>
              <Text style={{color: 'black', fontSize: 20, marginRight: 10}}>
                1/10
              </Text>
            </View>
          </View>
          <View style={styles.quiz}>
            {/* title view */}
            <View style={styles.centered}>
              <Text style={styles.big_text}>Quiz</Text>
              <View style={styles.option_container}>
                <OptionComponent
                  opt={'A'}
                  show_result={show_result}
                  setShowResult={setShowResult}
                  is_answer={false}
                />
                <OptionComponent
                  opt={'B'}
                  is_answer={false}
                  show_result={show_result}
                  setShowResult={setShowResult}
                />
                <OptionComponent
                  opt={'C'}
                  is_answer={false}
                  setShowResult={setShowResult}
                  show_result={show_result}
                />
                <OptionComponent
                  opt={'D'}
                  is_answer={true}
                  show_result={show_result}
                  setShowResult={setShowResult}
                />
              </View>
            </View>
          </View>
          <View style={styles.footer}></View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  // style  overlay all window
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    paddingHorizontal: 10,
  },
  quiz: {
    flex: 9,
    backgroundColor: 'green',
  },

  countdown: {
    alignItems: 'flex-end',
    padding: 20,
  },
  countdown_text: {
    fontSize: 16,
    color: 'black',
  },
  centered: {
    marginTop: 30,
    flex: 1,
    alignItems: 'center',
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
  option_container: {
    flex: 1,
    marginVertical: 30,
    alignItems: 'center',
    padding: 10,
  },
  option_button: {
    backgroundColor: '#ccc',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },

  option_text: {
    fontSize: 18,
    color: '#333',
  },

  option: {
    padding: 25,
    flexDirection: 'row',
  },
  option_text: {
    fontSize: 20,
    marginRight: 10,
  },
});
