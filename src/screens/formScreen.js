import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addData } from "../../store/slice/userDetailsSlice";
import InputFields from "../components/inputFields";
import Header from "../components/Header";
import CustomBtn from "../components/customBtn";
import { useSelector, useDispatch } from 'react-redux'

const FormScreen = ({navigation}) => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        console.log(data)
        dispatch(addData(data))
        let userData = AsyncStorage.getItem("userDetails")
        if(typeof userData === 'string'){
            userData = JSON.parse(userData)
            userData.push(data)
            return
        }
        AsyncStorage.setItem("userDetails",JSON.stringify([data]))
        // console.log(userData)
        reset()
        navigation.navigate("detail screen")
    }

    return(
        <View style={styles.container}>
            <Header>Add details</Header>
            
            {errors.fullName && <Text style={{color:"red"}}>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <InputFields
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Full name"
                    textContentType="name"
                />
                )}
                name="fullName"
            />

            {errors.emailAddress && <Text style={{color:"red"}}>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <InputFields
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Email address"
                    keyboardType="email-address"
                    textContentType="emailAddress"
                />
                )}
                name="emailAddress"
            />

            {errors.phone && <Text style={{color:"red"}}>This is required.</Text>}
            <Controller
                control={control}
                rules={{
                maxLength: 100,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                <InputFields
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder="Mobile number"
                    keyboardType="numeric"
                    textContentType="telephoneNumber"
                />
                )}
                name="phone"
            />

            <CustomBtn 
                text="Submit" 
                loginHandler={handleSubmit(onSubmit)} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    }
})

export default FormScreen