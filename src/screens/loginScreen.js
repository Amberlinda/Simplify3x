import React, { useEffect, useState } from 'react'
import { StyleSheet,View, Text, TextInput, Button, TouchableOpacity, ToastAndroid } from 'react-native';
import InputFields from '../components/inputFields';
import Header from '../components/Header';
import CustomBtn from '../components/customBtn';
import {getData,storeData} from '../hooks/asyncFuncs'

const LoginScreen = ({navigation}) => {

    const [email,setEmail] = useState()
    const [pass,setPass] = useState()

    

    const loginHandler = () => {
        const sampleEmail = "someemail@gmail.com"
        const samplePass = "somePass@123"
        if(email === sampleEmail && pass === samplePass){
            storeData("token",pass)
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
        // getData("token",(value) => {
        //     console.log(value)
        //     if(value !== null && value === "somePass@123"){
        //         navigation.navigate("index")
        //     }
        // })
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