//https://github.com/eugnis/react-native-timeline-flatlist

import React, { useState } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import HeaderBar from '../Components/Header';
import RadioGroup from '../Components/RadioGroup/radiogroup';
import Timeline from '../Components/Timeline';

const BasicData = [
    { time: '09:00', title: 'Event 1', description: 'Event 1 Description' },
    { time: '10:45', title: 'Event 2', description: 'Event 2 Description' },
    { time: '12:00', title: 'Event 3', description: 'Event 3 Description' },
    { time: '14:00', title: 'Event 4', description: 'Event 4 Description' },
    { time: '16:30', title: 'Event 5', description: 'Event 5 Description' }
]
const customData = [
    { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' },
    { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
    { time: '12:00', title: 'Lunch' },
    { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688' },
    { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688' }
]

const CircleDotdata = [
    { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', circleColor: '#009688', lineColor: '#009688' },
    { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.' },
    { time: '12:00', title: 'Lunch', icon: require('../assets/images/lunch.png') },
    { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688' },
    { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', circleColor: '#009688' }
]
const Icondata = [
    { time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ', lineColor: '#009688', icon: require('../assets/images/archery.png') },
    { time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: require('../assets/images/badminton.png') },
    {
        time: '12:00', title: 'Custom rendered icon', icon: <Image
            style={{ width: 20, height: 20 }}
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        />
    },
    { time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ', lineColor: '#009688', icon: require('../assets/images/soccer.png') },
    { time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: require('../assets/images/dumbbell.png') }
]

const OverrideData = [
    {
        time: '09:00',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor: '#009688',
        icon: require('../assets/images/archery.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
    },
    {
        time: '10:45',
        title: 'Play Badminton',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
        icon: require('../assets/images/badminton.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
    },
    {
        time: '12:00',
        title: 'Lunch',
        icon: require('../assets/images/lunch.png'),
    },
    {
        time: '14:00',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor: '#009688',
        icon: require('../assets/images/soccer.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
    },
    {
        time: '16:30',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../assets/images/lunch.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
    }
]

const SingleColumndata = [
    {
        time: '09:00',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor: '#009688',
        icon: require('../assets/images/archery.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
    },
    {
        time: '10:45',
        title: 'Play Badminton',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
        icon: require('../assets/images/badminton.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
    },
    {
        time: '12:00',
        title: 'Lunch',
        icon: require('../assets/images/lunch.png'),
    },
    {
        time: '14:00',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor: '#009688',
        icon: require('../assets/images/soccer.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
    },
    {
        time: '16:30',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../assets/images/dumbbell.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
    }
]

const TwoColumndata = [
    {
        time: '09:00',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor: '#009688',
        icon: require('../assets/images/archery.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
    },
    {
        time: '10:45',
        title: 'Play Badminton',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
        icon: require('../assets/images/badminton.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
    },
    {
        time: '12:00',
        title: 'Lunch',
        icon: require('../assets/images/lunch.png'),
    },
    {
        time: '14:00',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor: '#009688',
        icon: require('../assets/images/soccer.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
    },
    {
        time: '16:30',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: require('../assets/images/dumbbell.png'),
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
    }
]
export default TimeLineView = ({ navigation }) => {
    const [timeline, setTimeline] = useState(0)
    const [selected, setSelected] = useState(0)
    var radio_option = [
        { id: 0, label: 'Basic' },
        { id: 1, label: 'Custom' },
        { id: 2, label: 'Circle Dot' },
        { id: 3, label: 'ICON' },
        { id: 4, label: 'Single Column' },
        { id: 5, label: 'Two Cloumn' },
    ];

    const onEventPress = (data) => {
        setSelected(data)
      }
    
      const renderSelected = () =>{
          if(selected)
            return <Text style={{marginTop:10}}>Selected event: {selected.title} at {selected.time}</Text>
      }
    
      const renderDetail = (rowData, sectionID, rowID) => {
        let title = <Text style={[styles.title]}>{rowData.title}</Text>
        var desc = null
        if(rowData.description && rowData.imageUrl)
          desc = (
            <View style={styles.descriptionContainer}>   
              <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
              <Text style={[styles.textDescription]}>{rowData.description}</Text>
            </View>
          )
        
        return (
          <View style={{flex:1}}>
            {title}
            {desc}
          </View>
        )
      }
    

    return (
        <>
            <HeaderBar
                leftIconName={'chevron-left'}
                text={'TimeLine'}
                handleLeftIconPress={() => navigation.goBack()} />
            <View style={{ flexBasis: '15%', justifyContent: 'flex-start', marginTop: 10, alignItems: 'center' }}>
                <View style={{ marginHorizontal: 20, marginBottom: 20, alignItems: 'center' }}>
                    <RadioGroup
                        horizontal
                        options={radio_option}
                        onChange={(value) => setTimeline(value)}
                        activeButtonId={0}
                    />
                </View>
            </View>
            <View style={styles.container}>
                 {renderSelected()}
                {timeline.id == 0 && <Timeline
                    style={styles.list}
                    data={BasicData}
                />
                }
                {timeline.id == 1 && <Timeline
                    style={styles.list}
                    data={customData}
                    separator={true}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, overflow: 'hidden' }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                />
                }
                {timeline.id == 2 && <Timeline
                    style={styles.list}
                    innerCircle={'dot'}
                    data={CircleDotdata}
                    separator={true}
                    circleSize={20}
                    circleColor='rgb(45,156,219)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13, overflow: 'hidden' }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                />}
                {timeline.id == 3 && <Timeline
                    style={styles.list}
                    data={Icondata}
                    circleSize={20}
                    circleColor='rgba(0,0,0,0)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 4 }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                    innerCircle={'icon'}
                />
                }
                {timeline.id == 4 && <Timeline
                    style={styles.list}
                    data={SingleColumndata}
                    circleSize={20}
                    circleColor='rgba(0,0,0,0)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{ minWidth: 52, marginTop: -5 }}
                    timeStyle={{ textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13 }}
                    descriptionStyle={{ color: 'gray' }}
                    options={{
                        style: { paddingTop: 5 }
                    }}
                    innerCircle={'icon'}
                    onEventPress={onEventPress}
                    renderDetail={renderDetail}
                    separator={false}
                    detailContainerStyle={{ marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10 }}
                    columnFormat='single-column-right'
                />
                }
                {timeline.id == 5 && <Timeline
                    style={styles.list}
                    data={TwoColumndata}
                    circleSize={20}
                    circleColor='rgba(0,0,0,0)'
                    lineColor='rgb(45,156,219)'
                    timeContainerStyle={{minWidth:52, marginTop: -5}}
                    timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
                    descriptionStyle={{color:'gray'}}
                    options={{
                      style:{paddingTop:5}
                    }}
                    innerCircle={'icon'}
                    onEventPress={onEventPress}                    
                    separator={false}
                    detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#BBDAFF", borderRadius: 10}}
                    columnFormat='two-column'
                />
                }
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flexBasis: '80%',
        padding: 20,
        paddingTop: 20,
        backgroundColor: 'white'
    },
    list: {
        marginVertical: 20

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    descriptionContainer: {
        flexDirection: 'row',
        paddingRight: 50
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    textDescription: {
        marginLeft: 10,
        color: 'gray'
    }
});