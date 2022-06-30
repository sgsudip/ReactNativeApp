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
import Illustration3 from '../../assets/svg/Illustration3.svg';
import ButtonComponent from '../../components/common/ButtonComponent';

const Instructions3 = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={Illustration3} />
      <View style={{margin: '4%'}}>
        <Text style={styles.textFont}>
          Place your fingertip fully over the camera lens
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          Hold your hand steady and apply light pressure with your finger.
        </Text>
      </View>
      <ButtonComponent
        title="Start measurement"
        onPress={() => navigation.navigate('Scanning')}
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

export default Instructions3;
