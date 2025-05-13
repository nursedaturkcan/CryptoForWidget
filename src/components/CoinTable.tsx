import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { GetCoins } from '../service/Service';
import CoinItem from './CoinItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'CoinDetail'>;

const CoinTable :React.FC= () => {

  const navigation = useNavigation<NavigationProp>();


    const [coins, setCoins] = useState<any>([]);
    const [loading, setLoading] = useState<boolean>(true);
    useEffect(() => {
        const fetchCoins = async () => {
          const data = await GetCoins();
          if (data) {
            setCoins(data.slice(0, 30)); 
          }
          setLoading(false);
        };
        fetchCoins();
      }, []);
  return (
    <View>
    {coins && coins.map((coin : any,i :any)=>(
        <CoinItem 
        key={i}
        onPress={() =>
          navigation.navigate('CoinDetail', {
            symbol: coin.symbol,
            interval: '1m', 
          })
        }
        symbol={coin.symbol} lastPrice={coin.lastPrice} 
        priceChangePercent={coin.priceChangePercent}
        />
    ))}
    </View>
  )
}

export default CoinTable

const styles = StyleSheet.create({})