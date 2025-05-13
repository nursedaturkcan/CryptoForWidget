import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomIcon from './CustomIcon'; 
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';


type NavbarProps = {
  type: 'back' | 'default';
  coinSymbol?: string; 
};

const FAVORITES_KEY = 'FAVORITE_COINS';

const Navbar: React.FC<NavbarProps> = ({ type, coinSymbol }) => {
  type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'Home'>;
  const navigation = useNavigation<NavigationProps>();

  const [isFavorite, setIsFavorite] = useState(false);


  const checkFavorite = async () => {
    if (!coinSymbol) return;
    const stored = await AsyncStorage.getItem(FAVORITES_KEY);
    const favorites = stored ? JSON.parse(stored) : [];
    setIsFavorite(favorites.includes(coinSymbol));
  };


  const toggleFavorite = async () => {
    if (!coinSymbol) return;

    const stored = await AsyncStorage.getItem(FAVORITES_KEY);
    let favorites = stored ? JSON.parse(stored) : [];

    if (favorites.includes(coinSymbol)) {
      favorites = favorites.filter((item: string) => item !== coinSymbol);
      setIsFavorite(false);
    } else {
      favorites.push(coinSymbol);
      setIsFavorite(true);
    }

    await AsyncStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  };

  useEffect(() => {
    checkFavorite();
  }, [coinSymbol]);

  if (type === 'back') {
    return (
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
        <TouchableOpacity onPress={() => navigation.goBack()} >
          <CustomIcon name="arrow-back-outline" color="white" />
        </TouchableOpacity>
        {coinSymbol && (
          <TouchableOpacity  onPress={toggleFavorite}>
            <CustomIcon
              name={isFavorite ? 'star' : 'star-outline'}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
    );
  }

  return null;
};

export default Navbar;
