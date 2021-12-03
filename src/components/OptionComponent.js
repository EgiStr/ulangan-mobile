import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import axiosApiInstance from '../../services/axios/axiosApi';

const random_color = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const OptionComponent = ({
  data,
  show_result,
  setShowResult,
  question_id,
  setCurrentQuestion,
  current_question,
  setScore,
  countdown,
  total_questions,
  total_time
}) => {
  const {_id, correct, content} = data;
  const [color, setColor] = React.useState(random_color());

  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(() => {
    if (!show_result) {
      setColor(random_color());
    } else {
      setColor(correct && show_result ? 'green' : 'red');
    }
    if (current_question) {
      setIsSelected(false);
    }
  }, [show_result, current_question]);

  const onPress = () => {
    setIsSelected(true);
    setShowResult(true);
    setCurrentQuestion(false);
    correct && setScore(score => Math.ceil(score + ((countdown / total_time) * 100 * total_questions)));
    const data = {
      question_id: question_id.toString(),
      answers: _id.toString(),
    };

    axiosApiInstance
      .post('/ulangan/placeanswer/', data)
      .then(res => {
        console.log(res.data);
        alert('success');
      })
      .catch(err => {
        alert(err);
        console.log(err);
      });
  };
  return (
    <TouchableOpacity
      disabled={show_result}
      onPress={onPress}
      style={{
        ...styles.option_button,
        backgroundColor: color,
        // when the option is selected, the button should be bigger
        ...(isSelected && styles.selected_option_button),
      }}>
      <Text
        style={{
          ...styles.option_text,
          color: isSelected ? 'white' : 'black',
          // when the option is selected, the text should be bigger
          ...(isSelected && styles.selected_option_text),
        }}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  option_button: {
    marginVertical: 5,
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  option_text: {
    fontSize: 18,
    color: 'white',
  },

  option: {
    padding: 25,
    flexDirection: 'row',
  },
  option_text: {
    fontSize: 20,
    marginRight: 10,
  },
  selected_option_button: {
    padding: 15,
    margin: 10,
    borderRadius: 10,
    width: '100%',
  },
  selected_option_text: {
    fontSize: 25,
    color: 'white',
  },
});
