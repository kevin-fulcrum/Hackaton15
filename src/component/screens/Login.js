import React, { useEffect } from 'react'
import { View,StyleSheet,Image, Text } from 'react-native';
import Button from '../button/Button'
import Label from '../label/Label'
import TextIn from '../textInput/TextIn'
import {windowWidth,windowHeight} from '../functions/Dimensions'
import UsuarioReducer from '../redux/Reducer'
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

const usuarios = [{
    username: 'admin',
    password: '123'
}]

const Login = ({navigation})=>{
    const dispatch = useDispatch()
    const result = useSelector((state)=>state.UsuarioReducer)
    useEffect(()=>{
        const userData= async()=>{
            try{
                dispatch(LoginUser(usuarios))
            }catch(e){
                console.warn(e)
            }
        }
    },[dispatch])
    console.warn(result)
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
        <Button label={'Log in'} onPress={()=>{navigation.navigate('Menu')}}></Button>
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