import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import AreaChart from '../../Components/Chart/AreaChart';
import DisplayBarChart from '../../Components/Chart/BarChart';
import DisplayLineChart from '../../Components/Chart/LineChart';
import DisplayPieChart from '../../Components/Chart/PieChart';
import HeaderBar from '../../Components/Header';
import RadioGroup from '../../Components/RadioGroup/radiogroup';
import { DEVICE_WIDTH } from '../../constants/constants';

const data = [
    { year: '2011', earnings: 13000, fill: 'red' },
    { year: '2012', earnings: 16500, fill: 'blue' },
    { year: '2013', earnings: 14250, fill: 'green' },
    { year: '2014', earnings: 19000, fill: 'pink' }
];


const LineChartData = [
    {value:50, label: 'Jan'}, 
    {value:80, label: 'Feb'}, 
    {value:90, label: 'MAR'}, 
    {value:70, label: 'APR'},
    {value:70, label: 'MAY'},
    {value:70, label: 'JUNE'}
];

const BarChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "June"],
    datasets: [
      {
        data: [70, 78, 60, 80, 99, 90]
      }
    ]
  };

const chartConfig = {
    backgroundColor: "#fff",
    backgroundGradientFrom: "#fff",
    backgroundGradientTo: "#fff",
    decimalPlaces: 2, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForBackgroundLines: {
        strokeDasharray: "" // solid background lines with no dashes
    },
    propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#000"
    },
}

const PieChartData = [
    {
      label: 'SUN',
      value: 50,
      color: "rgba(131, 167, 234, 1)",
    },
    {
        label: 'MON',
        value: 70,
        color: "red",
    },
    {
        label: 'TUE',
        value: 80,
        color: "green",
    },
    {
        label: 'WED',
        value: 90,
        color: "yellow",
    },
    {
        label: 'THRS',
        value: 110,
        color: "#000",
    },
    {
        label: 'FRI',
        value: 120,
        color: "blue",
    },
    {
        label: 'SAT',
        value: 40,
        color: "pink",
    },
  ];

var radio_option = [
    { id: 0, label: 'Line Chart' },
    { id: 1, label: 'Bar Chart' },
    { id: 2, label: 'Pie Chart' },
];

export default ChartComponent = ({ navigation }) => {
    const [chart, setChart] = useState({ id: 0 })

    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Charts'}
                handleLeftIconPress={() => navigation.goBack()} />

            <View style={{ flexBasis: '20%', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ marginHorizontal: 20, marginBottom: 20, alignItems: 'center' }}>
                    <Text style={{ margin: 10 }}>Chart Type</Text>
                    <RadioGroup
                        horizontal
                        options={radio_option}
                        onChange={(value) =>setChart(value)}
                        activeButtonId={0}
                    />
                </View>
            </View>
            <View style={{flexBasis: '80%', justifyContent: 'flex-start', alignItems: 'center' }}>
                {chart.id == 0 && <DisplayLineChart
                    data={LineChartData}
                    isBazier={true}
                    showAreaChart={false}
                    width={DEVICE_WIDTH - 60}
                    height={260}
                    onDataPointClick={({label, value}) => Alert.alert('Message', `You clicked  ${label} : ${value}`)}
                />}
                {chart.id == 1 && <DisplayBarChart
                    data={LineChartData}
                    onDataPointClick={({label, value}) => Alert.alert('Message', `You clicked  ${label} : ${value}`)}
                    width={DEVICE_WIDTH - 60}
                    height={260}
                />}
                {chart.id == 2 && <DisplayPieChart
                    data={PieChartData}
                    showDonut={false}
                    onDataPointClick={({label, value}) => Alert.alert('Message', `You clicked  ${label} : ${value}`)}
                />}
            </View>
        </>
    );
};


