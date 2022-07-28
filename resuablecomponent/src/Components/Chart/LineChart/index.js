import React from "react";
import {
  LineChart,
} from "react-native-gifted-charts";
import { View , Alert} from "react-native";


export default DisplayLineChart = ({ data, showAreaChart, onDataPointClick, isBazier, width, height }) => {
  return (
      <View>
        <LineChart 
          data={data}
          thickness={1}
          width={width}
          height={height}
          curved={isBazier}
          pressEnabled
          dataPointsRadius={5}
          areaChart={showAreaChart}
          onPress={(item, index) => {
            onDataPointClick(item)
          }}
        />
      </View>
  )
}

