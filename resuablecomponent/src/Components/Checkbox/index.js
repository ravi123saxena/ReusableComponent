import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import Touchable from '../Touchable';

const propTypes = {
  isChecked: PropTypes.bool,
  handlePress: PropTypes.func,
  customIcon: PropTypes.node,
  androidRipple: PropTypes.bool,
  androidRippleColor: PropTypes.string,
  androidRippleBorderless: PropTypes.bool, 
};

const defaultProps = {};

const CheckBox = ({
  isChecked,
  handlePress,
  customIcon,
  androidRipple,
  androidRippleColor,
  androidRippleBorderless,
  iconStyle,
  style,
}) => {
  const disableFeedback = Platform.OS === 'ios' || !androidRipple;

  const iconComponent = customIcon || <Icon name="check" style={[styles.icon, iconStyle]} />;

  const checkBoxComponent = isChecked && (
   iconComponent
  );

  return (
    <Touchable
      onPress={handlePress}
      disableFeedback={disableFeedback}
      style={[styles.container, style]}
      androidRipple={androidRipple}
      androidRippleColor={androidRippleColor}
      androidRippleBorderless={androidRippleBorderless}
    >
      {checkBoxComponent}
    </Touchable>
  );
};

CheckBox.propTypes = propTypes;
CheckBox.defaultProps = defaultProps;

export default CheckBox;
