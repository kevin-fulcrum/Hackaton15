import React from 'react'
import { View,StyleSheet,Image, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    margen: {
        marginVertical: 15
    },
    margenText:{
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 15,
    },
    text: {
        fontSize: 15
    },
})

const Welcome = ()=>{
    return(
        <>
        <View style={styles.container}>
        <Image
            source={require('../../resourse/static/logo.png')}
        />
        <View style={styles.margen}>
        <Label text={'Live Tracking'}></Label>
        </View>
        <View style={styles.margenText}>
        <Text style={styles.text}>Real time tracking of your food</Text>
        <Text style={styles.text}>on the app after ordered</Text>
        </View>
        <View style={styles.margen}>    
        <Button label={'Create Account'}></Button>
        </View>
        <Button label={'Login'}></Button>
        </View>
        </>
    )
};

export default Welcome;