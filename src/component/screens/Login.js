import React, { useState } from 'react'
import { View,StyleSheet, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'
import TextIn from '../textInput/TextIn'
import {windowWidth,windowHeight} from '../functions/Dimensions'
import {useDispatch,useSelector} from 'react-redux'
import LoginUser from '../redux/Actions'


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

const Login = ({navigation})=>{
    const [usuario, setUsuario] = useState('');
    const [clave, setClave] = useState('');



    const dispatch = useDispatch()
    const result = useSelector((state)=>state.UsuarioReducer)
    
    const Ingresar =()=>{
        dispatch(LoginUser({
            username: usuario,
            password: clave
        }))
        if(result.datos.listUser[0].usuario===usuario && result.datos.listUser[0].contra===clave){
            navigation.navigate('Menu')
        }else{
            console.warn('usuario o contraseña incorrecta')
        }
    };
    console.warn('result', result)
    return(
        <>
        <View style={styles.container}>
        <View style={styles.margen}>
        <Label text={'Log in to your'}></Label>
        <Label text={'account'}></Label>
        </View>
        <TextIn placeholder={'Email'} onChangeText={(e)=>{setUsuario(e)}}></TextIn>
        <TextIn placeholder={'Pasword'} onChangeText={(e)=>{setClave(e)}}></TextIn>
        <View style={styles.margen}>    
        <Button label={'Log in'} onPress={()=>{Ingresar()}}></Button>
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