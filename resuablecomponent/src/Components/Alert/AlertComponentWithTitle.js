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

import { Alert } from 'react-native';

/**
 * Text
 * @description Custom component for alert with title
 * @param {string} title
 * @param {string} message
 * @param {string} negativeButtonText
 * @param {useCallback(() => {}) onNegativeButtonPress
 * @param {string} positiveButtonText
 * @param {useCallback(() => {}) onPositiveButtonPress
 */

const AlertComponentWithTitle = (
  title,
  message,
  negativeButtonText,
  onNegativeButtonPress,
  positiveButtonText,
  onPositiveButtonPress,
) => {
  return Alert.alert(
    title,
    message,
    [
      {
        text: negativeButtonText,
        onPress: () => onNegativeButtonPress && onNegativeButtonPress(),
        style: 'default',
      },
      {
        text: positiveButtonText,
        onPress: () => onPositiveButtonPress(),
        style: 'default',
      },
    ],
    { cancelable: false },
  );
};

export default AlertComponentWithTitle;
