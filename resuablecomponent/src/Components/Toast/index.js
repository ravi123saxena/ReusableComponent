import React, { useEffect, useRef } from "react";
import { View, TouchableOpacity, Text, Button, Animated } from "react-native";
import colors from "./colors";
import styles from "./styles";
import GestureRecognizer from 'react-native-swipe-gestures';
import Ionicons from 'react-native-vector-icons/Ionicons'
import notificationStyles
 from "./styles";
const NotificationTypes = {
  SUCCESS: 'success',
  WARNING: 'warning',
  DANGER: 'danger'
}
export default SnackBarUI = ({ message, position, visible, type, onHide }) => {
  let backgroundColor = '#fff'
  let textColor = '#000'
  const animatedValue = useRef(new Animated.Value(0));
  
  const showSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 1,
      useNativeDriver: false
    }).start();
  };

  const hideSnackBar = () => {
    Animated.timing(animatedValue.current, {
      toValue: 0,
      useNativeDriver: false
    }).start();
  };

  useEffect(() => {
    visible ? showSnackBar() : hideSnackBar()
    // setTimeout(() => {
    //   onHide()
    //   hideSnackBar()
    // }, 3000);
  }, [visible])

  let notificationIcon = <Ionicons name="md-information-circle-outline" size={18} color={colors.BLUE} />

    switch(type) {
    case NotificationTypes.SUCCESS:
      notificationIcon = <Ionicons name="md-checkmark-circle-outline" size={18} color={colors.WHITE} />
      backgroundColor='green'
      textColor= '#fff'
      break
    case NotificationTypes.WARNING:
      notificationIcon = <Ionicons name="warning-outline" size={18} color={colors.BLACK} />
      backgroundColor='yellow'
      textColor= '#000'
      break
    case NotificationTypes.ERROR:
      notificationIcon = <Ionicons name="md-close-circle-outline" size={18} color={colors.WHITE} />
      backgroundColor='red'
      textColor= '#fff'
      break
    default:
      break

    }
  return (
    <Animated.View style={[notificationStyles.container, {
      [position]: animatedValue.current.interpolate({
        inputRange: [0, 1],
        outputRange: [-300, 0]
      }),
    }]}>
      <View style={[notificationStyles.snackBarContainer, notificationStyles[`snackBarStatus${type}`], notificationStyles.defaultShadow, {backgroundColor: backgroundColor}]}>
        <GestureRecognizer
          onSwipeUp={hideSnackBar}
          onSwipeLeft={hideSnackBar}
          onSwipeRight={hideSnackBar}
          config={{
            velocityThreshold: 0.3,
            directionalOffsetThreshold: 80
          }}
          style={notificationStyles.gestureContainer}
        >
          <View style={[notificationStyles.snackBarMessageContainer, {backgroundColor: backgroundColor}]}>
            {notificationIcon}
            <Text style={[notificationStyles.snackBarDesc, {color: textColor}]}>{message}</Text>
          </View>
        </GestureRecognizer>
      </View>
    </Animated.View>
  )
}