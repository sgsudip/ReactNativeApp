import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import Caution from '../../assets/svg/Caution.svg';

const CameraLenModal = ({modalVisible, setModalVisible, navigation}) => {
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Caution width={40} height={40} style={{margin: 20}} />
              <Text style={styles.modalText}>
                Please fully cover the camera lens
              </Text>
              <Text style={styles.modalText}>
                Please hold gentle pressure on the camera lens throughout the
                entire measurement.
              </Text>
              <TouchableOpacity
                onPress={() => setModalVisible(prev => !prev)}
                style={styles.button}>
                <Text style={styles.buttonText}> Try again</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{alignItems: 'center'}}>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
        <Pressable
          style={[styles.button]}
          onPress={() => navigation.navigate('Modal2')}>
          <Text style={styles.textStyle}>Next Modal</Text>
        </Pressable>
        <Pressable
          style={[styles.button]}
          onPress={() => navigation.navigate('Modal1')}>
          <Text style={styles.textStyle}>Back Modal</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    // position: 'absolute',
    width: 300,
    bottom: 10,
    margin: '4%',
    borderRadius: 6,
    height: 48,
    marginTop: 30,
    fontSize: 18,
    backgroundColor: '#5246A8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    alignItems: 'center',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default CameraLenModal;
