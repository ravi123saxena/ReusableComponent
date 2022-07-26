//import liraries
import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import useCounter from '../Components/CustomHooks/UseCounter';
import HeaderBar from '../Components/Header';

const CustomHooks = ({ navigation }) => {
      const [count, onIncrement] = useCounter(0)
      return (
        <View style={{flex:1}}>
           <HeaderBar 
            leftIconName= {'chevron-left'}
            text={'Custom Hooks'}
            handleLeftIconPress={()=>navigation.goBack()}
            />
            <Text>Hooks Counter: {count}</Text>
            <View style={{marginTop: 20}}></View>
            <Button  title='Click Counter' onPress={onIncrement}/>
        </View>
      );
}

export default CustomHooks;




  