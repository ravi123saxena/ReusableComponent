import React from "react";

import { BarChart } from "react-native-gifted-charts";


export default DisplayBarChart = ({ data, onDataPointClick, width, height }) => {
    return (
        <BarChart
            data={data}
            width={width}
            height={height}
            yAxisThickness={1}
            barBorderRadius={4}
            xAxisThickness={1}
            frontColor={'rgba(100,220,100,1)'}
            topColor={'rgba(100,255,100,0.8)'}
            sideColor={'rgba(100,240,100,1)'}
            onPress={(item, index) => {
                onDataPointClick(item)
            }}
        />
    )
}

