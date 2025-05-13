import React, { useEffect, useRef } from 'react';
import { NavigationContainer, NavigationProp, useNavigation } from '@react-navigation/native';
import RootNavigation from './src/navigation/RootNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import QuickActions, { ShortcutItem } from 'react-native-quick-actions';
import { DeviceEventEmitter } from 'react-native';
import { RootStackParamList, TabStackParamList } from './src/navigation/types';
const App: React.FC = () => {
  // const navigation = useNavigation<NavigationProp<RootStackParamList & TabStackParamList>>();
const FAVORITES_SHORTCUT="favorites"
const ASSETS_SHORTCUT="assets"

  // useEffect(() => {
  //   const processShortcut = (item: ShortcutItem) => {
  //     if (item.type === FAVORITES_SHORTCUT) {
  //       console.log(item, "item");
  //      navigation.navigate("Favorites")
      
  //     }
  //     if (item.type === ASSETS_SHORTCUT) {
       
  //       console.log(item, "item");
      
  //     }
  //   };
  
  //   QuickActions.setShortcutItems([
  //     {
  //       type: FAVORITES_SHORTCUT,
  //       title: 'Favorites',
  //       subtitle: '',
  //       icon: 'Favorites',
  //       userInfo: {
  //         url: 'app://Favorites',
  //       },
  //     },
  //     {
  //       type: ASSETS_SHORTCUT,
  //       title: 'Assets',
  //       subtitle: '',
  //       icon: 'Assets',
  //       userInfo: {
  //         url: 'app://Assets',
  //       },
  //     },
  //   ]);
  
  //   // app is in exit mode
  //   QuickActions.popInitialAction()
  //     .then(item => {
  //       processShortcut(item);
  //     })
  //     .catch(error => {
  //       console.log('something went wrong');
  //       // show a pop up saying you cannot redirect to create item
  //     });
  
  //   DeviceEventEmitter.addListener('quickActionShortcut', (item: ShortcutItem) => {
  //     processShortcut(item);
  //   });
  //   return ()=>{
  //     QuickActions.clearShortcutItems()
  //     DeviceEventEmitter.removeAllListeners();
  //   }
  // }, []);
  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer >
        <RootNavigation />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;
