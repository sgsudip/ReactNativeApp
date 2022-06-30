import {View, Text, Modal} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ButtonComponent from '../../components/common/ButtonComponent';

const ScanningModal = ({
  status = false,
  heading = '',
  text = '',
  setModalValue,
  FirstButtonText = '',
  SecondButtonText = '',
  onFirstClick,
  onSecondClick = () => null,
  hasButton = false,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={status}
      onRequestClose={() => {
        setModalValue(prev => ({...prev, status: false}));
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTitle}>{heading}</Text>
          <Text style={styles.modalText}>{text}</Text>
          {hasButton && (
            <View>
              {FirstButtonText && (
                <ButtonComponent
                  title={FirstButtonText}
                  style={styles.tryButton}
                  onPress={onFirstClick}
                />
              )}
              {SecondButtonText && (
                <Text style={styles.buttonText} onPress={onSecondClick}>
                  {SecondButtonText}
                </Text>
              )}
            </View>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default ScanningModal;
