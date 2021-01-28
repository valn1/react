import React,{useState} from 'react'
import {View,TextInput,Button}from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default (props)=> {

    const [senha, setSenha]=useState()
    const [csenha, setcSenha]=useState()
    const [nome, setNome]=useState()
    let lista=[]


    const onSubmit = async () =>{

        if (senha===csenha && senha != null){
            updatebd()
            try {
                await AsyncStorage.setItem('userData',JSON.stringify([
                    {name:nome, senha:senha}
                ]));
            } catch (err) {
                console.warn(err)
            }
        }

    }
    const updatebd = async () => {
        try {
            let userData = await AsyncStorage.getItem('userData');

            userData = JSON.parse(userData);
            userData.push({name:nome, senha:senha});
            await AsyncStorage.setItem('userData', JSON.stringify(userData));

        } catch (err) {
            console.warn(err)
        }
        console.log(userData)

    };

    return(
        <View>

            <TextInput placeholder='Nome'
                       value={nome}
                       onChangeText={nome=> setNome(nome)}
            />
            <TextInput placeholder='Senha'
                       value={senha}
                       onChangeText={senha=> setSenha(senha)}
            />
            <TextInput placeholder='Confirme sua Senha'
                       value={csenha}
                       onChangeText={csenha=> setcSenha(csenha)}
            />
            <Button
            title='Cadastrar'
            onPress={onSubmit}
            />
        </View>
    )

}