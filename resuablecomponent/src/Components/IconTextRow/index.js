import React from 'react';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Touchable from '../../Components/Touchable';

const IconTextRow = ({
  iconName,
  customIcon,
  text,
  handlePress,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  textStyle,
  style,
}) => {
  const iconComponent = customIcon || <Icon name={iconName} style={[styles.icon, iconStyle]} />;

  return (
    <Touchable
      onPress={handlePress}
      disabled={!handlePress}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
      style={[styles.container, style]}
    >
      {iconComponent}
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </Touchable>
  );
};

export default IconTextRow;
