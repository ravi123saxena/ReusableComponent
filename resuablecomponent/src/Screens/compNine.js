import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import { DisplayModalWithImage } from '../Components/Modal/ModalWithImage';

export default CompNine = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
   
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Modal With Image'}
                handleLeftIconPress={() => navigation.goBack()} />
           <DisplayModalWithImage
                display={visible}
                message={'This is custom Modal with success'}
                headingText={'Modal Success'}
                buttonText={'Done'}
                onConfirm={()=> setVisible(false)}
                onClose={()=> setVisible(false)}
                customModalContainerStyle={{height: 370}}
                showImage
           />
        </View>
    );
};
