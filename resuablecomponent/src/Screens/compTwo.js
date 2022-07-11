import React from 'react';
import { View } from 'react-native';
import ButtonIcon from '../Components/Button/ButtonIcon';
import  CustomButton  from '../Components/Button/CustomButton'
import HeaderBar from '../Components/Header';
export default CompTwo = ({ navigation }) => {
    return (
        <View style={{flex:1}}>
            <HeaderBar 
                leftIconName= {'chevron-left'}
                text={'Button'}
                handleLeftIconPress={()=>navigation.goBack()}
            />
            <View style={{marginVertical:60}}/>
            <CustomButton
               iconName= {'search'}
               text= {'Search'}
               textStyle={{color:'#fff'}}
               iconStyle={{color:'#fff'}}
               style={{marginHorizontal: 40, backgroundColor: 'red', borderRadius: 5}}
            />
            <View style={{marginVertical:40, justifyContent:'center', alignItems:'center'}}/>
            <ButtonIcon iconName={'phone-android'} style={{alignSelf:'center'}} />
        </View>
    );
};

