import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Modal1 from '../screens/Modal/Modal1';
import Modal2 from '../screens/Modal/Modal2';
import Modal3 from '../screens/Modal/Modal3';

const ModalStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Modal1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Modal1" component={Modal1} />
      <Stack.Screen name="Modal2" component={Modal2} />
      <Stack.Screen name="Modal3" component={Modal3} />
    </Stack.Navigator>
  );
};

export default ModalStack;
