import React from "react";
import { View , Text} from "react-native";

import { BarChart } from "react-native-gifted-charts";


export default DisplayStackedBarChart = ({ data, onDataPointClick, width, height }) => {
    return (
        <BarChart
            width={width}
            rotateLabel
            barWidth={12}
            spacing={40}
            noOfSections={4}
            barBorderRadius={6}
            stackData={data}
            renderTooltip={(item, index) => {
                return (
                  <View
                    style={{
                      paddingHorizontal: 10,
                      borderRadius: 10,
                      backgroundColor: 'pink',
                    }}>
                    {item.stacks.map(stackItem => {
                      return <Text>{stackItem.value}</Text>;
                    })}
                  </View>
                );
              }}
        />
    )
}

