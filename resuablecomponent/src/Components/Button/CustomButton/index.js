import React from 'react';
import styled from 'styled-components/native';
import { Color, Fonts } from '../../styles/themes';
import styles from './styles';
import { View } from 'react-native';

/**
 * Button
 * @description Wrapped React-native Button component with styled-components. Please use this component instead React native's
 * @param {string} text - button text
 * @param {primary=} optional parameter for background color
 * @param {isRoundedCorner=} optional parameter for rounded corners
 * @param {*} otherProps - default component props
 */
const ButtonWrapper = styled.TouchableOpacity`
  height: 48px;
  background-color: ${props =>
    props.disabled
      ? Color.action.disableBlue
      : props.primary
      ? Color.action.active
      : Color.action.default};
  border: ${props =>
    props.primary ? 'none' : `1px solid ${Color.action.primary.active}`};
  border-radius: ${props => (props.isRoundedCorner ? 7.5 : 0)};
  display: flex;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: ${props =>
    props.primary ? Color.action.default : Color.action.primary.active};
  font-size: 16px;
  letter-spacing: 0.5px;
  text-align: center;
  line-height: 24px;
  text-transform: uppercase;
  font-family: ${Fonts.fonts.extraBold};
`;

const Button = ({ text, ...otherProps }) => {
  return (
    <ButtonWrapper {...otherProps}>
      <ButtonText primary={otherProps.primary}>{text}</ButtonText>
    </ButtonWrapper>
  );
};

export const CustomButton = ({ text, onPress, disabled = false }) => {
  return (
    <View style={styles.viewButton}>
      <Button
        style={styles.buttonStyle}
        text={text}
        onPress={onPress}
        disabled={disabled}
        primary
        isRoundedCorner
      />
    </View>
  );
};

export default Button;

