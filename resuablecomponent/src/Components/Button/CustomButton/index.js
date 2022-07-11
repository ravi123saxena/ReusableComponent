import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styles/styleConstants';
import Touchable from '../../Touchable';

const CustomButton = ({
  iconName,
  customIcon,
  iconRight,
  text,
  textLeft,
  handlePress,
  disabled,
  showLoader,
  loaderColor,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  showShadow,
  style,
  iconContainerStyle,
  iconStyle,
  textStyle,
  testID,
}) => {
  const textLeftContainerStyles = textLeft && styles.textLeftContainer;
  const textLeftIconStyles = textLeft && !iconRight && styles.textLeftIcon;
  const iconRightStyles = iconRight && styles.iconRight;
  const shadowStyles = showShadow && styleConstants.shadows.small;

  let iconComponent;

  if (!showLoader && customIcon) {
    iconComponent = (
      <View style={[styles.iconContainer, textLeftIconStyles, iconRightStyles, iconContainerStyle]}>
        {customIcon}
      </View>
    );
  } else if (iconName) {
    iconComponent = (
      <View style={[styles.iconContainer, textLeftIconStyles, iconRightStyles, iconContainerStyle]}>
        <MaterialIcon name={iconName} style={[styles.icon, iconStyle]} />
      </View>
    );
  }

  const textComponent = !showLoader ? <Text style={[styles.text, textStyle]}>{text}</Text> : null;

  const loaderComponent = showLoader && <ActivityIndicator size="small" color={loaderColor} />;

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.button, shadowStyles, textLeftContainerStyles, style]}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
      disabled={disabled}
      testID={testID}
    >
      {iconComponent}
      {textComponent}
      {loaderComponent}
    </Touchable>
  );
};


export default CustomButton;


