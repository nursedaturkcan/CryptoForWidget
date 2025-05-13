import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import {TopMenuItemProps } from './Interfaces';
import Colors from '../styles/Colors';
import CustomIcon from './CustomIcon';





const TopMenuItem: React.FC<TopMenuItemProps> = ({ title,name }) => {

    return (
        <TouchableOpacity  style={styles.button}>
           <CustomIcon name={name} size={24} color='white'/>
           <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )


}

export default TopMenuItem

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,


    },
    title: {
        fontWeight: "500",
        color:Colors.WHITE
    },

})
