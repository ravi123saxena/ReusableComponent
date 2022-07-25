import React from "react";
import { View } from "react-native";
import {  VictoryLine, VictoryChart, VictoryTheme } from "victory-native";

export default LineChart = ({data, containerStyle, xPos, yPos, width}) => {
    return(
        <View style={[styles.container, containerStyle]}>
        <VictoryChart domainPadding={10} width={width} theme={VictoryTheme.material}>
          <VictoryLine 
            animate={{
              onLoad: {duration: 1000},
              duration: 1000, 
              easing: "bounce"
            }}
            style={{
              data: {
                stroke: 'red',
                strokeWidth: 3
              }
            }} 
            data={data} 
            x={xPos} 
            y={yPos} 
          />
        </VictoryChart>
      </View>
    )
}

