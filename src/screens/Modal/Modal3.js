import React, {useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  Button,
} from 'react-native';
import Vector from '../../assets/svg/Vector.svg';
import ButtonComponent from '../../components/common/ButtonComponent';

const Modal3 = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
          onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Vector width={40} height={40} style={{margin: 20}} />
              <Text style={styles.modalText}>
                Your measurement is not complete
              </Text>
              <Text style={styles.modalText}>
                Continue measurement in order see your reading results.{' '}
              </Text>
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 100,
                }}>
                <ButtonComponent
                  title="Stop measurement"
                  onPress={() => navigation.navigate('Modal4')}
                  style={{}}
                />
              </View>
              <View
                style={{
                  position: 'relative',
                  width: '100%',
                  justifyContent: 'center',
                  marginTop: 60,
                }}>
                <ButtonComponent
                  title="Continue measurement"
                  onPress={() => navigation.navigate('Modal2')}
                  style={{}}
                />
              </View>
            </View>
          </View>
        </Pressable>
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

export default Modal3;
