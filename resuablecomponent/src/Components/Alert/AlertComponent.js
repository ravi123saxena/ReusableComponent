
import { Alert } from 'react-native';
import { ALERT } from '../../constants/constants';

/**
 * Text
 * @description Custom component for alert before delete device or equipment or schedule
 * @param {string} message
 * @param {useCallback(() => {}) onCancel
 * @param {useCallback(() => {}) handleDelete
 */

const AlertComponent = (
  message,
  onCancel,
  handleDelete,
  titleMessage = '',
  isTwoButtons = true,
  buttonTitles = [ALERT.cancel, ALERT.ok],
) => {
  if (isTwoButtons) {
    return Alert.alert(
      titleMessage,
      message,
      [
        {
          text: buttonTitles[0],
          onPress: () => onCancel(),
          style: 'cancel',
        },
        {
          text: buttonTitles[1],
          onPress: () => handleDelete(),
          style: 'default',
        },
      ],
      { cancelable: false },
    );
  } else {
    return Alert.alert(
      titleMessage,
      message,
      [
        {
          text: ALERT.ok,
          onPress: () => onCancel(),
          style: 'cancel',
        },
      ],
      { cancelable: false },
    );
  }
};

export default AlertComponent;
