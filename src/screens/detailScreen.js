import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const DetailScreen = () => {

    const [userDetails,setUserDetails] = useState([])

    useEffect(() => {
        let userData = AsyncStorage.getItem("userDetails")
        console.log(userData)
        if(typeof userData === 'string'){
            userData = JSON.parse(userData)
            setUserDetails(userData)
        }
    },[])

    return(
        <ScrollView style={styles.container}>
            {
                userDetails.length !== 0 ? userDetails.map((el,index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.textStyle}>Full name: {}</Text>
                        <Text style={styles.textStyle}>Email Address: {}</Text>
                        <Text style={styles.textStyle}>Mobile number: {}</Text>
                    </View>
                ))
                : <Text style={{fontSize:20,textAlign:"center"}}>No data to show</Text>
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        padding:20
    },
    card:{
        border:"1px solid #ccc",
        backgroundColor:"#3B185F",
        padding:10,
        borderRadius:10,
        textShadowColor:"#ccc",
        marginBottom: 12
    },
    textStyle:{
        fontSize:18,
        marginBottom:10,
        color:"#fff"
    }
})

export default DetailScreen