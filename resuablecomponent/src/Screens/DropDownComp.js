import React from 'react';
import { View } from 'react-native';
import CustomDropDown from '../Components/Button/DropDown'
import HeaderBar from '../Components/Header';

export default DropDownComp = ({ navigation }) => {
    const countries = [
        'Egypt',
        'Canada',
        'Australia',
        'Ireland',
        'Brazil'
    ];
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Drop Down'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#FFF', alignItems: 'center' }}>
                <CustomDropDown
                    countries={countries}
                    onSelect={(selectedItem, index) => console.log('selected item', selectedItem, index)}
                />
            </View>
        </>
    );
};
