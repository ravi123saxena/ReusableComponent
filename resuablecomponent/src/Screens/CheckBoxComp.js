import React, { useRef, useState } from "react";
import HeaderBar from "../Components/Header";
import { View } from "react-native";
import CheckBox from "../Components/Checkbox";

export default CheckBoxComp = ({ navigation, route }) => {
   let [checked, setChecked] = useState(true)
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'} 
                text={'Context Menu'}
                handleLeftIconPress={() => navigation.goBack()} />
             <CheckBox 
             style={{alignSelf:'center', borderColor:'blue', marginVertical:60}}
             isChecked={checked}
             handlePress={() => checked ? setChecked(false) : setChecked(true)}/>
        </View>
    );
}
