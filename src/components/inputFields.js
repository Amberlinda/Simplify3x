import React from "react";
import { View,TextInput, StyleSheet } from 'react-native'

const InputFields = props => {
    return(
        <View style={styles.inputCont}>
            <TextInput
               {...props}
               style={styles.textInputStyle}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputCont:{
        backgroundColor: "#ccc",
        borderRadius:10,
        marginBottom:20
    },
    textInputStyle:{
        padding: 15,
    }
})

export default InputFields