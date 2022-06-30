import {View, Text} from 'react-native';
import React from 'react';
import CircularProgress from 'react-native-circular-progress-indicator';
import Tick from '../../assets/svg/Tick.svg';

const ScanningStatus = ({percentage = 0, text = ''}) => {
  return (
    <View
      style={{
        backgroundColor: '#fff',
        padding: 15,
        margin: 0,
        marginTop: 10,
        borderRadius: 10,
        flexDirection: 'row',
      }}>
      <View
        style={{
          alignItems: 'center',
          marginRight: 20,
        }}>
        <CircularProgress
          value={percentage}
          radius={35}
          activeStrokeWidth={10}
          inActiveStrokeWidth={10}
          // duration={2000}
          valueSuffix="%"
          activeStrokeColor={'#E55775'}
          inActiveStrokeColor={'#E55775'}
          inActiveStrokeOpacity={0.08}
          maxValue={100}
          showProgressValue={percentage !== 100}
          // @ts-ignore
          title={
            percentage === 100 ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: 50,
                }}>
                <Tick width={30} height={30} />
              </View>
            ) : (
              ''
            )
          }
        />
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 18}}>{text}</Text>
      </View>
    </View>
  );
};

export default ScanningStatus;
