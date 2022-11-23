import React from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { useForm, Controller } from "react-hook-form";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { addData } from "../../store/slice/userDetailsSlice";
import InputFields from "../components/inputFields";
import Header from "../components/Header";
import CustomBtn from "../components/customBtn";
import { useSelector, useDispatch } from 'react-redux'
import {getData,storeData} from '../hooks/asyncFuncs'


const FormScreen = ({navigation}) => {

    const { control, handleSubmit, formState: { errors }, reset } = useForm();

    const dispatch = useDispatch()

    

    const onSubmit = (data) => {
        dispatch(addData(data))
        getData("userDetails",(details) => {
            if(details !== null){
                const userDetails = JSON.parse(details)
                userDetails.push(data)
                storeData("userDetails",JSON.stringify(userDetails))
            }
        })
       
        reset()
        navigation.navigate("detail screen")
    }

    return(
        <ScrollView style={styles.container} keyboardShouldPersistTaps='handled'>
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
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    }
})

export default FormScreen