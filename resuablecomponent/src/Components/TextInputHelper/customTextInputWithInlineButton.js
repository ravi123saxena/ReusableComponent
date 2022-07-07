import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from '../TextInputHelper/styles';
import { KEYBOARD_TYPES } from '../../constants/constants';

export default class CustomTextInputWithInlineButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text,
      isEditable: true,
      inEditingMode: false,

      label: this.props.label,
      changingText: this.props.text,
      testID: this.props.testID,
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (props.text !== state.text) {
      return {
        text: props.text,
        changingText: props.text,
      };
    }
    return null;
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
      <View style={styles.filledTextInputContainerWithImage}>
        <TouchableOpacity
          style={styles.paddingForFilledTextInputContainer}
          onPress={this.onFocus.bind(this)}
          testID={this.state.testID}>
          <Text style={styles.filledText}>{this.state.label}</Text>
          <TextInput
            style={styles.filledTextInput}
            onFocus={this.onFocus.bind(this)}>
            {this.state.text}
          </TextInput>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inlineImageContainer}
          onPress={() => this.props.handler && this.props.handler()}>
          {this.props.getIcon()}
        </TouchableOpacity>
      </View>
    );
  }

  renderInteractiveTextInput() {
    return (
      <View style={styles.interactiveTextInputContainerWithImage}>
        <TouchableOpacity
          style={styles.textInputContainer}
          onPress={this.onFocus.bind(this)}
          testID={this.state.testID}>
          <Text style={styles.interactiveText}>{this.state.label}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.inlineImageContainer}
          onPress={() => this.props.handler && this.props.handler()}>
          {this.props.getIcon()}
        </TouchableOpacity>
      </View>
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
            autoCorrect={false}
            returnKeyType="done">
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
  onChangeText = text => {
    this.setState({ changingText: text });
  };
  onDone = () => {
    this.props.onChangeTextHandler(this.state.changingText, this.props.tag);
    this.setState({ text: this.state.changingText, inEditingMode: false });
  };
}
