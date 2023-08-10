import {Dimensions} from 'react-native';
import {
  Switch,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  Image,
  ActivityIndicator
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React, {useState, useEffect} from 'react';
import {useStore} from '../components/zustand';
import ModalComponent from './modalComponent';

//import AsyncStorage from( '@react-native-async-storage/async-storage';

const GetAllStudents = (props) => {
  var LocalToken = '';
  var GlobalToken = '';

  useEffect(() => {
    const asyncUseEffect = async () => {
      LocalToken = props.route.params.result.data.token;
      console.log('in use effec local ' + LocalToken);
      GlobalToken = await AsyncStorage.getItem(
        'OfficialSessionTokenStudentManagment',
      );

      console.log('name fetched from async global    ' + GlobalToken);

      if (GlobalToken !== LocalToken) {
        alert('Login Token expired. Login Again');
        props.navigation.navigate('Login');
      }
    };
    asyncUseEffect();
  });


  var modalData = useStore(state => state.modalData);
  var setModalData = useStore(state => state.setModalData);

  const pageNumber = useStore(state => state.pageNumber);
  const increasePageNumberGlobal = useStore(state => state.increasePageNumber);
  const decreasePageNumberGlobal = useStore(state => state.decreasePageNumber);

  const [myData, callMyData] = useState([]);

  var token =
    'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InVzZXJuYW1lIjoiYmlsbHkiLCJlbWFpbCI6ImJpbGx5QGdtYWlsLmNvbSIsIm1vYmlsZSI6IisxNzQwNDYzMDAzNCIsInVzZXJfaWQiOiI5OTFjMTRjMi1jMThmLTRjZjUtYjYzMS1iNDZkYmJmYjAwMzAiLCJyb2xlIjp7ImlkIjozLCJjb2RlIjoidXNlciIsImxhYmVsIjoiVXNlciJ9LCJjbGllbnRfaWQiOiI3ODY3ZDc1My1hYjE4LTRkZWUtYTY0MC1hODA2NjQ0NjdlNTAifSwiaWF0IjoxNjkwODc0MDI5LCJleHAiOjE2OTM0NjYwMjksImlzcyI6ImF1dGgifQ.aQvcjBp_lbhyW_uNzrLyG7RXPb6WAo_OjcX7egn6_pfaZmAjdUdg0kp7fzOEuIMdqRx6NsLgBa3zDqAWzpIaYssCs3vQ8_HY8PCxuAcMcnDB9-28OpwHlAv2xePa3olFv3_Zb52OHKH9Hz9ynohJQVUnVbxfxmpASXkykdKrz4dymuxooX8vEM8m9LYSPRCfN4Mcul1_AwQpcBdi4v5tR3o0HhYCa8koUpcnLnsHSFzxWf3feMv8tlOxExdmoNGst2T_nIovMNorzMd-zw7UjPQGT3COSUVsiCzNxYgtxqTigySN5fezcZ233gNapqAObo1swsiPoJJO2QDmMuQzJM2OCqh2vOOZKQA_4Jg-L8U0TRyBsf3XunQWz5JjHWecdv4r1edXH8tFa7Z58fqfHSB-Kgih5K_qHFTniGWLcbVeNmBCTVDRpgIItPwU_z8A5zuiK14ZKiUpQLf_MBBW1_mGwtw7OknFn4kHJfW6VcRN9AY0QsoYrgjV7JWKqDuXYuXToKai__u240HXvlomsqKuui-pho-IaZM2SMRlCO7Ya8NJAp4KH1c6P4jSxwI62Q7L8oxoPhi_SrSsPLpO2TSNt9-6DwCUNeqh7Skp4UnBVXinM1_LOr-pRh1BJ-Zai-HGRKG5Xx-j8qJns58wi5xwsP0kM2TYZOGPvdb9ErY';

  // Function for fetching user from api
  const callUser = async pageNumbernew => {
    console.log(
      'Inside call user     page number' +
        pageNumbernew +
        '          data' +
        myData.length,
    );
    var link = '';
   
      link =
        'https://api.dev.opalinkapp.com/user/api/v1/users?page=' +     pageNumbernew;
 

    await fetch(link, {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'content-type': 'application/json',
      },
    })
      .then(result => result.json())
      .then(response => {
        callMyData(response.data.records);

        console.log(
          'Inside call user afer data change                          ' +
            myData.length,
        );
      })
      .catch(err => {
        console.log(err);
      });
    console.log('end of  call user       ' + myData.length);
  };

  //function to display button for calling user initially
  const ListIsEmpty = () => {
    callUser(pageNumber)
    {
        /*  <TouchableOpacity
           style={styles.renderDataBox}
           onPress={() => {
             callUser(1);
           }}>
           <Text style={styles.renderBtnText}>Press to render data</Text>
       </TouchableOpacity> */}
       
    return (
        <View style={ {paddingTop:280,flex:1}}>
    <ActivityIndicator size={100} color="#446388" />
    </View>
      );
  };

  //Flatlist seprator
  const RenderSeparator = () => {
    return (
      <View
        style={{
          height: 10,
          width: '100%',
        }}
      />
    );
  };

  //function to display default photo if no profile image
  const checkImg = k => {
    if (k == null)
      k =
        'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=';

    return k;
  };

  const [modalVisible, setModalVisible] = useState(false);

  //function to display flatlist
  const DisplayFlatList = () => {
    return (
      <>
        <FlatList
          style={{width: '100%', marginTop: 10, flex: 1}}
          data={[...myData]}
          renderItem={({item}) => (
            <>
              <View>
                <TouchableOpacity
                  onPress={() => {
                    console.log('ooooooooooooooooooooo' + [item]);
                    setModalData(item);
                    console.log(modalData + '  this is the modal pass');
                    setModalVisible(true);
                  }}
                  style={styles.flatlistBox}>
                  <View
                    style={{
                      flex: 1.25,
                      flexDirection: 'column',
                      marginLeft: 3,
                    }}>
                    <Text style={{fontSize: 0}}>
                      {
                        (item.profile_image_url = checkImg(
                          item.profile_image_url,
                        ))
                      }
                    </Text>
                    <Image
                      style={styles.profileImg}
                      source={{uri: item.profile_image_url}}
                    />
                  </View>

                  <View style={{flex: 4, marginTop: 8}}>
                    <Text style={[styles.userinfo, {fontSize: 25}]}>
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text style={styles.userinfo}>
                      Username: {item.username}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </>
          )}
          ListEmptyComponent={ListIsEmpty}
          ItemSeparatorComponent={RenderSeparator}
        />

        <ModalComponent
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          selectedItem={modalData}
        />
      </>
    );
  };

  //function to display page number, next and previous page button
  const PageSwitchBar = () => {
    return (
      <>
        <View style={styles.pageSwitchBar}>
          <TouchableOpacity
            onPress={decreasePageNumber}
            style={styles.changePage}>
            <Text style={styles.changeBtnText}>Previous Page</Text>
          </TouchableOpacity>
          <Text style={styles.pageNumber}>{pageNumber}</Text>
          <TouchableOpacity
            style={styles.changePage}
            onPress={increasePageNumber}>
            <Text style={styles.changeBtnText}>Next Page</Text>
          </TouchableOpacity>
        </View>
      </>
    );
  };

  const increasePageNumber = async () => {
    console.log(
      'Inside increase page number   page number' +
        pageNumber +
        '          data' +
        myData.length,
    );
    if (pageNumber < 28 && pageNumber >= 0) {
      increasePageNumberGlobal();
    } else if (pageNumber == 28) {
      alert('Max page number reached');
    }

    if (pageNumber < 28) {
      callUser(pageNumber + 1);
    }
  };

  const decreasePageNumber = () => {
    console.log(
      'Inside decreas epage number    page number' +
        pageNumber +
        '          data' +
        myData.length,
    );
    if (pageNumber >= 2) {
      decreasePageNumberGlobal(pageNumber - 1);
    } else {
      alert('Minimum page number reached');
    }

    if (pageNumber >= 2) {
      callUser(pageNumber - 1);
    }
  };


  //function to add delay
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  // function to choose what content to display to user
  const WhatToRender = () => {
    if (myData.length === 0) {
      return (
        <>
          <ListIsEmpty />
        </>
      );
    } else {
        return (
          <>
            <PageSwitchBar />
            <DisplayFlatList />
          </>
        );
        }
    
  };

  return (
    <>
      <SafeAreaView style={styles.container}>

        <WhatToRender />
      </SafeAreaView>
    </>
  );
};

export default GetAllStudents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#DFF1FF',
  },
  toptext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  paginationBtn: {
    backgroundColor: '#283B51',
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    fontSize: 32,
  },
  renderDataBox: {
    backgroundColor: '#283B51',
    width: Dimensions.get('window').width - 20,
    borderRadius: 15,
    marginTop: 20,
    paddingVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  },
  renderBtnText: {fontSize: 20, color: 'white', fontWeight: 'bold'},

  userinfo: {color: 'white', fontSize: 15},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  changeBtnText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
    marginHorizontal: 2,
  },
  sortBox: {
    width: '95%',
    backgroundColor: '#446388',
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  sortBoxText: {fontSize: 18, color: 'white', fontWeight: 'bold'},
  flatlistBox: {
    backgroundColor: '#7BAFEE',
    borderRadius: 7,
    width: '95%',
    padding: 5,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  profileImg: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    flex: 5,
  },
  pageSwitchBar: {
    marginVertical:30,
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,

  },
  changePage: {backgroundColor: '#446388', borderRadius: 10},
  pageNumber: {
    color: '#283B51',
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 6,
    marginHorizontal: 2,
  },
});
