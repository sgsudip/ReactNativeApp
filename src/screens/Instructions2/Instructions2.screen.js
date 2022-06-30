import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Button,
  Alert,
  PermissionsAndroid,
  TouchableOpacity,
  Platform,
} from 'react-native';
import ImageContainer from '../../components/ImageContainer';
import Illustration2 from '../../assets/svg/Illustration2.svg';
import {
  request,
  PERMISSIONS,
  check,
  RESULTS,
  openSettings,
} from 'react-native-permissions';
import ButtonComponent from '../../components/common/ButtonComponent';

const Instructions2 = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const requestCameraPermission = () => {
    request(
      Platform.OS === 'ios'
        ? PERMISSIONS.IOS.CAMERA
        : PERMISSIONS.ANDROID.CAMERA,
    )
      .then(result => {
        switch (result) {
          case RESULTS.UNAVAILABLE:
            console.log(
              'This feature is not available (on this device / in this context)',
            );
            Alert.alert('This feature is not available on this device');
            break;
          case RESULTS.DENIED:
            console.log(
              'The permission has not been requested / is denied but requestable',
            );
            navigation.navigate('CameraDenied');
            break;
          case RESULTS.LIMITED:
            console.log('The permission is limited: some actions are possible');
            navigation.navigate('Instructions3');
            break;
          case RESULTS.GRANTED:
            console.log('The permission is granted');
            navigation.navigate('Instructions3');
            break;
          case RESULTS.BLOCKED:
            console.log('The permission is denied and not requestable anymore');
            navigation.navigate('CameraDenied');
            break;
        }
      })
      .catch(err => {
        console.warn(err);
      });
  };
  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={Illustration2} />
      <View style={{margin: '4%'}}>
        <Text style={styles.textFont}>
          Place your fingertip over the rear-facing camera lens
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          For the most accurate reading, leave the flash on or make sure you’re
          in a well lit area and can hold your hand steady
        </Text>
      </View>
      <ButtonComponent title="Next" onPress={requestCameraPermission} />
    </View>
  );
};

const styles = StyleSheet.create({
  textFont: {
    fontSize: 30,
    fontWeight: '700',
    marginTop: 20,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
  button: {
    position: 'absolute',
    width: '90%',
    bottom: 10,
    margin: '4%',
    borderRadius: 6,
    height: 48,
    marginTop: 50,
    fontSize: 18,
    backgroundColor: '#5246A8',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Instructions2;
