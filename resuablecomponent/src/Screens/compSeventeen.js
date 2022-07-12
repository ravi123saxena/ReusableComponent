import React from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import InfoBlock from '../Components/InfoBlock';

export default CompSeven = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Info Block'}
                handleLeftIconPress={() => navigation.goBack()} />   
            
            <InfoBlock 
             title='React native'
             description='Welcome to react native'/>
        </View>
    );
};

