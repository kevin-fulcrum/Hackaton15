import React from 'react'
import { View,StyleSheet,Image, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'
import TextIn from '../textInput/TextIn'
import {windowWidth,windowHeight} from '../functions/Dimensions'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    margen: {
        marginVertical: 15,
        width: windowWidth/1.4,
        height: windowHeight/10,
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

const Create = ()=>{
    return(
        <>
        <View style={styles.container}>
        <View style={styles.margen}>
        <Label text={'Create your'}></Label>
        <Label text={'account'}></Label>
        </View>
        <TextIn placeholder={'Username'}></TextIn>
        <TextIn placeholder={'Email'}></TextIn>
        <TextIn placeholder={'Pasword'}></TextIn>
        <TextIn placeholder={'Phone'}></TextIn>
        <View style={styles.margen}>    
        <Button label={'Log in'}></Button>
        </View>
        <View style={styles.margenText}>
        <Text style={styles.text}>By clicking Sing up you agree to the our</Text>
        <Text style={styles.text}>terms and Conditions</Text>
        </View>
        </View>
        </>
    )
};

export default Create;