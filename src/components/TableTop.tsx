import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomIcon from './CustomIcon'
import Colors from '../styles/Colors'

const TableTop : React.FC = () => {
  return (
    <View style={{flexDirection:"row", alignItems:"center", gap:4, justifyContent:"space-between" }}>
    <View style={{flexDirection:"row", alignItems:"center"}}>
    <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
      <Text style={styles.header}>Coin</Text>
     <View>
     <CustomIcon name='caret-up-outline' color={Colors.GRAY} size={13}/>
      <CustomIcon name='caret-down-outline' color={Colors.GRAY} size={13}/>
     </View>
     </View>
     <Text style={styles.header}>/</Text>
     <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
      <Text style={styles.header}>Vol</Text>
     <View>
     <CustomIcon name='caret-up-outline' color={Colors.GRAY} size={13}/>
      <CustomIcon name='caret-down-outline' color={Colors.GRAY} size={13}/>
     </View>
     </View>
    </View>
    <View style={{flexDirection:"row", alignSelf:"flex-start"}}>
    <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
      <Text style={styles.header}>Price</Text>
     <View>
     <CustomIcon name='caret-up-outline' color={Colors.GRAY} size={13}/>
      <CustomIcon name='caret-down-outline' color={Colors.GRAY} size={13}/>
     </View>
     </View>
     <View style={{flexDirection:"row",alignItems:"center",gap:4}}>
      <Text style={styles.header}>Change %</Text>
     <View>
     <CustomIcon name='caret-up-outline' color={Colors.GRAY} size={13}/>
      <CustomIcon name='caret-down-outline' color={Colors.GRAY} size={13}/>
     </View>
     </View>
    </View>
    </View>
  )
}

export default  TableTop

const styles = StyleSheet.create({
    header:{
        color:Colors.GRAY,
        fontSize:11
      }
})