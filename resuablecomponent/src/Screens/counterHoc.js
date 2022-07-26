//import liraries
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import HeaderBar from '../Components/Header';
import CounterComponent from '../Components/HOC';

const CounterHoc = ({ navigation, increment, setIncrement }) => { 
      return (
        <View style={{flex:1}}>
           <HeaderBar 
            leftIconName= {'chevron-left'}
            text={'HOC'}
            handleLeftIconPress={()=>navigation.goBack()}
            />
            <Text>Counter: {increment}</Text>
            <View style={{marginTop: 20}}></View>
            <Button  title='Click Counter' onPress={setIncrement}/>
        </View>
      );
}

export default CounterComponent(CounterHoc);




  