import React from "react";
import { View } from "react-native";
import { VictoryChart, VictoryTheme, VictoryArea } from "victory-native";

export default AreaChart = ({ data, containerStyle, xPos, yPos, width }) => {
    return (
        <View style={[styles.container, containerStyle]}>
            <VictoryChart domainPadding={10} width={width} theme={VictoryTheme.material}>
                <VictoryArea
                    animate={{
                        onLoad: { duration: 1000 },
                        duration: 1000,
                        easing: "bounce"
                    }}
                    style={{
                        data: {
                            fill: 'url(#gradientStroke)',
                            stroke: '#1E93FA',
                            strokeWidth: 2
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

