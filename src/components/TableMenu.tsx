import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuItem from './MenuItem'

const TableMenu : React.FC = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginVertical:20}}>
    <MenuItem title='Favorites' />
    <MenuItem title='Assets' />
    <MenuItem title='Spot' />
    <MenuItem title='MemeBox' />
    <MenuItem title='Futures' />
    <MenuItem title='Web3' />
    <MenuItem title='Experts' />
 </ScrollView>
  )
}

export default TableMenu

const styles = StyleSheet.create({})