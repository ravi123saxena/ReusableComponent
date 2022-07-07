import React from 'react';
import { Modal, TouchableOpacity, View, Text, Image } from 'react-native';
import TextInputComponent from '../TextInput/TextInputComponent';
import { styles } from './Styles';

const hitSlop = {
    left: 10,
    right: 10,
    top: 10,
    bottom: 10,
  };

export const DisplayModalWithTextInput = ({
  display,
  buttonText,
  cancelText,
  onConfirm,
  onClose,
  headingText,
  canDismiss = true,
  showCancelButton = true,
  secondaryButtonText,
  handleSecondaryButton,
  handleNameChange,
  handleDescriptionChange,
  templateName,
  templateDescription,
  customModalContainerStyle}) => {
  
  const handleConfirm = () => {
    onConfirm();
  };

  // canDismiss passed as false for internet modal
  // And internet modal is supposed to show up when no internet is there
  // Other error modal if any, will show up once connection is back up

  return (
    <>
      <Modal
        visible={display}
        transparent
        animationType="none"
        onRequestClose={() => {}}>
        <View style={styles.modalBackgroundContainer}>
          <View style={[styles.modalContainer, customModalContainerStyle]}>
            {canDismiss && showCancelButton && (
              <TouchableOpacity
                style={styles.closeIconCenter}
                onPress={onClose}
                hitSlop={hitSlop}>
                <Image source={require('../../assets/images/x.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            )}
            <>
              {headingText ? (
                <Text style={styles.headerTextStyle}>{headingText}</Text>
              ) : null}
              <View style={styles.lineView} />
              <View style={styles.viewTextFields}>
                <View style={styles.textMarginTop}>
                  <TextInputComponent
                    fieldTitle={'Name'}
                    onChangeText={handleNameChange}
                    value={templateName.value}
                    handleBorderColor={true}
                    errorMsg={templateName.errorMsg}
                  />
                </View>
                <TextInputComponent
                  wrapperStyle={styles.textMultiLineHeight}
                  fieldTitle={'Description'}
                  onChangeText={handleDescriptionChange}
                  value={templateDescription.value}
                  handleBorderColor={true}
                  errorMsg={templateDescription.errorMsg}
                  multiline
                  enableBlurOnSubmitMultiline={true}
                  maxLength={100}
                />
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
                      onPress={handleSecondaryButton}
                      style={styles.secondaryButtonContainer}>
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
