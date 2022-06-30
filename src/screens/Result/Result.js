import {React, useState} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const Result = ({navigation, route}) => {
  const height = Dimensions.get('window').height;
  const data = route.params.data;
  const hrvScore = data.biomarkers.hrvScore.value;
  const breathingRate = data.biomarkers.breathingRate.value;
  const heartRate = data.biomarkers.hr.value;
  return (
    <ScrollView
      style={{
        height: height * 0.9,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View>
        <Text style={styles.text}>Your heart rate</Text>
        <Text style={styles.text}>{heartRate}</Text>
      </View>
      <View>
        <Text style={styles.text}>Your hrv score</Text>
        <Text style={styles.text}>
          {Math.round((hrvScore + Number.EPSILON) * 100) / 100}
        </Text>
      </View>
      <View>
        <Text style={styles.text}>Your breathing rate</Text>
        <Text style={styles.text}>{breathingRate}</Text>
      </View>
    </ScrollView>
  );
};

var styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 10,
  },
});

export default Result;
