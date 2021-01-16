import React from 'react'
import { Text,StyleSheet } from 'react-native'

const styles=StyleSheet.create({
    colorText: {
        color: '#eb5c5c',
        fontWeight: 'bold',
        fontSize: 30
         
    }

})

const Label = ({text})=>{
    return(
        <>
        <Text style={styles.colorText}>{text}</Text>
        </>
    )
};

export default Label;