import React from 'react'
import {createStackNavigator} from "@react-navigation/stack";
import Login from  '../views/Login'
import Home from  '../views/Home'
import Signin from  '../views/signin'


const Stack = createStackNavigator()

export default props=>(
    <Stack.Navigator initialRoutename='Login' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Signin' component={Signin}/>
    </Stack.Navigator>
)