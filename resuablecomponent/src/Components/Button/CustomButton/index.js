// import React from 'react';
// import styled from 'styled-components/native';
// import { Color, Fonts } from '../../styles/themes';
// import styles from './styles';
// import { View } from 'react-native';

// /**
//  * Button
//  * @description Wrapped React-native Button component with styled-components. Please use this component instead React native's
//  * @param {string} text - button text
//  * @param {primary=} optional parameter for background color
//  * @param {isRoundedCorner=} optional parameter for rounded corners
//  * @param {*} otherProps - default component props
//  */
// const ButtonWrapper = styled.TouchableOpacity`
//   height: 48px;
//   background-color: ${props =>
//     props.disabled
//       ? Color.action.disableBlue
//       : props.primary
//       ? Color.action.active
//       : Color.action.default};
//   border: ${props =>
//     props.primary ? 'none' : `1px solid ${Color.action.primary.active}`};
//   border-radius: ${props => (props.isRoundedCorner ? 7.5 : 0)};
//   display: flex;
//   justify-content: center;
// `;

// const ButtonText = styled.Text`
//   color: ${props =>
//     props.primary ? Color.action.default : Color.action.primary.active};
//   font-size: 16px;
//   letter-spacing: 0.5px;
//   text-align: center;
//   line-height: 24px;
//   text-transform: uppercase;
//   font-family: ${Fonts.fonts.extraBold};
// `;

// const Button = ({ text, ...otherProps }) => {
//   return (
//     <ButtonWrapper {...otherProps}>
//       <ButtonText primary={otherProps.primary}>{text}</ButtonText>
//     </ButtonWrapper>
//   );
// };

// export const CustomButton = ({ text, onPress, disabled = false }) => {
//   return (
//     <View style={styles.viewButton}>
//       <Button
//         style={styles.buttonStyle}
//         text={text}
//         onPress={onPress}
//         disabled={disabled}
//         primary
//         isRoundedCorner
//       />
//     </View>
//   );
// };

// export default Button;

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


