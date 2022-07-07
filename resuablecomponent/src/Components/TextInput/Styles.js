/*
 *          COPYRIGHT (c) 2019
 *          HONEYWELL INC.,
 *          ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a trade secret.
 * Legal rights of Honeywell Inc. in this software is distinct from ownership of any medium
 * in which the software is embodied. Copyright or trade secret notices included must be
 * reproduced in any copies authorized by Honeywell Inc.
 *
 */
import { StyleSheet, Platform } from 'react-native';
import { Fonts, Color } from '../../Components/styles/themes';
import {
  DEVICE_WIDTH,
  normalizeVerticaly,
  normalizeHorizontaly,
  FORM_TEXT_INPUT_CONTAINER_HEIGHT,
} from '../../constants/constants';

export const style = StyleSheet.create({
  headerLabel: {
    color: Color.action.secondary.pressed,
    fontSize: Fonts.fontSizes.fontSize_12,
    paddingHorizontal: '2%',
  },
  inactiveHeaderLabelTextColor: {
    color: Color.textFieldLabelColor.inactive,
  },
  errorHeaderLabelTextColor: {
    color: Color.textFieldLabelColor.error,
  },
  activeBorderBottomColor: {
    borderBottomColor: Color.borderColors.active,
  },
  inactiveBorderBottomColor: {
    borderBottomColor: Color.borderColors.inactive,
  },
  errorBorderBottomColor: {
    borderBottomColor: Color.borderColors.error,
  },
  textFieldContainer: {
    flexDirection: 'column',
    marginTop: '2.7%',
    borderBottomWidth: 0,
    paddingTop: 8,
  },
  textContainerPadding: { paddingHorizontal: 15 },
  textFieldView: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textField: {
    flex: 6,
    height: '100%',
    paddingHorizontal: '2%',
  },
  textInputBottomLabelLeft: {
    color: Color.status.error,
    fontSize: Fonts.fontSizes.fontSize_12,
    fontFamily: Fonts.fonts.medium,
  },
  scanContainer: {
    flex: 1,
    height: '100%',
  },
  scanTouchContainer: isClickable => ({
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderWidth: 0,
    opacity: isClickable ? 0.5 : 1,
  }),
  scanText: {
    fontSize: Fonts.fontSizes.fontSize_12,
    fontFamily: Fonts.fonts.bold,
    color: Color.action.primary.active,
  },
  activeViewBackgroundColor: {
    backgroundColor: Color.textFieldBackgroundColor.active,
    borderBottomColor: Color.borderColors.active,
  },
  inactiveViewBackgroundColor: {
    backgroundColor: Color.textFieldBackgroundColor.inactive,
    borderBottomColor: Color.borderColors.inactive,
  },
  errorViewBackgroundColor: {
    borderBottomColor: Color.borderColors.error,
  },
  disableViewBackgroundColor: {
    backgroundColor: Color.textFieldBackgroundColor.disabled,
    borderBottomColor: Color.borderColors.inactive,
  },
  formFieldViewBackgroundColor: {
    backgroundColor: Color.backContainer.textBoxBackground,
    marginTop: 1,
    lineHeight: 21,
    letterSpacing: 0,
    textAlign: 'left',
    color: Color.action.dark,
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_18,
  },
  rightViewStyle: {
    paddingBottom: 12,
  },
  textInputFieldContainer: {
    flexDirection: 'row',
    marginTop: '2.5%',
    borderRadius: 5,
  },
  formFieldContainer: {
    marginTop: '3%',
    borderRadius: 5,
  },
  textInputHeight: {
    height: FORM_TEXT_INPUT_CONTAINER_HEIGHT,
  },
  textInputMinHeight: {
    minHeight: FORM_TEXT_INPUT_CONTAINER_HEIGHT,
  },
  countryFormFieldContainer: {
    minHeight: FORM_TEXT_INPUT_CONTAINER_HEIGHT,
    borderRadius: 6,
    marginTop: '3%',
    paddingVertical: '0.6%',
    borderWidth: 1,
    borderColor: Color.action.cardBorderColor,
    backgroundColor: Color.action.default,
    ...Platform.select({
      ios: {
        shadowColor: Color.action.cardBorderColor,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 6,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  activeTextInputViewBackgroundColor: {
    borderColor: '#0057A7',
    borderWidth: 1,
    borderRadius: 5,
  },
  inactiveTextInputViewBackgroundColor: {
    borderRadius: 5,
    borderColor: Color.borderColors.containerBorder,
    borderWidth: 1,
  },
  errorTextInputViewBackgroundColor: {
    borderColor: Color.borderColors.error,
    borderWidth: 1,
    borderRadius: 5,
  },
  disableTextInputViewBackgroundColor: {
    backgroundColor: Color.textFieldBackgroundColor.disabled,
    borderBottomColor: Color.borderColors.inactive,
    borderRadius: 5,
  },
  textInputheaderLabel: {
    color: Color.action.secondary.pressed,
    fontSize: Fonts.fontSizes.fontSize_12,
    lineHeight: 15,
    fontFamily: Fonts.fonts.medium,
    paddingHorizontal: '5%',
  },
  formTextInputTextField: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: '5%',
    textAlign: 'left',
    color: Color.action.active,
    fontFamily: Fonts.fonts.medium,
    fontSize: normalizeHorizontaly(15),
  },
  textInputRightView: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    marginRight: DEVICE_WIDTH * 0.03,
  },
  textInputViewStyle: {
    display: 'flex',
    flexDirection: 'column',
    flex: 8,
    paddingTop: normalizeVerticaly(2),
  },
  textInputCornerRadius: {
    borderRadius: 5,
  },
  disabledTextField: {
    color: Color.action.secondary.pressed,
  },

  searchIconStyle: {
    flex: 1,
    flexDirection: 'row',
    display: 'flex',
    marginRight: normalizeHorizontaly(20),
    paddingRight: normalizeHorizontaly(20),
    justifyContent: 'center',
    alignItems: 'center',
    width: normalizeVerticaly(14),
    height: normalizeVerticaly(14),
    alignSelf: 'center',
  },
  passwordVisibilityIcon: {
    justifyContent: 'center',
    paddingHorizontal: 5,
  },
});
