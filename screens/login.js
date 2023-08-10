import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, {useEffect, useState} from 'react';
   import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const Login = props => {

    const onPressLogin = () => {
      console.log(username + password);
      if (!username || !password) {
        console.log('wrong' + username + password);
        Alert.alert(
          'Invalid Information',
          'Please enter correct username and password',
          [
            {
              text: 'Ok',
              style: 'cancel',
            },
          ],
        );
      } else {
        loginredirec(username,password);
      }
    };

    
  
    const loginredirec = async (username1, password1) => {
        username1="billy"
        password1="Winjit@123"
        console.log(username1 +"  "+password1)
        fetch('https://api.dev.opalinkapp.com/auth/api/v1/login/user',{
            method: "POST",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({"username":username1,"password":password1,"captcha_token": "token"}),

        }).then((response)=> response.json( ))
        .then(async (result)=>{
            if(result.status === "success") {
                console.log("                           "  +result.data.access_token)

                await AsyncStorage.clear()
                await AsyncStorage.setItem("OfficialSessionTokenStudentManagment",result.data.access_token)
                alert("You are logged in.");
                props.navigation.navigate('GetAllStudents',result={result})
            
               } else {
                console.log(result)
                   alert("Please check your login information.");}
        })


      
    };
  
    const [username, setStateU] = useState(null);
    const [password, setStateP] = useState(null);
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Login Screen</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="username"
            placeholderTextColor="#003f5c"
            onChangeText={text => setStateU(text)}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            /* secureTextEntry */
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={text1 => setStateP(text1)}
          />
        </View>
  
        <TouchableOpacity onPress={onPressLogin} style={styles.loginBtn}>
          <Text style={styles.loginText}>Login </Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => props.navigation.navigate('Register')}>
          <Text style={styles.forgotAndSignUpText}>
            Don't have a account?? Register
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  export default Login;
  
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
      color: 'black',
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
  });
  