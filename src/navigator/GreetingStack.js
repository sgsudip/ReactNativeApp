import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CameraDenied from '../screens/CameraDenied/CameraDenied.screen';
import Instructions1 from '../screens/Instructions1/Instructions1.screen';
import Instructions2 from '../screens/Instructions2/Instructions2.screen';
import Instructions3 from '../screens/Instructions3/Instructions3.screen';
const GreetingStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName="Instructions1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Instructions1" component={Instructions1} />
      <Stack.Screen name="Instructions2" component={Instructions2} />
      <Stack.Screen name="CameraDenied" component={CameraDenied} />
      <Stack.Screen name="Instructions3" component={Instructions3} />
    </Stack.Navigator>
  );
};

export default GreetingStack;
