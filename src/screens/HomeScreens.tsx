import { SafeAreaView, StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import Navbar from '../components/Navbar'
import Colors from '../styles/Colors'
import TopMenuItem from '../components/TopMenuItem'
import MenuItem from '../components/MenuItem'
import CustomIcon from '../components/CustomIcon'
import TableTop from '../components/TableTop'
import TableMenu from '../components/TableMenu'
import TopMenu from '../components/TopMenu'
import CoinItem from '../components/CoinItem'
import CoinTable from '../components/CoinTable'

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.BLACK }}>
      <Navbar type='home' />
      <ScrollView style={{ padding: 10 }}>
        <View style={{ gap: 15 }}>
          <Text style={styles.text}>Total Assets Value</Text>
          <View style={styles.row}>
            <Text style={styles.heading}>2,222</Text>
            <Text style={styles.text}>USD</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.grayText}>Today's PNL</Text>
            <Text style={styles.redText}> -72.32 USD (-3.3%)</Text>
          </View>
        </View>
        <TopMenu />
        <TableMenu />
        <TableTop />
        <CoinTable/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE
  },
  heading: {
    color: Colors.WHITE,
    fontSize: 24,
    fontWeight: "800"
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  grayText: {
    color: Colors.GRAY
  },
  redText: {
    color: Colors.RED
  },

})