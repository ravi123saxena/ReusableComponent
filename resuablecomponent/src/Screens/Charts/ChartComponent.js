import React, { useState } from 'react';
import { View, Text, Alert } from 'react-native';
import DisplayBarChart from '../../Components/Chart/BarChart';
import DisplayStackedBarChart from '../../Components/Chart/StackBar'
import DisplayLineChart from '../../Components/Chart/LineChart';
import DisplayPieChart from '../../Components/Chart/PieChart';
import HeaderBar from '../../Components/Header';
import RadioGroup from '../../Components/RadioGroup/radiogroup';
import { DEVICE_WIDTH } from '../../constants/constants';

const LineChartData = [
    {value:50, label: 'Jan'}, 
    {value:80, label: 'Feb'}, 
    {value:90, label: 'MAR'}, 
    {value:70, label: 'APR'},
    {value:70, label: 'MAY'},
    {value:70, label: 'JUNE'}
];

const stackData = [
    {
      stacks: [
        {value: 10, color: 'orange'},
        {value: 20, color: '#4ABFF4', marginBottom: 2},
      ],
      label: 'Jan',
    },
    {
      stacks: [
        {value: 10, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 15, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'Mar',
    },
    {
      stacks: [
        {value: 14, color: 'orange'},
        {value: 18, color: '#4ABFF4', marginBottom: 2},
      ],
      label: 'Feb',
    },
    {
      stacks: [
        {value: 7, color: '#4ABFF4'},
        {value: 11, color: 'orange', marginBottom: 2},
        {value: 10, color: '#28B2B3', marginBottom: 2},
      ],
      label: 'Mar',
    },
  ];

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
    { id: 2, label: 'Stack BarChart'},
    { id: 3, label: 'Pie Chart' },
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
                 {chart.id == 2 && <DisplayStackedBarChart
                    data={stackData}
                    onDataPointClick={({label, value}) => Alert.alert('Message', `You clicked  ${label} : ${value}`)}
                    width={DEVICE_WIDTH - 60}
                    height={260}
                />}
                {chart.id == 3 && <DisplayPieChart
                    data={PieChartData}
                    showDonut={false}
                    onDataPointClick={({label, value}) => Alert.alert('Message', `You clicked  ${label} : ${value}`)}
                />}
            </View>
        </>
    );
};


