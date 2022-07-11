import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import navigationStrings from '../constants/navigationStrings';

export default Home = ({ navigation, routes }) => {
  const DATA = ['CHAT CARD', 'CUSTOM BUTTON', 'IMAGE CARD', 'POST CARD', 'IMAGE CARD WITH SHADOW TITLE',
'DROPDOWN BUTTON', 'ON-BOARDING', 'MODAL WITH TEXT', 'MODAL WITH IMAGE', 'MODAL WITH TEXTINPUT', 'CUSTOM DIALOG BOX',
'CHECKBOX', 'ACTION SHEET', 'SWITCH BUTTON', 'CUSTOM ALERT', 'CONTEXT MENU', 'INFO BLOCK']

  const navigationArray = [navigationStrings.COMP_ONE, navigationStrings.COMP_TWO, navigationStrings.COMP_THREE,
    navigationStrings.COMP_FOUR, navigationStrings.COMP_FIVE, navigationStrings.COMP_SIX, navigationStrings.COMP_SEVEN,
    navigationStrings.COMP_EIGHT, navigationStrings.COMP_NINE, navigationStrings.COMP_TEN, navigationStrings.COMP_ELEVEN,
    navigationStrings.COMP_TWELVE, navigationStrings.COMP_THIRTEEN, navigationStrings.COMP_FOURTEEN, navigationStrings.COMP_FIFTEEN,
    navigationStrings.COMP_SIXTEEN, navigationStrings.COMP_SEVENTEEN]
 
    const onPress = (index) => {
    navigation.navigate(navigationArray[index]) ;    
  }
  const renderItems = ({item, index})=>{
    return(
        <TouchableOpacity onPress={() => onPress(index)} style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'#000'}}>{item}</Text>
        </TouchableOpacity>
    )
  }

  return (
    <View style={{flex:1, marginVertical:10}}>
      <FlatList
        data={DATA}
        ItemSeparatorComponent={() => (
            <View style={{margin: 10, backgroundColor: "red", height: 1 }} />
        )}
        renderItem={(item, index) => renderItems(item, index)}
      />
    </View>
  );
};
