import React, { useState } from 'react';
import { LogBox } from 'react-native'
import { LanguageProvider, LoginProvider, AppContextProvider } from './src/Components/Context/LanguageContext';
import OnBoarding from './src/Components/OnBoarding';
import Routes from './src/Navigation/Routes';

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
    </>
  );

};

