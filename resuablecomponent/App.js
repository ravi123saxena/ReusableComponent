import React from 'react';
import Routes from './src/Navigation/Routes';

import { LogBox } from 'react-native'
import ignoreWarnings from 'ignore-warnings';
ignoreWarnings('warn',['ViewPropTypes','[react-native-gesture-handler]'])

LogBox.ignoreLogs([
    'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
    'NativeBase: The contrast ratio of',
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
])

export default App = () => {
  return (
    <Routes />
  );
};

