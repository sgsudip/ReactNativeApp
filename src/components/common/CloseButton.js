import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Close from '../../assets/svg/Close.svg';
import {useNavigation} from '@react-navigation/native';

const CloseButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.closeButton}>
      <TouchableOpacity
        onPress={() => {
          if (
            navigation.getState().routes.length === 1
              ? navigation.getState().routes[0].name !== 'Instructions1'
              : true
          ) {
            navigation.reset({
              index: 0,
              routes: [{name: 'Instructions1'}],
            });
          } else {
            Alert.alert('You are already at Home Screen');
          }
        }}>
        <Close width={44} height={44} />
      </TouchableOpacity>
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
  },
});
export default CloseButton;
