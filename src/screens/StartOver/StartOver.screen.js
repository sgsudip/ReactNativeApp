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
import StartOverSvg from '../../assets/svg/StartOver.svg';
import Tick2 from '../../assets/svg/Tick2.svg';
import ButtonComponent from '../../components/common/ButtonComponent';

const StartOver = ({navigation}) => {
  const height = Dimensions.get('window').height;
  const width = Dimensions.get('window').width;

  const handleStartOver = () => {
    console.log(navigation, 'navigation');
    // navigation.push('Instructions1');
    navigation.replace('Greeting', 'Instructions1');
  };
  return (
    <View
      style={{
        height: height * 0.9,
      }}>
      <ImageContainer SVGPath={StartOverSvg} />
      <View style={{marginHorizontal: '4%', marginTop: -20}}>
        <Text style={styles.textFont}>
          Sorry, we couldn’t calculate your results
        </Text>
        <Text style={{marginTop: 20, fontSize: 18}}>
          Unfortunately, we couldn’t calculate your results due to poor
          lighting, finger movement, or physiological reasons. Please take
          another measurement to view your results.
        </Text>
      </View>
      <View style={{marginHorizontal: '4%', marginVertical: 10}}>
        <Text style={{marginVertical: 10, fontWeight: '700', fontSize: 18}}>
          Tips
        </Text>
        <View style={{flexDirection: 'row', marginVertical: 3}}>
          <Tick2 width={20} height={20} />
          <Text style={{marginLeft: 10}}>
            Fully cover the camera lens throughout the measurement
          </Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 3}}>
          <Tick2 width={20} height={20} />
          <Text style={{marginLeft: 10}}>Use the flash</Text>
        </View>
        <View style={{flexDirection: 'row', marginVertical: 3}}>
          <Tick2 width={20} height={20} />
          <Text style={{marginLeft: 10}}>Adjust your finger pressure</Text>
        </View>
      </View>
      <ButtonComponent
        title="Start over"
        onPress={handleStartOver}
        style={{}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFont: {
    fontSize: 30,
    fontWeight: '700',
    // marginTop: 20,
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

export default StartOver;
