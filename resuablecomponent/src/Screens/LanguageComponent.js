import React, { useContext } from 'react';
import { View , Button, Text} from 'react-native';
import { AuthContext, LanguageContext } from '../Components/Context/LanguageContext';
import HeaderBar from '../Components/Header';

export default LanguageComponent = ({ navigation }) => {
   const {language, setLanguage} = useContext(LanguageContext)
   const {login, setLogin} = useContext(AuthContext)
   
    const onPress = () => {
      language == 'JavaScript' ?  setLanguage('Python') : setLanguage('JavaScript')
    }
    const onLoginPress = () => {
        console.log('login value', login)
        login == true ?  setLogin(false) : setLogin(true)       
    }
    return (
        <View style={{flex:1}}>
            <HeaderBar 
                leftIconName= {'chevron-left'}
                text={'Language'}
                handleLeftIconPress={()=>navigation.goBack()}
            />
            <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
               <Text>{language}</Text>
               <View style={{marginTop: 20}}></View>
               <Button  title='Change Language' onPress={()=> onPress()}/>
               <View style={{marginTop: 20}}></View>
               <Text>Login: {login ? 'true' : 'false'}</Text>
               <View style={{marginTop: 20}}></View>
               <Button  title={buttonTitle} onPress={() =>onLoginPress()}/>
            </View>
        </View>
    );
};

