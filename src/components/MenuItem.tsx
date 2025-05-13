import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import {MenuItemProps } from './Interfaces';
import Colors from '../styles/Colors';
import CustomIcon from './CustomIcon';





const MenuItem: React.FC<MenuItemProps> = ({ title }) => {

    return (
        <TouchableOpacity  >
           <Text style={styles.title} >{title}</Text>
        </TouchableOpacity>
    )


}

export default MenuItem

const styles = StyleSheet.create({
    title: {
        marginRight:10,
        fontWeight: "500",
        color:Colors.GRAY
    },

})
