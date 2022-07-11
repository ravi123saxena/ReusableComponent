import React from 'react';
import { Text,  View, Modal, TouchableOpacity } from 'react-native';
import styles from './styles';

export default CustomDialogBox = ({ visible, message, title, handleCancel, handleConfirm, primaryTitle, secondaryTitle }) => {
  console.log(title, message)
  return (
    <View style={styles.container} >
      <Modal
        visible={visible}
        transparent={false}
        animationType={"fade"}
        onRequestClose={() => { this.cancelAlertBox(!this.state.Alert_Visibility) }} >
        <View style={styles.mainContainer}>
          <View style={styles.MainAlertView}>
            <Text style={styles.AlertTitle}>{title}</Text>
            <View style={styles.innerContainer} />
            <Text style={styles.AlertMessage}>{message} </Text>
            <View style={styles.innerContainer} />
            <View style={styles.alertContainer}>
              <TouchableOpacity style={styles.buttonStyle} onPress={handleConfirm} activeOpacity={0.7} >
                <Text style={styles.TextStyle}> {primaryTitle} </Text>
              </TouchableOpacity>
              <View style={styles.subInnerContainer} />
              <TouchableOpacity style={styles.buttonStyle} onPress={handleCancel} activeOpacity={0.7} >
                <Text style={styles.TextStyle}> {secondaryTitle} </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
