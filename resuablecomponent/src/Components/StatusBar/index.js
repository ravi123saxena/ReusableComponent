import React from 'react';
import { View, StatusBar, Platform } from 'react-native';

import styles from './styles';

const StatusBarComponent = ({ backgroundColor, barStyle }) => {
  const iosStatusBar = Platform.OS === 'ios' && (
    <View style={[styles.statusBar, { backgroundColor }]} />
  );

  return (
    <View style={[styles.container]}>
      <StatusBar backgroundColor={backgroundColor} barStyle={barStyle} />
      {iosStatusBar}
    </View>
  );
};


export default StatusBarComponent;
