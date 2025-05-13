import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TopMenuItem from './TopMenuItem'

const TopMenu : React.FC = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{marginVertical:20}}>
    <TopMenuItem title='Launchpool' name='hammer-outline' />
    <TopMenuItem title='CandyDrop' name='diamond-outline' />
    <TopMenuItem title='Rewards' name='gift-outline' />
    <TopMenuItem title='Simple Earn' name='water-outline' />
    <TopMenuItem title='Copy' name='copy-outline' />
    <TopMenuItem title='Bots' name='chatbubble-ellipses-outline' />
    <TopMenuItem title='More' name='menu-outline' />
</ScrollView>
  )
}

export default TopMenu

const styles = StyleSheet.create({})