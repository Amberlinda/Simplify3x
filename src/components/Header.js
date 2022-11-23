import React from "react";
import { StyleSheet, Text } from "react-native";

const Header = props => {
    return <Text style={styles.headerText}>{props.children}</Text>
}

const styles = StyleSheet.create({
    headerText:{
        textAlign:"center",
        fontSize:25,
        textTransform:"uppercase",
        fontWeight:"bold",
        marginTop:110,
        marginBottom:"20%"
    },
})

export default Header