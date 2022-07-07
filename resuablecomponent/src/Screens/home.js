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
'DropDown Button', 'ON-BOARDING', 'MODAL WITH TEXT', 'Modal With Image', 'Modal With TextInput']
  const onPress = (index) => {
    if(index == 0)
        navigation.navigate(navigationStrings.COMP_ONE) 
    else if(index == 1)
        navigation.navigate(navigationStrings.COMP_TWO) 
    else if(index == 2)
        navigation.navigate(navigationStrings.COMP_THREE) 
    else if(index == 3)
        navigation.navigate(navigationStrings.COMP_FOUR) 
    else if(index == 4)
        navigation.navigate(navigationStrings.COMP_FIVE)
    else if(index == 5)
        navigation.navigate(navigationStrings.COMP_SIX)
    else if(index == 6)
        navigation.navigate(navigationStrings.COMP_SEVEN)
    else if(index == 7)
        navigation.navigate(navigationStrings.COMP_EIGHT)
    else if(index == 8)
        navigation.navigate(navigationStrings.COMP_NINE)
    else if(index == 9)
        navigation.navigate(navigationStrings.COMP_TEN)
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
