import React, { useEffect, useRef, useState } from "react";
import HeaderBar from "../Components/Header";
import { View, Image } from "react-native";
import FloatingLabelInput from "../Components/FloatingLabelTextInput";

export default TextInputField = ({ navigation, route }) => {
    const [username, setUserName] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [show, setShow] = useState(false);
    return (
        <View>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Floating Input Text'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ padding: 10, justifyContent:'center', alignItems:'center'}}>
                <FloatingLabelInput
                    label={'Username'}
                    inputStyles={{ fontSize: 16 }}
                    customLabelStyles={{ fontSizeFocused: 14 }}
                    value={username}
                    onChangeText={value => setUserName(value)}
                />
                <View style={{ marginTop: 10 }} />
                <FloatingLabelInput
                    label={'Password'}
                    isPassword
                    togglePassword={show == !show}
                    inputStyles={{ fontSize: 16 }}
                    customLabelStyles={{ fontSizeFocused: 14 }}
                    value={userPassword}
                    customShowPasswordComponent={<Image source={require('../assets/images/make_visible_black.png')} />}
                    customHidePasswordComponent={<Image source={require('../assets/images/make_invisible_black.png')} />}
                    onChangeText={value => setUserPassword(value)}
                />
            </View>
        </View>
    );
}
