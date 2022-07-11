
import React from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import { Switch } from 'react-native-paper';
import { Color } from '../../Components/styles/themes';

const SwitchControl = ({
  title = '',
  handleChange,
  switchValue,
  tag = '',
  id = 0,
  hideSwitch = false,
  disabled,
  containerStyle = {},
  subtitle = '',
  titleStyle = {},
  subTitleStyle= {},
}) => {
  return (
    <React.Fragment>
      <View
        key={id}
        style={
          subtitle.length > 0
            ? [styles.containerView, styles.switchTextParentContainerStyle]
            : [styles.containerView, containerStyle]
        }>
        <View>
          <Text style={titleStyle }>
            {title}
          </Text>
          {subtitle.length > 0 ? (
            <Text style={[styles.subtitleStyle, subTitleStyle]}>{subtitle}</Text>
          ) : null}
        </View>
        {!hideSwitch && (
          <Switch
            testID="SwitchTestId"
            disabled={disabled}
            value={!(switchValue === 0)}
            onValueChange={value => handleChange(value ? 1 : 0, tag)}
            style={styles.switchStyle}
            color={Color.textFieldLabelColor.active}
          />
        )}
      </View>
    </React.Fragment>
  );
};
export default SwitchControl;
