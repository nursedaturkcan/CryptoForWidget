import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../styles/Colors'
import { CoinItemProps } from './Interfaces'


const CoinItem: React.FC<CoinItemProps> = ({symbol,lastPrice,priceChangePercent, onPress}) => {
    const priceChange = Number(priceChangePercent);
    const lastPriceOv = Number(lastPrice);
    const isPositive = priceChange > 0;
    return (
        <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" ,marginVertical:20}}>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
                <View style={styles.coin} >
                    <Image style={styles.coinImg} source={{ uri: "" }} />
                </View>
                <Text style={styles.name}>{symbol}</Text>
               
            </View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
                <Text style={styles.name}>{lastPriceOv.toFixed(7)}</Text>
                <Text
                    style={[
                        styles.rate,
                        { backgroundColor: isPositive ? Colors.GREEN : Colors.RED }
                    ]}
                >
                     {priceChange.toFixed(2)}%
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default CoinItem

const styles = StyleSheet.create({
    coin: {
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "white"
    },
    coinImg: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    },
    name: {
        color: Colors.WHITE,
        fontWeight: "600",
        fontSize: 14
    },
    rate:{
        color:Colors.WHITE,
        backgroundColor:Colors.RED,
        paddingVertical:5,
        paddingHorizontal:15,
        borderRadius:5
    }
})