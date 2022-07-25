import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryTheme, VictoryBar } from "victory-native";

export default BarChart = ({ data, containerStyle, xPos, yPos, width }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <VictoryChart domainPadding={10} width={width} theme={VictoryTheme.material}>
                <VictoryBar
                    animate={{
                        onLoad: { duration: 1000 },
                        duration: 1000,
                        easing: "bounce"
                    }}
                    style={{
                        data: {
                            fill: ({ datum }) => datum.fill || 'black'
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

