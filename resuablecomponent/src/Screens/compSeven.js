import React from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';

export default CompSeven = ({ navigation }) => {
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'On Boarding'}
                handleLeftIconPress={() => navigation.goBack()} />
           
        </View>
    );
};

