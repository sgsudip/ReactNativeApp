import React from 'react';
import GreetingStack from './GreetingStack';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Calculating from '../screens/Calculating/Calculating.screen';
import Scanning from '../screens/Scanning';
import ServerError from '../screens/ServerError/ServerError.screen';
import StartOver from '../screens/StartOver/StartOver.screen';

const Main = createNativeStackNavigator();
const Root = () => {
  return (
    <NavigationContainer>
      <Main.Navigator
        initialRouteName={'Greeting'}
        screenOptions={{headerShown: false}}>
        <Main.Screen name="Greeting" component={GreetingStack} />
        <Main.Screen name="Scanning" component={Scanning} />
        <Main.Screen name="Calculating" component={Calculating} />
        <Main.Screen name="ServerError" component={ServerError} />
        <Main.Screen name="StartOver" component={StartOver} />
      </Main.Navigator>
    </NavigationContainer>
  );
};

export default Root;
