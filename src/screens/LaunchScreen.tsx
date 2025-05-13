// src/screens/LaunchScreen.tsx

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import QuickActions, { ShortcutItem } from 'react-native-quick-actions';
import { DeviceEventEmitter } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList, TabStackParamList } from '../navigation/types';


const FAVORITES_SHORTCUT = "favorites";
const ASSETS_SHORTCUT = "assets";

const LaunchScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList & TabStackParamList>>();

  useEffect(() => {
    const processShortcut = (item: ShortcutItem) => {
      if (item?.type === FAVORITES_SHORTCUT) {
        navigation.navigate("Favorites");
      } else if (item?.type === ASSETS_SHORTCUT) {
       navigation.navigate("Assets");
      } else {
       navigation. navigate("Home"); 
      }
    };

    QuickActions.popInitialAction()
      .then(item => {
        if (item) processShortcut(item);
        else navigation.navigate("Home");
      })
      .catch(error => {
        console.log('Quick action error', error);
       navigation. navigate("Home");
      });

    const listener = DeviceEventEmitter.addListener('quickActionShortcut', (item: ShortcutItem) => {
      processShortcut(item);
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
};

export default LaunchScreen;
