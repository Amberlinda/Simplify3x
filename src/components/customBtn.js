import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

const CustomBtn = ({
    loginHandler,
    text,
}) => {
    return(
        <TouchableOpacity
            style={styles.loginBtn}
            onPress={loginHandler}
            // onPress={onPress}
        >
            <Text style={{color:"#fff",textAlign:"center",textTransform:"uppercase"}}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    loginBtn:{
        borderRadius:10,
        backgroundColor:"#3B185F",
        padding:15,
        
    }
})

export default CustomBtn