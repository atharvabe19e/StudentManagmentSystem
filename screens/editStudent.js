import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from 'react-native';
  import React, {useState} from 'react';
  
  const EditStudent = props => {
    const [fname, setStateFName] = useState('');
    const [lname, setStateLName] = useState('');
    const [dob, setStateDOB] = useState('');
    const [bloodGrp, setStateBloodGrp] = useState('');
    const [gender, setStateGender] = useState('');
    const [phoneNo, setStatePhoneNo] = useState('');
  
    const saveData = () => {
      console.log(fname + '   ' + lname + '   '+dob+'   '+bloodGrp+'    '+gender+'     '+phoneNo);
    };
  
    const onPressAdd = async () => {
      if (!fname || !lname || !dob || !bloodGrp || !gender || !phoneNo) {
        Alert.alert('Empty Field!!!', 'Please fill all Information', [
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
          console.log(fname + '   ' + lname + '   '+dob+'   '+bloodGrp+'    '+gender+'     '+phoneNo);
        saveData();
      }
    };
  
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Edit</Text>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter First Name"
            onChangeText={text => setStateFName(text)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter Last Name"
            onChangeText={text => setStateLName(text)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter Date of Birth"
            onChangeText={text => setStateDOB(text)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter Blood Group"
            onChangeText={text1 => setStateBloodGrp(text1)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter Gender"
            onChangeText={text1 => setStateGender(text1)}
          />
        </View>
  
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholderTextColor="#003f5c"
            placeholder="Enter Phone Number"
            onChangeText={text1 => setStatePhoneNo(text1)}
          />
        </View>
  
        <TouchableOpacity onPress={onPressAdd} style={styles.loginBtn}>
          <Text style={styles.loginText}>Add </Text>
        </TouchableOpacity>
      </View>
    );
  };
  export default EditStudent;
  
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
      marginBottom: 25,
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
  