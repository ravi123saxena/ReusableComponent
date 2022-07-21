import React from 'react';
import { View } from 'react-native';
import ImageCard from '../Components/Cards/ImageCard';
import HeaderBar from '../Components/Header';

export default CardImage = ({ navigation }) => {
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Image Card'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <ImageCard
                    text1="Studio"
                    text2="Details"
                    color_text2="#4484f2"
                    type="one"
                    image_src="https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            </View>
        </>
    );
};

