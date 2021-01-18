import React, { useState } from 'react'
import { View,StyleSheet,Image, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'
import TextIn from '../textInput/TextIn'
import {windowWidth,windowHeight} from '../functions/Dimensions'
import {useDispatch,useSelector} from 'react-redux'
import LoginUser from '../redux/Actions'

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

const Create = ({navigation})=>{

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    
    const dispatch = useDispatch()
    const result = useSelector((state)=>state.UsuarioReducer)

    const Crear=()=>{
        dispatch(LoginUser({
            username: username,
            password: password
        }))
        if(result.datos.listUser[0].usuario===username && result.datos.listUser[0].contra===password){
            navigation.navigate('Menu')
        }else{
            console.warn('usuario o contraseña incorrecta')
        }
    };

    return(
        <>
        <View style={styles.container}>
        <View style={styles.margen}>
        <Label text={'Create your'}></Label>
        <Label text={'account'}></Label>
        </View>
        <TextIn placeholder={'Username'} onChangeText={(e)=>{setUsername(e)}}></TextIn>
        <TextIn placeholder={'Email'} onChangeText={(e)=>{setEmail(e)}}></TextIn>
        <TextIn placeholder={'Password'} onChangeText={(e)=>{setPassword(e)}}></TextIn>
        <TextIn placeholder={'Phone'} onChangeText={(e)=>{setPhone(e)}}></TextIn>
        <View style={styles.margen}>    
        <Button label={'Log in'} onPress={()=>{Crear()}}></Button>
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