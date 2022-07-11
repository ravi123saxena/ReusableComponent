import React from 'react';

import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import styleConstants from '../../styles/styleConstants';
import Touchable from '../../Touchable';

const ButtonIcon = ({
  iconName,
  customIcon,
  handlePress,
  disabled,
  showShadow,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  style,
}) => {
  const shadowStyles = showShadow && styleConstants.shadows.regular;

  const iconComponent = customIcon || (
    <MaterialIcon name={iconName} style={[styles.icon, iconStyle]} />
  );

  return (
    <Touchable
      onPress={handlePress}
      style={[styles.button, shadowStyles, style]}
      disabled={disabled}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
    >
      {iconComponent}
    </Touchable>
  );
};

export default ButtonIcon;
