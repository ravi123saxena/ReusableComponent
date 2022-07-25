import React, { useRef, useState } from "react";
import HeaderBar from "../Components/Header";
import { View, Text } from "react-native";
import RadioGroup from "../Components/RadioGroup/radiogroup";


export default RadioButtonGroup = ({ navigation, route }) => {
    const [optionSelected, setSelectedOption] = useState()
    var radiogroup_options = [
        {id: 0, label: 'Button1' },
        {id: 1, label: 'Button2' },
        {id: 2, label: 'Button3' },
        {id: 3, label: 'Button4' },
      ];
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Radio Button'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ margin: 20 }}>
                <RadioGroup
                    options={[
                        {
                            id: 0,
                            labelView: (
                                <Text style={{ flex: 1 }}>
                                    Button label
                                </Text>
                            ),
                        },
                        { id: 1, label: 'Button2' },
                        { id: 2, label: 'Button3' },
                    ]}
                    activeButtonId={0}
                />
            </View>
            <View style={{ margin: 20 }}>
            <RadioGroup
                horizontal
                options={radiogroup_options}
                onChange={(value) => console.log(value)}
            />
            </View>
        </View>
    );
}
