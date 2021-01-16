import React from 'react'
import {Text, StyleSheet, TouchableOpacity} from 'react-native'
import {windowWidth,windowHeight} from '../functions/Dimensions'

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#eb5c5c',
        borderRadius: 80,
        width: windowWidth/1.4,
        height: windowHeight/20,
        justifyContent: 'center',
        alignItems: 'center' 
    },
    text: {
        fontSize: 20,
        color: '#ffffff',
    }

})

const Button=({label,onPress})=>{
  return(
    <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  )
};

export default Button;