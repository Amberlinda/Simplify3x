import React from "react";
import { VictoryBar, VictoryAxis, VictoryChart, VictoryTheme } from "victory-native";
  
const BarChartCont = ({
    data
}) => {


return (
    <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
        style={{background:{fill:"#ccc"}}}
    >
        <VictoryAxis
        tickValues={[1, 2, 3, 4]}
        tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
        dependentAxis
        tickFormat={(x) => (`$${x / 1000}k`)}
        />
        <VictoryBar
        data={data}
        x="quarter"
        y="earnings"
        />
    </VictoryChart>
    )
}

export default BarChartCont