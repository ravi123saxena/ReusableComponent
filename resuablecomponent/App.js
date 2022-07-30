import React, { useState } from 'react';
import { LogBox } from 'react-native'
import { LanguageProvider, LoginProvider, AppContextProvider } from './src/Components/Context/LanguageContext';
import OnBoarding from './src/Components/OnBoarding';
import Routes from './src/Navigation/Routes';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import FlashMessage from 'react-native-flash-message';

LogBox.ignoreLogs([
  "Require cycle: node_modules\victory-vendor\lib-vendor\d3-interpolate\src\value.js",
   
]);

const slides = [
  {
    id: 1,
    title: 'Discover Best Places',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./src/assets/images/1.png')
  },
  {
    id: 2,
    title: 'Choose A Tasty Dish',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./src/assets/images/2.png')
  },
  {
    id: 3,
    title: 'Pick Up The Delivery',
    description: '“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"',
    image: require('./src/assets/images/3.png')
  }
]


const toastConfig = {

  success: (props) => (
    <BaseToast
      {...props}
      style={{ borderLeftColor: 'pink' }}
      contentContainerStyle={{ paddingHorizontal: 15 }}
      text1Style={{
        fontSize: 15,
        fontWeight: '400'
      }}
    />
  ),

  error: (props) => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 17
      }}
      text2Style={{
        fontSize: 15
      }}
    />
  ),

  tomatoToast: ({ text1, props }) => (
    <View style={{ height: 60, width: '100%', backgroundColor: 'tomato' }}>
      <Text>{text1}</Text>
      <Text>{props.uuid}</Text>
    </View>
  )
};

export default App = () => {
  const [visible, setVisible] = useState(false)
  const [language, setLanguage] = useState('JavaScript')
  const [login, setLogin] = useState(false)

  const providerData = {
    language: language,
    setLanguage: setLanguage,
    setLogin: setLogin,
    login: login,
  }
  return (
    <>
      {!visible ? <OnBoarding
        slides={slides}
        visible={visible}
        onDone={(value) => setVisible(value)}
      /> : 
        <AppContextProvider {...providerData}> 
              <Routes />
        </AppContextProvider>
      }
      <Toast config={toastConfig} />
      <FlashMessage position="top"
      />
    </>
  );

};

