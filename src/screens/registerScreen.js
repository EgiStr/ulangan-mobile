import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import TextInput from '../components/TextInput';
import emailValidator from '../helpers/emailValidator';
import passwordValidator, {ComparePassword} from '../helpers/passwordValidator';
import nameValidator from '../helpers/usernameValidation';

export default function RegisterScreen({navigation}) {
  const [username, setUsername] = useState({value: '', error: ''});
  const [email, setEmail] = useState({value: '', error: ''});
  const [password, setPassword] = useState({value: '', error: ''});
  const [password2, setPassword2] = useState({value: '', error: ''});

  const onRegisterPressed = () => {
    const emailError = emailValidator(email.value);
    const usernameError = nameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    const password2Error = ComparePassword(password.value, password2.value);
    if (emailError || passwordError || usernameError || password2Error) {
      setEmail({...email, error: emailError});
      setUsername({...username, error: usernameError});
      setPassword2({...password2, error: password2Error});
      setPassword({...password, error: passwordError});
      return;
    }
  };

  return (
    <>
      <TextInput
        label="Username"
        returnKeyType="next"
        value={username.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!username.error}
        errorText={username.error}
        autoCapitalize="none"
      />
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({value: text, error: ''})}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />
      <TextInput
        label="Password"
        returnKeyType="next"
        value={password.value}
        onChangeText={text => setPassword({value: text, error: ''})}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <TextInput
        label="Password Comfirm"
        returnKeyType="done"
        value={password2.value}
        onChangeText={text => setPassword2({value: text, error: ''})}
        error={!!password2.error}
        errorText={password2.error}
        secureTextEntry
      />
      <Button mode="contained" onPress={onRegisterPressed}>
        Register
      </Button>
      <View style={styles.row}>
        <Text>have an account? </Text>
        <TouchableOpacity onPress={() => navigation.replace('login')}>
          <Text style={styles.link}>SignIn</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
});
