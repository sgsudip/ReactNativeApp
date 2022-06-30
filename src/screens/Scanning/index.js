import React, {useEffect, useRef, useState} from 'react';
import {Pressable, View, Modal, Text} from 'react-native';
import KeepAwake from 'react-native-keep-awake';
import CloseButton from '../../components/common/CloseButton';
import FlashOnSvg from '../../assets/svg/FlashOn.svg';
import FlashOffSvg from '../../assets/svg/FlashOff.svg';
import {SprenView} from '../SprenView';
import {styles} from './styles';
import ScanningStatus from './ScanningStatus';
import PoweredBy from '../../components/PoweredBy';
import CameraLenModal from './CameraLenErrorModal';
import LightErrorModal from './LightErrorModal';

const Scanning = ({navigation}) => {
  const [droppedFrames, setDroppedFrames] = useState(0);
  const [brightness, setBrightness] = useState(0);
  const [lensCovered, setLensCovered] = useState(0);
  const [exposure, setExposure] = useState(0);
  const [flash, setFlash] = useState('0');
  const [readingStatus, setReadingStatus] = useState('preReading');
  const [percentage, setPercentage] = useState(0);
  const [brightnessModalVisible, setBrightnessModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [text, setText] = useState(
    'Place your fingertip over the rear-facing camera lens.',
  );
  const sprenRef = useRef();
  KeepAwake.activate();

  useEffect(() => {
    // sprenRef.current?.setTorchMode(flash);
    navigation.navigate('Calculating', {readingData: null});
  }, [flash]);

  useEffect(() => {
    if (droppedFrames == 2) {
      sprenRef.current?.dropComplexity();
      sprenRef.current?.setTorchMode(flash);
      setDroppedFrames(0);
    }
  }, [droppedFrames]);

  useEffect(() => {
    if (brightness == 5 && readingStatus != 'started') {
      setBrightnessModalVisible(true);
    }
  }, [brightness]);

  useEffect(() => {
    sprenRef.current?.handleOverExposure();
  }, [exposure]);

  useEffect(() => {
    if (lensCovered == 5 && readingStatus != 'started') {
      setModalVisible(true);
    }
  }, [lensCovered]);

  useEffect(() => {
    if (!brightnessModalVisible) {
      setBrightness(0);
    }
  }, [brightnessModalVisible]);

  useEffect(() => {
    (async () => {
      if (sprenRef.current) {
        await setTimeout(() => {}, 1000);
        setFlash('1');
        sprenRef.current?.setAutoStart(true);
      }
    })();
  }, [sprenRef.current]);

  useEffect(() => {
    switch (readingStatus) {
      case 'started':
        break;
      case 'finished':
        setPercentage(100);
        sprenRef.current?.getReadingData();
        break;
      case 'error':
        setModalVisible(true);
        break;
    }
  }, [readingStatus]);

  const reset = () => {
    setReadingStatus('preReading');
    setPercentage(0);
    setBrightness(0);
    setExposure(0);
    setDroppedFrames(0);
    sprenRef.current?.setAutoStart(true);
  };

  return (
    <View style={styles.container}>
      <SprenView
        ref={sprenRef}
        onStateChange={event => {
          console.log('onStateChange');
          console.log(event.nativeEvent.state);
          setReadingStatus(event.nativeEvent.state);
        }}
        onPrereadingComplianceCheck={event => {
          if (
            event.nativeEvent.name === 'frameDrop' &&
            event.nativeEvent.compliant === false
          ) {
            setDroppedFrames(droppedFrames + 1);
          }

          if (
            event.nativeEvent.name === 'brightness' &&
            event.nativeEvent.compliant === false
          ) {
            setBrightness(brightness + 1);
          }

          if (
            event.nativeEvent.name === 'lensCoverage' &&
            event.nativeEvent.compliant === false
          ) {
            setLensCovered(lensCovered + 1);
          }
          if (
            event.nativeEvent.name === 'exposure' &&
            event.nativeEvent.compliant === false
          ) {
            setExposure(exposure + 1);
          }
        }}
        onProgressUpdate={event => {
          setPercentage(event.nativeEvent.progress);
          switch (event.nativeEvent.progress) {
            case 0:
              setText('Place your fingertip over the rear-facing camera lens.');
              break;
            case 1:
              setText(
                'Detecting your pulse. Keep your hand still and apply gentle pressure...',
              );
              break;
            case 15:
              setText(
                'Measuring your heart rate. Please relax and hold still...',
              );
              break;
            case 30:
              setText(
                'Detecting the imperceptible patterns in your heart beats...',
              );
              break;
            case 50:
              setText('Scanning your nervous system. Please hold still...');
              break;
            case 70:
              setText('Extracting your respiration patterns...');
              break;
            case 85:
              setText('Almost there...');
              break;
            case 100:
              setText('Measurement complete!');
            default:
              break;
          }
        }}
        onReadingDataReady={async event => {
          navigation.navigate('Calculating', {
            readingData: event.nativeEvent.readingData,
          });
          setFlash('0');
        }}
        style={styles.sprenView}>
        <View style={styles.sprenViewContainer}>
          <View>
            <CloseButton onClose={() => navigation.navigate('Instructions1')} />
            <ScanningStatus percentage={percentage} text={text} />
          </View>
          <View style={{marginVertical: 100}}>
            {readingStatus != 'started' && (
              <Pressable
                onPress={() => {
                  setFlash(flash === '1' ? '0' : '1');
                }}
                style={styles.flashButton}>
                {flash === '1' ? (
                  <FlashOnSvg width={50} height={50} />
                ) : (
                  <FlashOffSvg width={50} height={50} />
                )}
              </Pressable>
            )}
            {/* <PoweredBy opacity={0.7} /> */}
          </View>
        </View>
      </SprenView>
      <CameraLenModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        navigation={navigation}
      />
      <LightErrorModal
        modalVisible={brightnessModalVisible}
        setModalVisible={setBrightnessModalVisible}
      />
    </View>
  );
};
export default Scanning;
