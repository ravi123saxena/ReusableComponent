import React from 'react';
import { View, Text, FlatList } from 'react-native';
import PostCard from '../Components/Cards/PostCard';
import HeaderBar from '../Components/Header';

export default PostMessageCard = ({ navigation }) => {
    const data = [
        {
            id: 1,
            userTitle: 'John Doe',
            date: 'Dec 10, 2019',
            postTitle: 'Hotle OYO',
            postDescription: 'A hotel is an establishment that provides paid lodging on a short-term basis.Facilities provided inside a hotel room may range from a modest-quality ',
            time: '10 h ago',
            comments: '600',
            likes: '1.5 K',
        },
        {
            id: 2,
            userTitle: 'Rakesh Sharma',
            date: 'Nov 16, 2022',
            postTitle: 'Hotel Cellai Florence',
            postDescription: 'An intimate and charming atmosphere, high quality comfort and traditional Tuscan hospitality.',
            time: '8 h ago',
            comments: '50',
            likes: '1.8 K',
        },
        {
            id: 3,
            userTitle: 'Ajay Menon',
            date: 'Jan 10, 2022',
            postTitle: 'Hotle Taz',
            postDescription: 'A hotel is an establishment that provides paid lodging on a short-term basis.Facilities provided inside a hotel room may range from a modest-quality ',
            time: '9 h ago',
            comments: '500',
            likes: '1.2 K',
        },
        {
            id: 4,
            userTitle: 'Raj Saxena',
            date: 'Mar 10, 2017',
            postTitle: 'Hotle Panama Garden',
            postDescription: 'A hotel is an establishment that provides paid lodging on a short-term basis.Facilities provided inside a hotel room may range from a modest-quality ',
            time: '20 h ago',
            comments: '100',
            likes: '1.6 K',
        },
    ]

    const renderItem = ({ item }) => {
        return (
                <PostCard
                    userTitle={item.userTitle}
                    date={item.date}
                    postTitle={item.postTitle}
                    postDescription={item.postDescription}
                    time={item.time}
                    comments={item.comments}
                    likes={item.likes} />
        )
    }

    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'Post Card'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flex: 1 }}>
                <FlatList
                    data={data}
                    renderItem={renderItem}
                    key={item => item.id.toString()}
                />
            </View>
        </>
    );
};

