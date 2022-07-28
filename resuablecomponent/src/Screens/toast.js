import React, { useState } from "react";
import HeaderBar from "../Components/Header";
import { Button, View } from "react-native";
import Toast from 'react-native-toast-message'

export default ToastMessage = ({ navigation, route }) => {
    const showToast = () => {
        Toast.show({
            type: 'success',
            position: 'bottom',
            text1: 'Hello',
            text2: 'This is some something 👋',
            visibilityTime: 2000,
            autoHide: true,
            topOffset: 30,
            bottomOffset: 40,
        })
    }
    return (
        <View>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Custom Toast'}
                handleLeftIconPress={() => navigation.goBack()} />
            <Button title="Show Toast" onPress={()=>showToast()}/>    
        </View>
    );
}
