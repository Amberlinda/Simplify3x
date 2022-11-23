import React from 'react';
import { View, StyleSheet } from 'react-native';
import { VictoryPie, VictoryContainer, VictoryChart, VictoryTheme,VictoryAxis } from "victory-native";

const PieChartCont = ({
    data
}) => {

      
  return (
    <VictoryPie
        data={data}
        animate={{
            duration: 2000
        }}
    />
  )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f5fcff",
      border:"1px solid #000"
    }
  });

export default PieChartCont
