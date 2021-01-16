import React from 'react'
import { View,StyleSheet,Image, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'
import TextIn from '../textInput/TextIn'
import {windowWidth,windowHeight} from '../functions/Dimensions'

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginVertical: 40       
    },
    margen: {
        marginVertical: 15,
        width: windowWidth/1.4,
        height: windowHeight/10,
    },
    margenText:{
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        marginVertical: 320,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    text2:{
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#eb5c5c'
    }
})

const Login = ()=>{
    return(
        <>
        <View style={styles.container}>
        <View style={styles.margen}>
        <Label text={'Log in to your'}></Label>
        <Label text={'account'}></Label>
        </View>
        <TextIn placeholder={'Email'}></TextIn>
        <TextIn placeholder={'Pasword'}></TextIn>
        <View style={styles.margen}>    
        <Button label={'Log in'}></Button>
        </View>
        <View style={styles.margenText}>
        <Text style={styles.text}>Don't have an account?</Text>
        <Text style={styles.text2}>Sing up</Text>
        </View>
        </View>
        </>
    )
};

export default Login;