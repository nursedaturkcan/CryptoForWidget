import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../components/CustomIcon';
import { TabStackParamList } from './types';
import AssetsScreen from '../screens/AssetsScreen';
import Colors from '../styles/Colors';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreens';




const Tab = createBottomTabNavigator<TabStackParamList>();



const TabNavigation: React.FC = () => {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.BLACK, 
            borderTopWidth: 0,
          },
          tabBarActiveTintColor: Colors.GRAY,
          tabBarInactiveTintColor: Colors.GRAY,
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={focused ? 'home' : 'home-outline'}
                size={25}
                color={Colors.GRAY}

              />
            )
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={focused ? 'heart' : 'heart-outline'}
                size={25}
                color={Colors.GRAY}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Assets"
          component={AssetsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <CustomIcon
                name={focused ? 'person' : 'person-outline'}
                size={25}
                color={Colors.GRAY}
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  };
  

export default TabNavigation

const styles = StyleSheet.create({})