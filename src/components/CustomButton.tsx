import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'

import { CustomButtonProps } from './Interfaces';
import Colors from '../styles/Colors';





const CustomButton: React.FC<CustomButtonProps> = ({ title, onPress }) => {

    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )


}

export default CustomButton

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        backgroundColor: Colors.PRIMARYCOLOR,
        paddingVertical: 10,
        paddingHorizontal: 20,


    },
    title: {
        fontWeight: "500",
        color:"white"
    },

})
