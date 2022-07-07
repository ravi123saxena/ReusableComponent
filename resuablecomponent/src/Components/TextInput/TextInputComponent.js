/*
 *          COPYRIGHT (c) 2021
 *          HONEYWELL INC.,
 *          ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a trade secret.
 * Legal rights of Honeywell Inc. in this software is distinct from ownership of any medium
 * in which the software is embodied. Copyright or trade secret notices included must be
 * reproduced in any copies authorized by Honeywell Inc.
 *
 */

import { TouchableOpacity, View } from 'react-native';
import { style } from './Styles';
import React, { useState } from 'react';
import { Color } from '../../Components/styles/themes';
import Text from '../TextInputHelper/Text';
import TextInput from '../TextInputHelper/TextInput';
import { STATUS, KEYBOARD_TYPES } from '../../constants/constants';
import { PasswordHide, PasswordShow } from '../../assets/images';
/**
 * Text
 * @description Custom coponent for common HUETextField with title on the top
 * @param {string} fieldTitle
 * @param {string} keyboardType - 'default' | 'number-pad' | 'decimal-pad' | 'numeric' | 'email-address' | 'phone-pad'
 * @param {string} placeholder
 * @param {string} autoCapitalize - 'none' | 'characters' | 'words' | 'sentences'
 * @param {boolean} autoCorrect
 * @param {boolean} autoFocus
 * @param {useCallback(() => {callback},[input],)} onChangeText
 * @param {string} value
 * @param {boolean} editable
 * @param {boolean} isMandatory
 * @param {boolean} isEditable
 * @param {string}  borderColor
 */

const TextInputComponent = ({
  fieldTitle = '',
  keyboardType = KEYBOARD_TYPES.default,
  autoCapitalize = 'sentences',
  autoCorrect = false,
  onChangeText = null,
  value = '',
  isMandatory = true,
  secureTextEntry = false,
  isEditable = true,
  borderColor = STATUS.inactive,
  onFocus = null,
  onEndEditing = null,
  errorMsg = '',
  errorMsgColor = Color.status.error,
  maxLength,
  rightView,
  wrapperStyle,
  multiline = false,
  textContentType = 'none',
  handleBorderColor = false,
  textStyle = '',
  enableBlurOnSubmitMultiline = false,
  showPasswordVisibilityIcon = false,
}) => {
  const [isFocussed, setIsFocussed] = useState(false);

  // Flag used when text input is a password or secure entry
  const [hidePassword, setHidePassword] = useState(true);

  let blurOnSubmit = true;
  if (multiline) {
    blurOnSubmit = false;
    if (enableBlurOnSubmitMultiline) {
      blurOnSubmit = true;
    }
  }

  const currentBorder = handleBorderColor
    ? errorMsg
      ? STATUS.error
      : isFocussed
      ? STATUS.active
      : STATUS.inactive
    : borderColor;

  // Eye Icon component to show/hide password
  const PasswordToggler = () => {
    const togglePasswordVisibility = () => {
      setHidePassword(!hidePassword);
    };

    return (
      <TouchableOpacity
        onPress={togglePasswordVisibility}
        style={style.passwordVisibilityIcon}>
        {!hidePassword ? <PasswordShow /> : <PasswordHide />}
      </TouchableOpacity>
    );
  };

  return (
    <React.Fragment>
      <View
        style={[
          rightView ? style.formFieldContainer : style.textInputFieldContainer,
          wrapperStyle,
          isEditable
            ? [style[`${currentBorder}TextInputViewBackgroundColor`]]
            : style.disableViewBackgroundColor,
          multiline ? style.textInputMinHeight : style.textInputHeight,
        ]}>
        <View
          style={[
            style.textInputViewStyle,
            multiline ? style.textInputMinHeight : style.textInputHeight,
          ]}>
          {(isFocussed || value.length > 0) && (
            <Text
              fontType={'medium'}
              style={[
                style.textInputheaderLabel,
                style[`${currentBorder}HeaderLabelTextColor`],
                textStyle,
              ]}>
              {isFocussed || value.length > 0 ? fieldTitle.trim() : ''}
              {isFocussed || value.length > 0 ? (isMandatory ? '*' : '') : ''}
            </Text>
          )}
          <View style={style.textFieldView}>
            <TextInput
              value={value}
              textAlignVertical={isFocussed && multiline ? 'top' : null}
              onChangeText={onChangeText}
              placeholder={
                !isFocussed
                  ? `${fieldTitle.trim()}${isMandatory ? '*' : ''}`
                  : ''
              }
              placeholderTextColor={
                textStyle ? textStyle.color : Color.action.secondary.pressed
              }
              secureTextEntry={secureTextEntry && hidePassword}
              style={[
                style.formTextInputTextField,
                !isEditable && style.disabledTextField,
                textStyle,
              ]}
              height={multiline}
              isPadding={multiline}
              autoCapitalize={autoCapitalize}
              keyboardType={keyboardType}
              autoCorrect={autoCorrect}
              editable={isEditable}
              borderColor={currentBorder}
              textType={isEditable ? STATUS.active : STATUS.inactive}
              onFocus={() => {
                setIsFocussed(true);
                onFocus && onFocus();
              }}
              onEndEditing={() => {
                setIsFocussed(false);
                onEndEditing && onEndEditing();
              }}
              returnKeyType={
                keyboardType === 'numeric' || 'number-pad' ? 'done' : null
              }
              maxLength={maxLength}
              multiline={multiline}
              textContentType={textContentType}
              blurOnSubmit={blurOnSubmit}
            />
          </View>
        </View>
        <View style={style.textInputRightView}>{rightView}</View>
        {showPasswordVisibilityIcon && <PasswordToggler />}
      </View>
      <Text style={[style.textInputBottomLabelLeft, { color: errorMsgColor }]}>
        {errorMsg}
      </Text>
    </React.Fragment>
  );
};

export default TextInputComponent;
