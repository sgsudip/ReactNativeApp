import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Path, Svg} from 'react-native-svg';
import Logo from '../assets/svg/Logo.svg';

const PoweredBy = ({width = 40, height = 40, color = '#E55775', opacity}) => {
  return (
    <View style={{...styles.poweredBy, opacity: opacity}}>
      <Text style={styles.poweredByText}>Powered by</Text>
      <View style={{alignItems: 'center'}}>
        <Logo />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  poweredBy: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  poweredByText: {
    fontSize: 12,
    fontWeight: '700',
    marginRight: 5,
  },
});

export default PoweredBy;
