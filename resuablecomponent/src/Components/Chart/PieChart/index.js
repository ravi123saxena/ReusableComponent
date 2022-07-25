//https://cube.dev/blog/react-native-charts-with-cubejs-victory
//https://jsfiddle.net/boygirl/z7x34s2y/3/

import React from "react";
import { View } from "react-native";
import { VictoryPie, VictoryChart, VictoryTheme, VictoryLabel, VictoryLegend } from "victory-native";


export default DonutPieChart = ({ data, containerStyle, width, chartColor }) => {
    const legendDataWithStyle = data.map((dateItem, index) => {
        return { name : dateItem.x, symbol: { fill: chartColor[index], type: "square" } }})

    return (
        <View style={[styles.container, containerStyle]}>
            <VictoryChart domainPadding={10} width={width} theme={VictoryTheme.material}>
                <VictoryPie
                    //startAngle={-90}
                    //endAngle={90}
                    animate={{
                        duration: 2000,
                        easing: "bounce"
                    }}
                    style={{
                        labels: {
                            fill: '#000',
                            fontSize: 15,
                            padding: 7,
                        },
                    }}
                    data={data}
                    innerRadius={50} // for pie chart 0
                    colorScale={chartColor}
                />
                {/* <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20 }}
                    x={155} y={180}
                    text="85%"
                /> */}
                <VictoryLegend x={width - 50} y={0}
                    title="Totals"
                    centerTitle
                    orientation="vertical"
                    gutter={20}
                    style={{
                        title: { fontSize: 15 }
                    }}
                    data={legendDataWithStyle}
                    standalone={false}
                />
            </VictoryChart>
        </View>
    )
}

