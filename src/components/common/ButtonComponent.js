import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

const ButtonComponent = ({title, onPress, disabled = false, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
      activeOpacity={0.75}
      disabled={disabled}>
      <Text style={[styles.buttonText, style]}> {title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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

export default ButtonComponent;
