import React from 'react';

import {
  View,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
} from 'react-native';



const Touchable = ({
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  onPress,
  onLongPress,
  disableFeedback,
  disabled,
  children,
  style,
  testID,
}) => {
  let touchableComponent;

  if (androidRipple && Platform.OS === 'android') {
    touchableComponent = (
      <TouchableNativeFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        background={TouchableNativeFeedback.Ripple(androidRippleColor, androidRippleBorderless)}
        disabled={disabled}
        testID={testID}
      >
        <View style={style}>{children}</View>
      </TouchableNativeFeedback>
    );
  } else if (disableFeedback) {
    touchableComponent = (
      <TouchableWithoutFeedback
        onPress={onPress}
        onLongPress={onLongPress}
        disabled={disabled}
        testID={testID}
      >
        <View style={style}>{children}</View>
      </TouchableWithoutFeedback>
    );
  } else {
    touchableComponent = (
      <TouchableOpacity
        onPress={onPress}
        onLongPress={onLongPress}
        style={style}
        disabled={disabled}
        testID={testID}
      >
        {children}
      </TouchableOpacity>
    );
  }

  return touchableComponent;
};


export default Touchable;
