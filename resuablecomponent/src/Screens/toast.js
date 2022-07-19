import React, {useState } from "react";
import HeaderBar from "../Components/Header";
import { View } from "react-native";
import Snackbar from "../Components/Toast";

export default ToastMessage = ({ navigation, route }) => {
    const [openSnackbar, setOpenSnackBar] = useState(true)
    return (
        <View>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Custom Toast'}
                handleLeftIconPress={() => navigation.goBack()} />
            <Snackbar
                visible={openSnackbar}
                position="top"
                type={'warning'}
                message={'You got new message!'}
                onHide={() => setOpenSnackBar(false)}
            />
            <View style={{marginTop: 20}}/>
            <Snackbar
                visible={openSnackbar}
                position="top"
                type={'success'}
                message={'Congratuallation! You have successfully created item.'}
                onHide={() => setOpenSnackBar(false)}
            />
            <View style={{marginTop: 20}}/>
            <Snackbar
                visible={openSnackbar}
                position="top"
                message={'You have deleted item successfully'}
                onHide={() => setOpenSnackBar(false)}
            />
        </View>
    );
}
