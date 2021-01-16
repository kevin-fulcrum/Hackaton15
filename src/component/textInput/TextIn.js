import React from 'react'
import {TextInput, StyleSheet, View} from 'react-native'
import {windowWidth,windowHeight} from '../functions/Dimensions'

const styles=StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        borderRadius: 80,
        width: windowWidth/1.4,
        height: windowHeight/20,
        justifyContent: 'center',
        marginVertical: 5
    },
    text: {
        fontSize: 15,
        color: '#ffffff',
        marginLeft: 10
    }

})

const TextIn =({placeholder})=>{
  return(
    <View style={styles.container}>
    <TextInput placeholder={placeholder} style={styles.text}></TextInput>
    </View>
  )
};

export default TextIn;