import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const ModalComponent = ({visible, onClose, selectedItem}) => {
  selectedItem = selectedItem;
  var userActive=selectedItem.is_active==0?"red":"green"
  console.log(userActive)
  return (
    <>
      <Modal
        visible={visible}
        animationType="slide"
        transparent={true}
        onRequestClose={onClose}
        style={styles.modalView}>
        <View style={styles.centeredView}>
          <View style={[styles.modalView,{borderColor: userActive}]}>
            <View style={{
}}>
              <Image
                style={styles.profileImg}
                source={{uri: selectedItem.profile_image_url}}
              />
            </View>

<View style={{paddingVertical:10}}>
            <Text style={styles.infoFont}>Name: {selectedItem.first_name} {selectedItem.last_name}</Text>
         
            <Text style={styles.infoFont}>Mobile: {selectedItem.mobile}</Text>
            <Text style={styles.infoFont}>Mobile number verified: {selectedItem.is_mobile_verified==0? "Not Verified":"Verified"}</Text>
            <Text style={styles.infoFont}>Email: {selectedItem.email}</Text>
            <Text style={styles.infoFont}>Email verified: {selectedItem.is_email_verified==0? "Not Verified":"Verified"}</Text>
            <Text style={styles.infoFont}>Date of Birth: {selectedItem.is_dob_private==0?selectedItem.date_of_birth.substring(0,10) : "Private"}</Text>
            <Text style={styles.infoFont}>Created On: {selectedItem.is_dob_private==0?selectedItem.created_at.substring(0,10) : "Private"}</Text>
            <Text style={styles.infoFont}>Account {selectedItem.is_active==0? "Inactive":"Active"}</Text>
            </View>

            <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
              <Text style={{color:'white',fontWeight:'bold',fontSize:20}}>Close</Text>

            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ModalComponent;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    
  },
  modalView: {
    margin: 20,
    backgroundColor: '#DFF1FF',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    borderWidth:10,
    marginBottom:5,
    paddingTop:15,
    paddingBottom:10
  },
  profileImg: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth:4,
    borderColor:'#446388',borderRadius:18
   
  },
  closeBtn: {
    backgroundColor: '#283B51',
    padding: 10,
    marginTop: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  infoFont:{fontSize:18, color:'black',paddingBottom:2}
});
