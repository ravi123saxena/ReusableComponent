import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
// import DisplayModalWithTextInput from '../Components/Modal/ModalWithTextInput';


export default CompNine = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
    const submitInput = (inputText) => {
        console.log("sendInput (DialogInput#1): "+inputText);
    }
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Modal With Image'}
                handleLeftIconPress={() => navigation.goBack()} />
            {/* <DisplayModalWithTextInput 
                isDialogVisible={visible}
                title={"Modal With Text Input"}
                message={"This is a custom message"}
                hintInput={"Enter Name"}
                submitInput={(inputText) => { submitInput(inputText) }}
                closeDialog={() => setVisible(false)}>
            </DisplayModalWithTextInput> */}
        </View>
    );
};
