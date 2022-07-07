import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../TextInputHelper/styles';
import { KEYBOARD_TYPES } from '../../constants/constants';

export default class CustomTextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      isEditable: true,
      inEditingMode: false,
      hasIcon: this.props.hasIcon,
      label: this.props.label,
      changingText: this.props.text,
      testID: this.props.testID,
    };
  }

  render() {
    if (this.state.isEditable === false) {
      return this.renderReadOnlyTextInput();
    } else if (this.state.inEditingMode) {
      return this.renderTextInputInEditingMode();
    } else if (this.state.text && this.state.text.length > 0) {
      return this.renderFilledTextInput();
    } else {
      return this.renderInteractiveTextInput();
    }
  }

  renderFilledTextInput() {
    return (
      <TouchableOpacity
        onPress={this.onFocus.bind(this)}
        testID={this.state.testID}>
        <View style={styles.filledTextInputContainer}>
          <Text style={styles.filledText}>{this.state.label}</Text>
          <TextInput
            style={styles.filledTextInput}
            onFocus={this.onFocus.bind(this)}>
            {this.state.text}
          </TextInput>
        </View>
      </TouchableOpacity>
    );
  }

  renderInteractiveTextInput() {
    return (
      <TouchableOpacity
        onPress={this.onFocus.bind(this)}
        testID={this.state.testID}>
        <View style={styles.interactiveTextInputContainer}>
          <Text style={styles.interactiveText}>{this.state.label}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  renderTextInputInEditingMode() {
    return (
      <TouchableOpacity
        onPress={this.onFocus.bind(this)}
        testID={this.state.testID}>
        <View style={styles.textInputContainerInEditingMode}>
          <Text style={styles.labelForTextInputInEditingMode}>
            {this.state.label}
          </Text>
          <TextInput
            style={styles.textInputInEditingMode}
            onChangeText={text => this.onChangeText(text)}
            onBlur={this.onDone.bind(this)}
            onSubmitEditing={this.onDone.bind(this)}
            keyboardType={KEYBOARD_TYPES.default}
            returnKeyType="done"
            autoCorrect={false}>
            {this.state.text}
          </TextInput>
        </View>
      </TouchableOpacity>
    );
  }

  renderReadOnlyTextInput() {
    return (
      <View
        style={styles.interactiveTextInputContainer}
        testID={this.state.testId}>
        <Text>{this.state.text}</Text>
      </View>
    );
  }

  onFocus() {
    this.setState({ inEditingMode: true });
  }
  onChangeText(text) {
    this.setState({ text: text });
  }
  onDone() {
    this.setState({ inEditingMode: false });
    this.props.onChangeTextHandler(this.state.text);
  }
}
