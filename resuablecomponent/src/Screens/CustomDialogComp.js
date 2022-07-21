import React, { useState } from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import CustomAlertDialogbox from '../Components/Modal/CustomAlertDialogbox';

export default CustomDialogComp = ({ navigation }) => {
    const [visible, setVisible] = useState(true)
    const handleCancel = () => {
        setVisible(false)
    }
    const handleConfirm = () => {
        setVisible(false)
    }
      return (
          <View style={{flex:1}}>
             <HeaderBar
                leftIconName={'chevron-left'}
                text={'Alert Dialog Box'}
                handleLeftIconPress={() => navigation.goBack()} />
            <CustomAlertDialogbox
                visible={visible}
                title={'Custom Dialog Box'}
                message={'Are you sure?'}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm}
                primaryTitle={'OK'}   
                secondaryTitle={'CANCEL'}
            />
          </View>
      );
};

