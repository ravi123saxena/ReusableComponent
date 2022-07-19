import React, {useState} from 'react';
import { View } from 'react-native';
import HeaderBar from '../Components/Header';
import Tooltip from '../Components/ContextMenu';

export default CompSixteen = ({ navigation }) => {
    const [visible, setVisible] = useState(false);

    const hideMenu = () => setVisible(false);
  
    const showMenu = () => setVisible(true);

    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Context Menu'}
                handleLeftIconPress={() => navigation.goBack()} />
             <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Tooltip 
                   visible={visible}
                   anchorname={'Show Menu'}
                   showMenu={showMenu}
                   hideMenu={hideMenu}
                   item1={'# Settings'}
                   item2={'# About'}
                   item3={'# Profile'}
                   item4={'# History'}
                />
             </View>   
            
      
        </>
    );
};
