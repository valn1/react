import React from 'react'
import  {SafeAreaView,Text}from 'react-native'
import {NavigationContainer} from "@react-navigation/native";
import Stack from './stack'

export default props=>(
    <SafeAreaView style={{flex:1}}>
        <NavigationContainer>
            <Stack/>
        </NavigationContainer>
    </SafeAreaView>
)