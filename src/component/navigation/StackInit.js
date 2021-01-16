import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Welcome from '../screens/Welcome'
import Create from '../screens/Create'
import Menu from '../screens/Menu'
import Login from '../screens/Login'

const Stack = createStackNavigator();
const forFade =({current})=>({
    cardStyle:{
        opacity: current.progress
    }
});
const StackInit = () =>{
    return(
        <NavigationContainer>
        <Stack.Navigator
        initialRouteName="Welcome" 
        screenOptions={{cardStyleInterpolator:forFade,}}>
            <Stack.Screen
            name="Welcome"
            component={Welcome}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Create"
            component={Create}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Menu"
            component={Menu}
            options={{header: () => null}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{header: () => null}}
            />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackInit;