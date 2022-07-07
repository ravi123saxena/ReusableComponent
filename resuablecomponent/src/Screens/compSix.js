import React from 'react';
import { View, Text } from 'react-native';
import CustomDropDown from '../Components/Button/DropDown'

export default CompSix = ({ navigation }) => {
    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil'
    ];
    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF', alignItems: 'center' }}>
            <CustomDropDown
                countries={countries}
                onSelect={(selectedItem, index) => console.log('selected item', selectedItem, index)}
            />
        </View>
    );
};
