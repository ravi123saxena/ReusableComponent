import React from "react";
import { View, Text } from "react-native";
import {PieChart} from "react-native-gifted-charts";


export default DisplayPieChart = ({ data, onDataPointClick,showDonut }) => {
    const renderLegend = (text, color) => {
        return (
          <View style={{flexDirection: 'row', marginBottom: 12}}>
            <View
              style={{
                height: 18,
                width: 18,
                marginRight: 10,
                borderRadius: 4,
                backgroundColor: color || 'white',
              }}
            />
            <Text style={{color: color, fontSize: 16}}>{text || ''}</Text>
          </View>
        );
      };
    return (
    <View style={{alignItems:'center', justifyContent:'center'}}>
        <PieChart
            data={data}
            donut={showDonut}
            onPress={(item, index) => {
                onDataPointClick(item)
            }}
            innerCircleColor="#414141"
            innerCircleBorderWidth={4}
            innerCircleBorderColor={'white'}
            textColor={'#000'}
            showValuesAsLabels={true}
            showText
            textBackgroundRadius={18}
            textSize={12}
            labelsPosition={'outward'}
            showTextBackground={true}
            centerLabelComponent={() => {
              return (
                <View>
                  <Text style={{color: 'white', fontSize: 36}}>90</Text>
                  <Text style={{color: 'white', fontSize: 18}}>Total</Text>
                </View>
              );
            }}
         />
         <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          {renderLegend('SUN', 'rgba(131, 167, 234, 1)')}
          {renderLegend('MON', 'red')}
          {renderLegend('TUE', 'green')}
       
        </View>
      </View>
    )
}

