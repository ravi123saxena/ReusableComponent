import React, { useState } from 'react';
import { View, Text } from 'react-native';
import AreaChart from '../../Components/Chart/AreaChart';
import BarChart from '../../Components/Chart/BarChart';
import LineChart from '../../Components/Chart/LineChart';
import DonutPieChart from '../../Components/Chart/PieChart';
import HeaderBar from '../../Components/Header';
import RadioGroup from '../../Components/RadioGroup/radiogroup';

const data = [
    { year: '2011', earnings: 13000, fill: 'red' },
    { year: '2012', earnings: 16500, fill: 'blue' },
    { year: '2013', earnings: 14250, fill: 'green' },
    { year: '2014', earnings: 19000, fill: 'pink' }
];

const pieData = [
    { y: 10, x: '5%'},
    { y: 90, x: '90%'},
    { y: 50, x: '50%'},
    { y: 20, x: '20%'},
    { y: 70, x: '70%'},
]

var radio_option = [
    {id: 0, label: 'Line Chart' },
    {id: 1, label: 'Bar Chart' },
    {id: 2, label: 'Area Chart' },
    {id: 3, label: 'Pie Chart' },
  ];

export default ChartComponent = ({ navigation }) => {
    const [chart, setChart] = useState({id: 0})

    const chartColor = [
        "#D85F49",
        "#F66D3B",
        "#D92E1D",
        "#D73C4C",
        "#FFAF59",
        "#E28300",
        "#F6A57F"
    ];

    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Charts'}
                handleLeftIconPress={() => navigation.goBack()} />

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{marginHorizontal: 20, alignItems:'center'}}>
                    <Text style={{margin: 10}}>Chart Type</Text>
                    <RadioGroup
                        horizontal
                        options={radio_option}
                        onChange={(value) => setChart(value)}
                        activeButtonId={0}
                    />
                </View>
               
                {chart.id == 0 && <LineChart 
                    data={data}
                    xPos={'year'}
                    yPos={'earnings'}
                    width={300}
                />}
                {chart.id == 1 && <BarChart
                    data={data}
                    xPos={'year'}
                    yPos={'earnings'}
                    width={300}
                />}
                {chart.id == 2 && <AreaChart
                    data={data}
                    xPos={'year'}
                    yPos={'earnings'}
                    width={300}
                />}

               { chart.id == 3 && <DonutPieChart
                    data={pieData}
                    chartColor={chartColor}
                    width={300}
                /> }
            </View>

        </>
    );
};


