import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ImageContainer from '../../components/ImageContainer';
import Illustration1 from '../../assets/svg/Illustration1.svg';
import CloseButton from '../../components/common/CloseButton';
import ButtonComponent from '../../components/common/ButtonComponent';
import DeviceInfo from 'react-native-device-info';

const Instructions1 = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const onClose = () => {
    navigation.navigate('Greeting4');
  };
  const checkAirPlanModeStatus = () =>
    DeviceInfo.isAirplaneMode()
      .then(airplaneModeOn => {
        if (airplaneModeOn) {
          Alert.alert(
            'Please turn off Airpanel Mode and try again.',
            'Please check your internet connection and try again.',
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
              },
              {text: 'OK', onPress: () => console.log('OK Pressed')},
            ],
          );
        } else {
          navigation.navigate('Instructions2');
        }
      })
      .catch(err => {
        console.log('error', err);
        Alert.alert('Something Went Wrong');
      });

  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={Illustration1} onClose={onClose} />
      <View style={{margin: '4%'}}>
        <Text style={styles.textFont}>
          Measure your HRV with your phone camera
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          Simply do a quick resting scan when you wake up to receive
          personalized stress and recovery insights.
        </Text>
      </View>
      <ButtonComponent title="Next" onPress={checkAirPlanModeStatus} />
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

export default Instructions1;
