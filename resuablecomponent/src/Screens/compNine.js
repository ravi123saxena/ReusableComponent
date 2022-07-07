import React, { useState } from 'react';
import { View } from 'react-native';
import {DisplayModalWithImage} from '../Components/Modal/ModalWithImage';
import { styles } from '../Components/styles/styles';

export default CompNine = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
    const handleCloseSuccessModal = () => {
        setVisible(false)
    }
    return (
        <View style={{ flex: 1 }}>
            <DisplayModalWithImage
                display={visible}
                message={'You have succcessfully registered'}
                headingText={'Register'}
                buttonText={'DONE'}
                onConfirm={handleCloseSuccessModal}
                onClose={handleCloseSuccessModal}
                customModalContainerStyle={styles.viewModalHeight}
                showImage
            />
        </View>
    );
};
