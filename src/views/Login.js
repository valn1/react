import React, {useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Button,
    View,
    TextInput,
    StatusBar,
} from 'react-native';
import * as AsyncStorage from "react-native";


export default (props) => {
    const [tsenha, setSenha]=useState()
    const [tnome, setNome]=useState()



    function submit(){
        props.navigation.navigate('Home')
    }
    function signin(){
        props.navigation.navigate('Signin')
    }


    return (
            <SafeAreaView>
                <TextInput
                    placeholder='Login'
                    value={tnome}
                    onChangeText={tnome=> setNome(tnome)}
                />

                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    value={tsenha}
                    onChangeText={tsenha=> setSenha(tsenha)}
                />
                <Button
                    title='log in'
                    onPress={
                        submit
                    }
                />
                <Button
                    title='sign in'
                    onPress={
                        signin
                    }
                />
            </SafeAreaView>

    );
};

const styles = StyleSheet.create({

});