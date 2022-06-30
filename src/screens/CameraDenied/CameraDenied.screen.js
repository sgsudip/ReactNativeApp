import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Dimensions,
  Button,
  Alert,
  TouchableOpacity,
} from 'react-native';
import ImageContainer from '../../components/ImageContainer';
import CameraError from '../../assets/svg/CameraError.svg';
import ButtonComponent from '../../components/common/ButtonComponent';
import {openSettings} from 'react-native-permissions';

const CameraDenied = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={CameraError} />
      <View style={{margin: '4%'}}>
        <Text style={styles.textFont}>
          Camera access is needed to start an HRV measurement
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          Allow access to camera in your iOS Settings in order to receive
          personalized insights and guidance.{' '}
        </Text>
      </View>
      <ButtonComponent
        title="Start measurement"
        onPress={() =>
          openSettings().catch(() => Alert.alert('cannot open settings'))
        }
      />
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
export default CameraDenied;
