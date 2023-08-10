import {  StyleSheet,  Text,  View,  TextInput,  TouchableOpacity,  Alert,} from 'react-native';
import React, {useState} from 'react';





const Register = props => {
  const [name, setStateName] = useState('');
  const [email, setStateE] = useState('');
  const [password, setStateP] = useState('');
  const [passwordCon, setStatePC] = useState('');
  

  const saveData = () => {
    console.log('here bit');
    console.log(email + '   ' + password + '   ' + name );
  };

  const onPressSignUp = async () => {
    if (!email || !password || !name ) {
      Alert.alert('Empty Field!!!', 'Please fill all Information', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    } else if(password!==passwordCon){Alert.alert('Password and Confirm password do not match!', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);}
    else if (!CheckEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter correct Email Id', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    } else if (isNaN(number) || number.length !== 10) {
      Alert.alert('Invalid Number', 'Please enter correct Number', [
        {
          text: 'Ok',
          style: 'cancel',
        },
      ]);
    } else {
      console.log(
        email + '   ' + password + '   ' + name 
      );
      saveData();
    }
  };
  const CheckEmail = e => {
    const expression =
      /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    console.log('hii' + expression.test(String(e).toLowerCase()));
    return expression.test(String(e).toLowerCase());
  };

  const onPressForgotPassword = () => {
    console.log('Try and remember it please');
  };
  



  return (
    <View style={styles.container}>
      <Text style={styles.title}> Registration Screen</Text>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          placeholder="Enter Your Name"
          onChangeText={text => setStateName(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholderTextColor="#003f5c"
          placeholder="Enter Your Email ID"
          onChangeText={text => setStateE(text)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholderTextColor="#003f5c"
          placeholder="Enter Your Password"
          onChangeText={text1 => setStateP(text1)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          secureTextEntry
          placeholderTextColor="#003f5c"
          placeholder="Confirm Password"
          onChangeText={text1 => setStatePC(text1)            }
    
        />
      </View>


      <TouchableOpacity onPress={onPressForgotPassword}>
        <Text style={[styles.loginText,{color:"#283B51"}]}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onPressSignUp} style={styles.loginBtn}>
        <Text style={styles.loginText}>Sign Up </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          props.navigation.navigate('Login');
        }}
        style={styles.LoginAcc}>
        <Text style={[styles.loginText,{color:"#283B51"}]}>Already Have Account?? Login</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFF1FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    marginBottom: 40,
    textAlign: 'center',
  },
  inputView: {
    width: '75%',
    backgroundColor: 'white',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: '#283B51',
  },
  forgotAndSignUpText: {
    color: 'white',
    fontSize: 15,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#283B51',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
    fontSize: 18,
  },
  LoginAcc: {marginTop: 10, color: 'white', fontSize: 15},
});
