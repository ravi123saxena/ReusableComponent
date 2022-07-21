import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import { DisplayModalWithImage } from '../Components/Modal/ModalWithImage';

export default ImageModalWithTitle = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
   
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Modal With Image'}
                handleLeftIconPress={() => navigation.goBack()} />
           <DisplayModalWithImage
                display={visible}
                message={'You have successfully logged out!'}
                headingText={'Message'}
                buttonText={'Done'}
                onConfirm={()=> setVisible(false)}
                onClose={()=> setVisible(false)}
                customModalContainerStyle={{height: 370}}
                showImage
           />
        </View>
    );
};
