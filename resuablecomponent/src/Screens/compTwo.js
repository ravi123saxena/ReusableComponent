import React from 'react';
import { View, Text } from 'react-native';
import CustomButton from '../Components/Button/CustomButton'
import GoogleButton from '../Components/Button/GoogleButton';
export default CompTwo = ({ navigation }) => {
    return (
        <View style={{flex:1, marginVertical: 20, justifyContent:'flex-start', alignItems:'center'}}>
           <Text style={{marginVertical:20, color:'#000'}}>Solid Button without border</Text> 
           <CustomButton btnText={'Continue'} />
           <Text style={{marginVertical:20, color:'#000'}}>Solid Button With border</Text> 
           <CustomButton btnText={'Continue'} border/>
           <Text style={{marginVertical:20, color:'#000'}}>Google Plus Button</Text> 
           <GoogleButton/>
        </View>
    );
};

