import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, View, Text } from 'react-native';
import { styles } from './Styles';
import { CrossButtonIcon } from '../../assets/images';

const hitSlop = {
  left: 10,
  right: 10,
  top: 10,
  bottom: 10,
};
interface Props {
  display: boolean;
  buttonText: string;
  cancelText?: string;
  selectMode?: boolean;
  onConfirm: (mode?: string) => any;
  onClose?: () => void;
  currentMode?: string;
  headingText?: string;
  message?: string;
  modesModal: boolean;
  loading?: boolean;
  canDismiss?: boolean;
  showCancelButton?: boolean;
  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
  navigation?: any;
  termsOfUseModal?: boolean;
  showAuto?: boolean;
  isButtonAlignedHorizontally: boolean;
  isFromChannelConfiguration?: boolean;
  onCrossIconClick?: () => void;
  cancelTextStyle?: any;
  wrapperHeaderTextStyle?: any;
}

export const DisplayModal: React.FC<Props> = (props: Props) => {
  const {
    display,
    buttonText,
    onConfirm,
    onClose,
    currentMode,
    headingText,
    message,
    canDismiss = true,
    showCancelButton = true,
    cancelText,
    secondaryButtonText,
    handleSecondaryButton,
    isButtonAlignedHorizontally = false,
    isFromChannelConfiguration = false,
    onCrossIconClick,
    cancelTextStyle = {},
    wrapperHeaderTextStyle = {},
  } = props;
  const [modeState, setModeState] = useState(currentMode);

  useEffect(() => {
    setModeState(currentMode);
  }, [props.currentMode]);

  const handleConfirm = () => {
    onConfirm();
  };

  // canDismiss passed as false for internet modal
  // And internet modal is supposed to show up when no internet is there
  // Other error modal if any, will show up once connection is back up

  const renderButtonsVertically = () => {
    return (
      <>
        {canDismiss && (
          <View style={styles.buttonShadow}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={handleConfirm}>
              <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
            {secondaryButtonText && handleSecondaryButton && (
              <TouchableOpacity onPress={() => handleSecondaryButton()}>
                <Text style={styles.secondaryBtnStyle}>
                  {secondaryButtonText}
                </Text>
              </TouchableOpacity>
            )}
            {cancelText && (
              <Text
                style={[styles.cancelText, cancelTextStyle]}
                onPress={onClose}>
                {cancelText}
              </Text>
            )}
          </View>
        )}
      </>
    );
  };

  const renderButtonsHorizontally = () => {
    return (
      <>
        {canDismiss && (
          <View style={styles.buttonShadow}>
            <View style={styles.horizontalButtonContainer}>
              {secondaryButtonText && handleSecondaryButton && (
                <TouchableOpacity onPress={() => handleSecondaryButton()}>
                  <Text style={styles.horizontalSecondaryBtnStyle}>
                    {secondaryButtonText}
                  </Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity
                style={styles.horizontalPrimaryButtonStyle}
                onPress={handleConfirm}>
                <Text style={styles.buttonText}>{buttonText}</Text>
              </TouchableOpacity>
              {cancelText && (
                <Text style={styles.cancelText} onPress={onClose}>
                  {cancelText}
                </Text>
              )}
            </View>
          </View>
        )}
      </>
    );
  };

  return (
    <>
      <Modal
        visible={display}
        transparent
        animationType="none"
        onRequestClose={() => {}}>
        <View style={styles.modalBackgroundContainer}>
          <View style={styles.modalContainer}>
            {canDismiss && showCancelButton && (
              <TouchableOpacity
                style={styles.closeIconCenter}
                onPress={() => {
                  setModeState(props.currentMode);
                  if (isFromChannelConfiguration) {
                    onCrossIconClick && onCrossIconClick();
                  } else {
                    onClose && onClose();
                  }
                }}
                hitSlop={hitSlop}>
                <CrossButtonIcon height={15} width={15} />
              </TouchableOpacity>
            )}
            <>
              {headingText ? (
                <Text style={[styles.headerTextStyle, wrapperHeaderTextStyle]}>
                  {headingText}
                </Text>
              ) : null}
              <View style={styles.lineView} />
              <Text style={styles.modalText}>{message}</Text>
              {isButtonAlignedHorizontally
                ? renderButtonsHorizontally()
                : renderButtonsVertically()}
            </>
          </View>
        </View>
      </Modal>
    </>
  );
};
