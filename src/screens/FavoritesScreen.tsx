import React, { useEffect, useState } from 'react';
import {
  View, Text, SafeAreaView, FlatList, ActivityIndicator, StyleSheet
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navbar from '../components/Navbar';
import CoinItem from '../components/CoinItem'; // CoinItem bileşenini dışarıda tut
import { useNavigation } from '@react-navigation/native';
import { GetCoins } from '../service/Service';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import Colors from '../styles/Colors';
import { NativeModules } from 'react-native';




const FavoritesScreen: React.FC = () => {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [coinData, setCoinData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
console.log(favorites,"favv")
const { SharedStorage } = NativeModules;
useEffect(() => {
  if (coinData.length > 0) {
    const formattedCoins = coinData.slice(0, 6).map((coin) => ({
      name: coin.symbol,
      price: `$${parseFloat(coin.lastPrice).toFixed(8)}`,
      changePercent: parseFloat(coin.priceChangePercent).toFixed(2)
     

    }));
    console.log("Widget'a gönderilen veri:", formattedCoins)
    const data = JSON.stringify(formattedCoins);
    SharedStorage.saveFavoriteCoins(data);
    SharedStorage.reloadWidget(); 
  }
}, [coinData]);


  useEffect(() => {
    const loadFavoritesAndFetchCoins = async () => {
      try {
        const stored = await AsyncStorage.getItem('FAVORITE_COINS');
        const symbols: string[] = stored ? JSON.parse(stored) : [];

        setFavorites(symbols);

        const allCoins = await GetCoins();
        if (allCoins) {
          const filtered = allCoins.filter((coin: any) => symbols.includes(coin.symbol));
          setCoinData(filtered);
        }
      } catch (error) {
        console.error('Error loading favorites:', error);
      } finally {
        setLoading(false);
      }
    };

    loadFavoritesAndFetchCoins();
  }, []);

  const renderItem = ({ item }: { item: any }) => (
    <CoinItem
      symbol={item.symbol}
      lastPrice={item.lastPrice}
      priceChangePercent={item.priceChangePercent}
      onPress={() =>
        navigation.navigate('CoinDetail', {
          symbol: item.symbol,
          interval: '1m',
        })
      }
    />
  );

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <Navbar type="back" />
        <Text style={styles.title}>Favorite Coins</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#fcd535" style={{ marginTop: 20 }} />
        ) : coinData.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No favorite coins yet.</Text>
          </View>
        ) : (
          <FlatList
            data={coinData}
            keyExtractor={(item) => item.symbol}
            renderItem={renderItem}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        )}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:Colors.BLACK,
  },
  title: {
    color:Colors.WHITE,
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 12,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    color: '#888',
    fontSize: 16,
    marginTop: 20,
  },
  separator: {
    height: 10,
  },
});
