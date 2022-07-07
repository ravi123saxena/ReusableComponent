/*
 *          COPYRIGHT (c) 2020
 *          HONEYWELL INC.,
 *          ALL RIGHTS RESERVED
 *
 * This software is a copyrighted work and/or information protected as a trade secret.
 * Legal rights of Honeywell Inc. in this software is distinct from ownership of any medium
 * in which the software is embodied. Copyright or trade secret notices included must be
 * reproduced in any copies authorized by Honeywell Inc.
 *
 */
import { StyleSheet } from 'react-native';
import { Fonts, Color } from '../../Components/styles/themes';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from '../../constants/constants';

const styles = StyleSheet.create({
  interactiveTextInputContainer: {
    backgroundColor: Color.action.watermark,
    height: 0.084 * DEVICE_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,
    paddingTop: 0.0207 * DEVICE_HEIGHT,
    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.watermark,
  },
  filledTextInputContainer: {
    backgroundColor: Color.action.watermark,
    height: 0.084 * DEVICE_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,
    paddingTop: 0.012 * DEVICE_HEIGHT,
    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.watermark,
  },

  textInputInEditingMode: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_16,
    color: Color.standard.black,
    marginTop: 5,
    textAlignVertical: 'center',
  },
  titleBarOuterContainer: {
    backgroundColor: Color.standard.black,
  },
  titleBarContainer: {
    backgroundColor: Color.action.active,
    height: 0.1145 * DEVICE_HEIGHT,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flex: 1,
    flexDirection: 'row',
  },
  titleBarContainerInEditingMode: {
    paddingTop: 0.0525 * DEVICE_HEIGHT,
  },
  titleBarContainerInNonEditingMode: {},
  titleEditorContainer: {
    height: 0.047 * DEVICE_HEIGHT,
    paddingBottom: 0.008 * DEVICE_HEIGHT,
    borderBottomWidth: 1,
    borderBottomColor: Color.standard.white,
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: '6.4%',
    paddingLeft: '1.6%',
  },
  backButtonContainer: {
    height: 24,
    width: 24,
    marginLeft: '5.33%',
    marginTop: 0.0289 * DEVICE_HEIGHT,
  },
  iconContainer: {
    marginLeft: '2.6%',
    marginTop: 0.0214 * DEVICE_HEIGHT,
  },
  titleContainer: {
    marginLeft: '2.67%',
    height: 0.0604 * DEVICE_HEIGHT,
    width: '40.53%',

    flexShrink: 1,
    marginTop: 0.0327 * DEVICE_HEIGHT,
  },
  title: {
    fontFamily: Fonts.fonts.extraBold,
    fontSize: Fonts.fontSizes.fontSize_16,
    color: Color.standard.white,
  },
  editConatiner: {
    width: '3.6%',
    height: 0.036 * DEVICE_HEIGHT,
    marginLeft: '1.6%',
    marginTop: 0.0327 * DEVICE_HEIGHT,
  },
  okCancelContainer: {
    height: 26,
    width: 26,
    borderRadius: 13,
    backgroundColor: Color.backgroundColors.iconBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacingBetweenEditIcons: {
    marginRight: '3.2%',
    marginLeft: '10%',
  },
  titleInEditingMode: {
    width: '69.87%',
  },
  imageTextInputContainer: {
    backgroundColor: Color.action.watermark,
    height: TEXT_INPUT_CONTAINER_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,

    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.watermark,
  },
  interactiveText: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_16,
    color: Color.textFieldTextColors.interactive,
    textAlignVertical: 'center',
  },
  paddingForFilledTextInputContainer: {
    paddingTop: 0.012 * DEVICE_HEIGHT,
  },
 
  filledTextInputContainerWithImage: {
    backgroundColor: Color.action.watermark,
    height: TEXT_INPUT_CONTAINER_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,
    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.watermark,
  },
  filledText: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_12,
    color: Color.textFieldTextColors.filled,
    textAlignVertical: 'center',
  },
  filledTextInput: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_16,
    color: Color.standard.black,
    marginTop: 5,

    textAlignVertical: 'center',
  },
  textInputContainerInEditingMode: {
    backgroundColor: Color.textFieldBackgroundColor.editingMode,
    height: TEXT_INPUT_CONTAINER_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,
    paddingTop: 0.012 * DEVICE_HEIGHT,
    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'column',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.active,
  },
  inlineImageContainer: {
    width: '12.53%',
    justifyContent: 'center',
    alignContent: 'center',
  },
  textInputContainerInEditingModeWithImage: {
    backgroundColor: Color.textFieldBackgroundColor.editingMode,
    height: TEXT_INPUT_CONTAINER_HEIGHT,
    width: 0.872 * DEVICE_WIDTH,

    paddingLeft: 0.053 * DEVICE_WIDTH,
    paddingRight: 0.02 * DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Color.action.active,
  },
  labelForTextInputInEditingMode: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_12,
    color: Color.action.active,
    textAlignVertical: 'center',
  },
  header1: {
    fontFamily: Fonts.fonts.extraBold,
    fontSize: Fonts.fontSizes.fontSize_24,
    textAlign: 'center',
    color: Color.action.secondary.hover,
    marginBottom: '1.2%',
  },
  header1Text: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_14,
    textAlign: 'center',
    color: Color.action.secondary.hover,
    paddingHorizontal: '5%',
  },
  header2: {
    fontFamily: Fonts.fonts.bold,
    fontSize: 12,
    textAlign: 'left',
    color: Color.action.dark600,
  },
  descriptionText: {
    flex: 1,
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_14,
    color: Color.action.secondary.hover,
  },
  descriptionContainer: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: 10,
  },
  descriptionLeftIcon: {
    marginEnd: 2,
  },
  textInputSpacing: {
    marginTop: '3.75%',
  },
  generalContainer: {
    paddingTop: '6.25%',
    paddingHorizontal: '6.4%',
  },
  spacingBetweenHeaders: {
    height: 0.015 * DEVICE_HEIGHT,
  },
  spacingBetweenSections: {
    marginTop: '3.75%',
  },
  modelNameContainer: {
    flexDirection: 'row',
    paddingRight: '5.33%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inlineButtonText: {
    fontFamily: Fonts.fonts.bold,
    fontSize: Fonts.fontSizes.fontSize_14,
    color: Color.action.active,
    textAlign: 'right',
  },
 
  limitContainer: {
    marginTop: 0.0124 * DEVICE_HEIGHT,
    flexDirection: 'row',
    paddingHorizontal: '5.33%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  limitTypeText: {
    flex: 1,
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_16,
    color: Color.textFieldTextColors.active,
  },
  numericTextInput: {
    display: 'flex',
    flex: 1,
    borderColor: Color.action.active,
    borderRadius: 4,
    borderWidth: 1,
    width: DEVICE_WIDTH * 0.3,
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_14,
    color: Color.textFieldTextColors.active,
    paddingHorizontal: '2.9%',
    backgroundColor: Color.standard.white,
    textAlign: 'right',
  },
  inactiveLowButton: {
    borderColor: Color.lowButtonColor.inactive.textColor,
    backgroundColor: Color.lowButtonColor.inactive.backgroundColor,
  },
  inactiveLowButtonText: {
    color: Color.lowButtonColor.inactive.textColor,
  },
  inactiveMediumButton: {
    color: Color.mediumButtonColor.inactive.textColor,
    borderColor: Color.mediumButtonColor.inactive.textColor,
    backgroundColor: Color.mediumButtonColor.inactive.backgroundColor,
  },
  inactiveMediumButtonText: {
    color: Color.mediumButtonColor.inactive.textColor,
  },
  inactiveHighButton: {
    color: Color.highButtonColor.inactive.textColor,
    borderColor: Color.highButtonColor.inactive.textColor,
    backgroundColor: Color.highButtonColor.inactive.backgroundColor,
  },
  inactiveHighButtonText: {
    color: Color.highButtonColor.inactive.textColor,
  },
  activeLowButton: {
    borderColor: Color.lowButtonColor.active.textColor,
    backgroundColor: Color.lowButtonColor.active.backgroundColor,
  },
  activeLowButtonText: {
    color: Color.lowButtonColor.active.textColor,
  },
  activeMediumButton: {
    color: Color.mediumButtonColor.active.textColor,
    borderColor: Color.mediumButtonColor.active.textColor,
    backgroundColor: Color.mediumButtonColor.active.backgroundColor,
  },
  activeMediumButtonText: {
    color: Color.mediumButtonColor.active.textColor,
  },
  activeHighButton: {
    color: Color.highButtonColor.active.textColor,
    borderColor: Color.highButtonColor.active.textColor,
    backgroundColor: Color.highButtonColor.active.backgroundColor,
  },
  activeHighButtonText: {
    color: Color.highButtonColor.active.textColor,
  },
  switch: {
    height: 0.0248 * DEVICE_HEIGHT,
    width: '10.67%',
    marginTop: 0.0175 * DEVICE_HEIGHT,
    marginRight: '3.22%',
  },
  textInputViewStyle: {
    height: DEVICE_HEIGHT * 0.06,
  },
  switchViewStyle: {
    backgroundColor: Color.action.watermark,
    borderRadius: 5,
  },
  bottomSheet: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: DEVICE_HEIGHT * 0.4,
    paddingHorizontal: '3%',
  },
  modelNameHeaderViewStyle: {
    paddingBottom: '1.7%',
    marginBottom: '1.7%',
    height: DEVICE_HEIGHT * 0.05,
  },
  modalHeaderTextStyle: {
    fontSize: 16,
    lineHeight: 20,
    fontFamily: Fonts.fonts.extraBold,
    textAlign: 'center',
    color: Color.action.secondary.active,
  },
  modelNameChipViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    paddingHorizontal: '3%',
    marginTop: '2%',
  },
  errorText: {
    color: Color.status.error,
    fontSize: Fonts.fontSizes.fontSize_12,
    fontFamily: Fonts.fonts.medium,
  },
});
export default styles;
