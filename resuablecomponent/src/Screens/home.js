import React from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity
} from 'react-native';
import CustomButton from '../Components/Button/CustomButton';
import navigationStrings from '../constants/navigationStrings';

export default Home = ({ navigation, routes }) => {
  const DATA = ['CHAT CARD', 'CUSTOM BUTTON', 'IMAGE CARD', 'POST CARD', 'IMAGE CARD WITH SHADOW TITLE',
    'DROPDOWN BUTTON', 'LOADING', 'MODAL WITH TEXT', 'MODAL WITH IMAGE', 'MODAL WITH TEXTINPUT', 'CUSTOM DIALOG BOX',
    'CHECKBOX', 'ACTION SHEET', 'SWITCH BUTTON', 'CUSTOM ALERT', 'CONTEXT MENU', 'INFO BLOCK', 'IMAGE PICKER', 'DOCUMENT PICKER', 'DOWNLOAD PDF',
    'TEXTFIELD', 'CUSTOM TOAST', 'RADIO BUTTON GROUP', 'CUSTOM SCROLL INDICATOR', 'DATE_PICKER', 'CHARTS', 'Context', 'HOC', 'HOOKS']

  const navigationArray = [navigationStrings.CHAT_CARD, navigationStrings.CUSTOM_BUTTON, navigationStrings.CARD_IMAGE,
  navigationStrings.POST_CARD, navigationStrings.SHADOW_CARD, navigationStrings.DROP_DOWN, navigationStrings.LOADING,
  navigationStrings.Modal_Text, navigationStrings.IMAGE_MODAL, navigationStrings.MODAL_INPUT, navigationStrings.CUSTOM_DIALOG,
  navigationStrings.CHECK_BOX, navigationStrings.ACTION_SHEET, navigationStrings.SWITCH, navigationStrings.ALERT_DIALOG,
  navigationStrings.TOOLTIP, navigationStrings.ROWS, navigationStrings.PICKER, navigationStrings.PICK_DOCUMENT,
  navigationStrings.DOWNLOAD_PDF, navigationStrings.TEXTFIELD, navigationStrings.TOAST, navigationStrings.RADIOBUTTONGROUP,
  navigationStrings.SCROLL_INDICATOR, navigationStrings.DATE_PICKER, navigationStrings.LINECHART, navigationStrings.LANGUAGE, 
  navigationStrings.COUNTER_HOC, navigationStrings.CUSTOM_HOOKS]


  const renderItems = ({ item, index }) => {
    return (
      <CustomButton
        handlePress={() => navigation.navigate(navigationArray[index])}
        text={item}
        textStyle={{ color: '#fff' }}
        style={{ marginHorizontal: 40, marginVertical: 5, borderWidth: 0, backgroundColor: 'blue', borderRadius: 10 }}
      />
    )
  }

  return (
    <View style={{ flex: 1, marginVertical: 10 }}>
      <FlatList
        data={DATA}
        // ItemSeparatorComponent={() => (
        //   <View style={{ margin: 10, backgroundColor: "red", height: 1 }} />
        // )}
        renderItem={(item, index) => renderItems(item, index)}
      />
    </View>
  );
};
