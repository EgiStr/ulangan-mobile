import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const OptionComponent = ({opt, is_answer, show_result, setShowResult}) => {
  const random_color = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  const [isSelected, setIsSelected] = React.useState(false);
  let background;
  if (!show_result) {
    background = random_color();
  } else {
    background = is_answer && show_result ? 'green' : 'red';
  }
  return (
    <TouchableOpacity
      disabled={show_result}
      onPress={() => {
        setIsSelected(true);
        setShowResult(true);
      }}
      style={{...styles.option_button, backgroundColor: background}}>
      <View style={styles.option}>
        <Text style={styles.option_text}>{opt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default OptionComponent;

const styles = StyleSheet.create({
  option_button: {
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
