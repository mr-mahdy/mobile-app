/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SplashScreen from './sidebar/SplashScreen';
import HomeScreen from './sidebar/HomeScreen';
import InputScreen from './sidebar/InputScreen';
import InputDuaScreen from './sidebar/InputDuaScreen';
import InputTigaScreen from './sidebar/InputTigaScreen';
import InputEmpatScreen from './sidebar/InputEmpatScreen';
import HasilScreen from './sidebar/HasilScreen';
import PetunjukScreen from './sidebar/PetunjukScreen';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Splash">
          <Stack.Screen
            name="Splash"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Petunjuk Penggunaan" component={PetunjukScreen} />
          <Stack.Screen name="Curah Hujan" component={InputScreen} />
          <Stack.Screen name="Kemiringan Lereng" component={InputDuaScreen} />
          <Stack.Screen name="Kelembaban Tanah" component={InputTigaScreen} />
          <Stack.Screen name="Pergerakan Tanah" component={InputEmpatScreen} />
          <Stack.Screen name="Hasil Pengujian" component={HasilScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
