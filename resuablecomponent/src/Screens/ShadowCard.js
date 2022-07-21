import React from 'react';
import { View } from 'react-native';
import ImageCardWithShadowTitle from '../Components/Cards/ImageCardWithShadowTitle';
import HeaderBar from '../Components/Header';

export default ShadowCard = ({ navigation }) => {
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Image Card with Shadow'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <ImageCardWithShadowTitle
                    Image_url="https://cdn3.photostockeditor.com/c/1711/lido%20key%20-%20sarasota-girl-in-black-and-white-plaid-dress-shirt-and-black-shorts-running-on-beach-during-daytime-florida-florida-image.jpg"
                    text1="Title"
                    text2="Multiple Image Comp for React Native!!" />
            </View>
        </>
    );
};

