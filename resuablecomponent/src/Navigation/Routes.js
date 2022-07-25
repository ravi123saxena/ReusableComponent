import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import ChatCardUI from '../Screens/chatCard';
import navigationStrings from '../constants/navigationStrings';
import Home from '../Screens/home';
import textInputField from '../Screens/textInputField';
import ToastMessage from '../Screens/toast';
import RadioButtonGroup from '../Screens/radioButtonGroup';
import ScrollIndicator from '../Screens/customScrollIndicator';
import DateTimePicker from '../Screens/DateTimePicker';
import CustomButtonUI from '../Screens/customButton';
import CardImage from '../Screens/cardImage';
import PostMessageCard from '../Screens/postMessageCard';
import ShadowCard from '../Screens/ShadowCard';
import DropDownComp from '../Screens/DropDownComp';
import LoadingComp from '../Screens/LoadingComp';
import ModalTextComp from '../Screens/ModalTextComp';
import ImageModalWithTitle from '../Screens/ImageModalWithTitle';
import ModalInput from '../Screens/ModalInput';
import CustomDialogComp from '../Screens/CustomDialogComp';
import CheckBoxComp from '../Screens/CheckBoxComp';
import ActionSheetComp from '../Screens/ActionSheetComp';
import Switch from '../Screens/Switch';
import AlertDialog from '../Screens/AlertDialog';
import ToolTipComp from '../Screens/ToolTipComp';
import Rows from '../Screens/Rows.js';
import PickerImageComp from '../Screens/PickerImageComp';
import PickerDocument from '../Screens/PickerDocument';
import DownloadPDFFile from '../Screens/DownloadPDFFile';
import ChartComponent from '../Screens/Charts/ChartComponent';


const Stack = createNativeStackNavigator();

export default Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={navigationStrings.HOME} screenOptions={{headerShown: false}} >
                <Stack.Screen name={navigationStrings.HOME} component={Home} />
                <Stack.Screen name={navigationStrings.CHAT_CARD} component={ChatCardUI} />
                <Stack.Screen name={navigationStrings.CUSTOM_BUTTON} component={CustomButtonUI} />
                <Stack.Screen name={navigationStrings.CARD_IMAGE} component={CardImage} />
                <Stack.Screen name={navigationStrings.POST_CARD} component={PostMessageCard} />
                <Stack.Screen name={navigationStrings.SHADOW_CARD} component={ShadowCard} />
                <Stack.Screen name={navigationStrings.DROP_DOWN} component={DropDownComp} />
                <Stack.Screen name={navigationStrings.LOADING} component={LoadingComp} />
                <Stack.Screen name={navigationStrings.Modal_Text} component={ModalTextComp} />
                <Stack.Screen name={navigationStrings.IMAGE_MODAL} component={ImageModalWithTitle} />
                <Stack.Screen name={navigationStrings.MODAL_INPUT} component={ModalInput} />
                <Stack.Screen name={navigationStrings.CUSTOM_DIALOG} component={CustomDialogComp} />
                <Stack.Screen name={navigationStrings.CHECK_BOX} component={CheckBoxComp} />
                <Stack.Screen name={navigationStrings.ACTION_SHEET} component={ActionSheetComp} />
                <Stack.Screen name={navigationStrings.SWITCH} component={Switch} />
                <Stack.Screen name={navigationStrings.ALERT_DIALOG} component={AlertDialog} />
                <Stack.Screen name={navigationStrings.TOOLTIP} component={ToolTipComp} />
                <Stack.Screen name={navigationStrings.ROWS} component={Rows} />
                <Stack.Screen name={navigationStrings.PICKER} component={PickerImageComp} />
                <Stack.Screen name={navigationStrings.PICK_DOCUMENT} component={PickerDocument} />
                <Stack.Screen name={navigationStrings.DOWNLOAD_PDF} component={DownloadPDFFile} />
                <Stack.Screen name={navigationStrings.TEXTFIELD} component={textInputField}/>
                <Stack.Screen name={navigationStrings.TOAST} component={ToastMessage}/>
                <Stack.Screen name={navigationStrings.RADIOBUTTONGROUP} component={RadioButtonGroup}/>
                <Stack.Screen name={navigationStrings.SCROLL_INDICATOR} component={ScrollIndicator}/>

                <Stack.Screen name={navigationStrings.DATE_PICKER} component={DateTimePicker}/>
                <Stack.Screen name={navigationStrings.LINECHART} component={ChartComponent}/>


            </Stack.Navigator>
        </NavigationContainer>
    )
}

