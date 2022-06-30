import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useState} from 'react';
import CloseButton from '../../components/common/CloseButton';
import CircularProgress from 'react-native-circular-progress-indicator';
import Tick from '../../assets/svg/Tick.svg';
import API from '../../Services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Calculating = ({route, navigation}) => {
  const [percentage, setPercentage] = useState(0);
  const [text, setText] = useState('');
  const {readingData} = route.params;

  React.useEffect(() => {
    setPercentage(30);
    setText('Analyzing autonomic nervous system...');
    sendData();
  }, []);
  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     if (status.step === 1) {
  //       setStatus(prev => ({
  //         ...prev,
  //         text: 'Analyzing autonomic nervous system...',
  //         step: 2,
  //         progres: 25,
  //       }));
  //     } else if (status.step === 2) {
  //       setStatus(prev => ({
  //         ...prev,
  //         text: 'Analyzing baseline trends...',
  //         step: 3,
  //         progres: 50,
  //       }));
  //     } else if (status.step === 3) {
  //       setStatus(prev => ({
  //         ...prev,
  //         text: 'Generating personalized insights...',
  //         step: 4,
  //         progres: 75,
  //       }));
  //     } else if (status.step === 4) {
  //       setStatus(prev => ({
  //         ...prev,
  //         text: 'Complete!',
  //         step: 5,
  //         progres: 100,
  //       }));
  //     } else if (status.step === 5) {
  //       clearInterval(timer);
  //     }
  //   }, 1000);

  //   return () => {
  //     timer ? clearInterval(timer) : null;
  //   };
  // }, [status]);

  const sendData = async () => {
    try {
      const response = await API.post(
        '/submit/sdkData',
        {
          user: new Date().getTime(),
          readingData: readingData ?? 'demotext',
        },
        {
          onUploadProgress: event => {
            let progress = Math.round((event.loaded * 100) / event.total);

            if (progress == 100) {
              setPercentage(60);
              setText('Analyzing baseline trends...');
            }
          },
        },
      );

      if (response?.data?.guid) {
        const guid = response?.data?.guid;
        await AsyncStorage.setItem('Guid', guid);
        const results = await API.get(`/results/${guid}`);
        setPercentage(100);
        setText('Completed !');
        if (results.data.signalQuality !== 'success') {
          handleError();
        } else {
          Alert.alert('Thanks for using', JSON.stringify(results.data));
          navigation.navigate('Result', {data: results.data});
        }
      } else {
        console.warn('response', 'error');
        handleError();
      }
    } catch (e) {
      console.warn('post request error', e);
      handleError();
    }
  };
  const handleError = () => {
    navigation.navigate('ServerError');
  };

  return (
    <View>
      <CloseButton onClose={() => {}} />
      <View style={styles.container}>
        <Text style={styles.heading}>Calculating your results</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View
        style={{
          alignItems: 'center',
          marginVertical: 60,
          position: 'relative',
        }}>
        <CircularProgress
          value={percentage}
          radius={70}
          activeStrokeWidth={10}
          inActiveStrokeWidth={10}
          activeStrokeColor={'#E55775'}
          inActiveStrokeColor={'#E55775'}
          inActiveStrokeOpacity={0.08}
          maxValue={100}
          // @ts-ignore
          title={
            percentage === 100 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 90,
                }}>
                <Tick width={60} height={60} />
              </View>
            ) : (
              ''
            )
          }
          showProgressValue={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {display: 'flex', marginHorizontal: 20},
  text: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 18,
  },
  heading: {
    textAlign: 'center',
    fontSize: 28,
    marginVertical: 20,
    fontWeight: '700',
  },
});

export default Calculating;
