import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import { DisplayModalWithTextInput } from '../Components/Modal/ModalWithTextInput';
import { styles } from '../Components/styles/styles';
import { STATUS } from '../constants/constants';

export default CompEight = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
    const [templateName, setTemplateName] = useState({ value: '', borderColor: STATUS.inactive, error: '' })
    const [templateDescription, setTemplateDescription] = useState({ value: '', borderColor: STATUS.inactive, error: '' })

    const handleModalClose = () => {
        setVisible(false)
    };

    const handleNameChange = (text) => {
        setTemplateName({
            ...templateName,
            value: text,
        })
    };

    const handleDescriptionChange = (text) => {
        setTemplateDescription({
            ...templateDescription,
            value: text,
        })
    };

    return (
        <View style={{ flex: 1, }}>
             <HeaderBar
                leftIconName={'chevron-left'}
                text={'Modal With TextInput'}
                handleLeftIconPress={() => navigation.goBack()} />
             <DisplayModalWithTextInput
                display={visible}
                templateName={templateName}
                templateDescription={templateDescription}
                handleNameChange={handleNameChange}
                handleDescriptionChange={handleDescriptionChange}
                headingText={'Modal With Text Input'}
                buttonText={'Continue'}
                onConfirm={handleModalClose}
                onClose={handleModalClose}
                showCancelButton={true}
                customModalContainerStyle={styles.viewModalHeight}
            /> 
            </View>
    );
};

