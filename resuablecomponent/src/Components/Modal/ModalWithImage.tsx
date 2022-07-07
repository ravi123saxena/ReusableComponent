
import React, { useEffect, useState } from 'react';
import { Modal, TouchableOpacity, View, Text, Image } from 'react-native';
import { styles } from './Styles';

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
  loading?: boolean;
  canDismiss?: boolean;
  showCancelButton?: boolean;
  buttonType?: string;
  secondaryButtonText?: string;
  handleSecondaryButton?: () => void;
  showCloseIcon?: boolean;
  navigation?: any;
  customModalContainerStyle?: any;
  showImage?: boolean;
}

export const DisplayModalWithImage: React.FC<Props> = (props: Props) => {
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
    customModalContainerStyle,
    showImage = false,
  } = props;
  const [modeState, setModeState] = useState(currentMode);

  useEffect(() => {
    setModeState(currentMode);
  }, [props.currentMode]);

  const handleConfirm = () => {
    onConfirm();
  };

  return (
    <>
      <Modal
        visible={display}
        transparent
        animationType="none"
        onRequestClose={() => { }}>
        <View style={styles.modalBackgroundContainer}>
          <View style={[styles.modalContainer, customModalContainerStyle]}>
            {canDismiss && showCancelButton && (
              <TouchableOpacity
                style={styles.closeIconCenter}
                onPress={() => {
                  setModeState(props.currentMode);
                  onClose && onClose();
                }}
                hitSlop={hitSlop}>
                <Image source={require('../../assets/images/x.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            )}
            <>
              {headingText ? (
                <Text style={styles.headerTextStyle}>{headingText}</Text>
              ) : null}
              <View style={styles.lineView} />
              <View
                style={[
                  styles.messageContainer,
                  canDismiss && styles.containerCustomMargin,
                ]}>
                {showImage && <Image
                  source={require('../../assets/images/success.png')}
                  style={{ width: 100, alignSelf: 'center', height: 100 }} />}
                <Text style={styles.modalTextStyle}>{message}</Text>
              </View>
              {canDismiss && (
                <View style={styles.bottomContainer}>
                  <TouchableOpacity
                    style={styles.buttonContainerStyle}
                    onPress={handleConfirm}>
                    <Text style={styles.buttonText}>{buttonText}</Text>
                  </TouchableOpacity>
                  {secondaryButtonText && handleSecondaryButton && (
                    <TouchableOpacity
                      style={styles.secondaryButtonContainer}
                      onPress={() => handleSecondaryButton()}>
                      <Text style={styles.secondaryBtnStyle}>
                        {secondaryButtonText}
                      </Text>
                    </TouchableOpacity>
                  )}
                  {cancelText && (
                    <Text style={styles.cancelTextStyle} onPress={onClose}>
                      {cancelText}
                    </Text>
                  )}
                </View>
              )}
            </>
          </View>
        </View>
      </Modal>
    </>
  );
};
