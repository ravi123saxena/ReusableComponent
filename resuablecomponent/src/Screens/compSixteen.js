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
                   item1={'# Label 1'}
                   item2={'# Label 2'}
                   item3={'# Label 3'}
                   item4={'# Label 4'}
                />
             </View>   
            
      
        </>
    );
};
