import React from 'react';
import {Text, TouchableOpacity } from 'react-native';
import styles from './styles'
export default CustomButton = ({
    btnText,
    onPress,
    border= false,
}) => {
    return (
        <TouchableOpacity
         style={[styles.btnStyle, {backgroundColor: border ? '#fff': '#dc4e41', borderColor: border ? '#000' : null, borderWidth : border ? 1 : 0}]}
         onPress={onPress}
         >
            <Text style={{ fontSize: 16, color: border ? '#000' : '#fff' }}>{btnText}</Text>
        </TouchableOpacity>
    );
};
