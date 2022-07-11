import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import SwitchControl from '../Components/Switch';

export default CompFourteen = ({ navigation }) => {
    const [toggle, setToggle] = useState(false)
   
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Switch'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <SwitchControl
                    title={'Switch'}
                    handleChange={() => setToggle(!toggle)}
                    switchValue={toggle ? 1 : 0}
                />
            </View>
        </>
    );
};