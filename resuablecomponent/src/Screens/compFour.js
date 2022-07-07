import React from 'react';
import { View, Text } from 'react-native';
import PostCard from '../Components/Cards/PostCard';

export default CompFour = ({ navigation }) => {
    return (
        <View style={{ flex: 1, marginVertical: 20, justifyContent: 'flex-start', alignItems: 'center' }}>
           <PostCard />     
        </View>
    );
};

