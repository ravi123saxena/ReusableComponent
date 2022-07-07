import React, { useState } from 'react';
import { View } from 'react-native';
import { DisplayModal } from '../Components/Modal/Modal';

export default CompEight = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
    const handleSecondaryButton = () => {
        setVisible(false)
    }
    const onConfirm = () => {
        setVisible(false)
    }
    const handleModalClose = () => {
        setVisible(false)
    }
    return (
        <View style={{ flex: 1, }}>
            <DisplayModal
                display={visible}
                headingText={'Custom Modal'}
                message={'This is a sample modal. This is reusable components throught the components.'}
                buttonText={'OK'}
                secondaryButtonText={'Cancel'}
                handleSecondaryButton={handleSecondaryButton}
                onConfirm={onConfirm}
                onClose={handleModalClose}
                showCancelButton={false}
                isButtonAlignedHorizontally
                modesModal={false}
            />
        </View>
    );
};

