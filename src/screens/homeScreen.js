import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import BarChartCont from '../components/barChartCont'
import PieChartCont from '../components/pieChartCont'
import { useSelector, useDispatch } from 'react-redux'
import {getData,storeData} from '../hooks/asyncFuncs'
import { loadData } from "../../store/slice/userDetailsSlice";

const HomeScreen = () => {

    const dispatch = useDispatch()

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

    useEffect(() => {
        getData("userDetails",(data) => {
            if(data !== null){
                console.log(JSON.parse(data))
                dispatch(loadData(JSON.parse(data)))
            }
        })
    },[])

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