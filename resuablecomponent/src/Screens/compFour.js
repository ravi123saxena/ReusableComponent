import React from 'react';
import { View, Text } from 'react-native';
import PostCard from '../Components/Cards/PostCard';
import HeaderBar from '../Components/Header';

export default CompFour = ({ navigation }) => {
    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Post Card'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
                <PostCard />
            </View>
        </>
    );
};

