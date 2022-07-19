//import liraries
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import ChatCard from '../Components/Cards/ChatCard';
import HeaderBar from '../Components/Header';

export default CompOne = ({ navigation }) => {
    const DATA = [
        {
          image_path: "https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: 'Rakesh',
          subtitle: "Singh",
          numMsgs:10
        },
        {
          image_path: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_960_720.jpg",
          title: 'Ranjeet',
          subtitle: "Kumar",
          numMsgs:0
        },
        {
          image_path: "https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: 'Akash',
          subtitle: "Sinha",
          numMsgs:100
        },
        {
          image_path: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_960_720.jpg",
          title: 'Ramu',
          subtitle: "Singh",
          numMsgs:1
        },
        {
          image_path: "https://cdn.pixabay.com/photo/2019/04/04/15/17/smartphone-4103051_960_720.jpg",
          title: 'Mobile',
          subtitle: "Phones",
          numMsgs:999
        },
        {
          image_path: "https://images.pexels.com/photos/805002/pexels-photo-805002.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          title: 'Developer',
          subtitle: "Developer Group",
          numMsgs:888
        },
      ];
      const renderItems = ({item})=>{
        return(<ChatCard title={item.title} 
          subtitle={item.subtitle} 
          image_path={item.image_path} 
          numMsgs={item.numMsgs} />)
      }
    
      return (
        <View style={styles.container}>
           <HeaderBar 
            leftIconName= {'chevron-left'}
            text={'CHAT CARD'}
            handleLeftIconPress={()=>navigation.goBack()}
            />
          <FlatList
            data={DATA}
            renderItem={renderItems}
            key={(index) => index.toString() }
          />
        </View>
      );
}


const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: "#fff"
    }
});
  