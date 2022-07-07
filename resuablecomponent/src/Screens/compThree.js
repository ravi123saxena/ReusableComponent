import React from 'react';
import { View, Text } from 'react-native';
import ImageCard from '../Components/Cards/ImageCard';

export default CompThree = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
            <ImageCard 
                text1="Studio"
                text2="Details"
                color_text2="#4484f2"
                type="one"
                image_src="https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        </View>
    );
};

