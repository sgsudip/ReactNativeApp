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
import ErrorSvg from '../../assets/svg/Error.svg';
import ButtonComponent from '../../components/common/ButtonComponent';

const ServerError = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;
  const onClose = () => {
    navigation.navigate('StartOver');
  };

  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={ErrorSvg} />
      <View style={{margin: '4%'}}>
        <Text style={styles.textFont}>
          Sorry! There was an error calculating your results
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          Please take another measurement to view your HRV results.
        </Text>
      </View>
      <ButtonComponent title="Try again" onPress={onClose} style={{}} />
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

export default ServerError;
