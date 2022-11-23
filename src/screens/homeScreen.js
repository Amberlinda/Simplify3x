import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BarChartCont from '../components/barChartCont'
import PieChartCont from '../components/pieChartCont'

const HomeScreen = () => {

    const [pieChartData,setPieChartData] = useState([
        { x: "Cats", y: 35 },
        { x: "Dogs", y: 40 },
        { x: "Birds", y: 55 }
    ])

    const [barChartData,setBarChartData] = useState([
        {quarter: 1, earnings: 13000},
        {quarter: 2, earnings: 16500},
        {quarter: 3, earnings: 14250},
        {quarter: 4, earnings: 19000}
        ])

    return(
        <ScrollView style={styles.container}>
            <PieChartCont data = {pieChartData}/>
            <BarChartCont data = {barChartData}/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20,
        marginBottom:"10%"
    }
});

export default HomeScreen