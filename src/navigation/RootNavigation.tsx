import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigation from './TabNavigation';
import CoinDetailScreen from '../screens/CoinDetail';
import LaunchScreen from '../screens/LaunchScreen';

const Stack = createNativeStackNavigator();


const  RootNavigation:React.FC=()=> {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
     <Stack.Screen name="Launch" component={LaunchScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="CoinDetail" component={CoinDetailScreen} />     
    </Stack.Navigator>
  );
}
export default RootNavigation;