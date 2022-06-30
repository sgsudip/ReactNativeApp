import {Dimensions, StyleSheet, View} from 'react-native';
import React from 'react';
import Close from '../assets/svg/Close.svg';
import CloseButton from './common/CloseButton';

const ImageContainer = ({SVGPath}) => {
  return (
    <View style={styles.imageContainer}>
      <CloseButton />
      <SVGPath
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height * 0.35}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    padding: 0,
  },
  closeButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: 16,
    marginTop: 16,
  },
});

export default ImageContainer;
