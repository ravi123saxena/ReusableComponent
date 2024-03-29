import React, { useRef, useState } from "react";
import HeaderBar from "../Components/Header";
import { View, Text } from "react-native";
import CustomScrollIndicator from "../Components/ScrollIndicator";

export default ScrollIndicator = ({ navigation, route }) => {
   const  booksData = {
        title: 'The Hunger Games',
        description:
          'Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss young sister, Prim, is selected as District 12 female representative, Katniss volunteers to take her place.Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss young sister, Prim, is selected as District 12 female representative, Katniss volunteers to take her place.Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss young sister, Prim, is selected as District 12 female representative, Katniss volunteers to take her place.Winning will make you famous. Losing means certain death.The nation of Panem, formed from a post-apocalyptic North America, is a country that consists of a wealthy Capitol region surrounded by 12 poorer districts. Early in its history, a rebellion led by a 13th district against the Capitol resulted in its destruction and the creation of an annual televised event known as the Hunger Games. In punishment, and as a reminder of the power and grace of the Capitol, each district must yield one boy and one girl between the ages of 12 and 18 through a lottery system to participate in the games. The tributes are chosen during the annual Reaping and are forced to fight to the death, leaving only one survivor to claim victory.When 16-year-old Katniss young sister, Prim, is selected as District 12 female representative, Katniss volunteers to take her place.'
    };
    return (
        <View style={{ flex: 1 }}>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Custom Scroll Indcator'}
                handleLeftIconPress={() => navigation.goBack()} />
            <CustomScrollIndicator 
                data={booksData}
                title={'Custom Scroll Indicator'} />
        </View>
    );
}
