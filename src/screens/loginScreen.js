import React, { useEffect, useState } from 'react'
import { StyleSheet,View, Text, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import InputFields from '../components/inputFields';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../components/Header';
import CustomBtn from '../components/customBtn';

const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState()
    const [pass,setPass] = useState()

    const loginHandler = () => {
        // const sampleEmail = "someemail@gmail.com"
        const sampleEmail = "a"
        // const samplePass = "somePass@123"
        const samplePass = "b"
        if(email === sampleEmail && samplePass === samplePass){
            AsyncStorage.setItem("token",pass)
            navigation.navigate('index')
        }else{
            ToastAndroid.showWithGravityAndOffset(
                "Invalid credentials",
                ToastAndroid.SHORT,
                ToastAndroid.BOTTOM,
                25,
                30
            )
        }
    }

    useEffect(() => {
        const token = AsyncStorage.getItem("token")
        console.log(token)
        if(token && token === "somePass@123"){
            navigation.navigate("Home")
        }
    },[])

    return(
        <View style={styles.container}>
            <Header>Welcome back !</Header>
            <View style={styles.inputFieldsCont}>
                <InputFields
                    value={email}
                    placeholder="Email address"
                    autofill={true}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    onChangeText={text => setEmail(text)}
                />
                <InputFields
                    value={pass}
                    placeholder="Password"
                    textContentType="password"
                    secureTextEntry={true}
                    onChangeText={text => setPass(text)}
                />
                <CustomBtn
                    text="Login"
                    loginHandler={loginHandler}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        padding:10
    },
    inputStyle:{
        border:"1px solid #ccc"
    }
})

export default LoginScreen;