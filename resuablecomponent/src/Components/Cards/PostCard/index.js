import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';


export default PostCard = ({
    userTitle, 
    date, 
    postTitle, 
    postDescription, 
    likes, 
    comments, 
    time
}) =>  {
    
    return (
        <View style={styles.container}>
             <View style={styles.innerContainer}>
                <View style={styles.imageContainerViewstyle}>
                 <Image style={styles.imageStyle} source={require('../../../assets/images/userhead.png')} />
                </View>
                <View style={styles.viewName}>
                    <View>
                        <Text style={styles.title}>{userTitle}</Text>
                  </View>
                   <View>
                        <Text style={styles.dateStyle}>{date}</Text>
                    </View>
                </View>
             </View>
             <View style={styles.viewImage}>
                 <Image
                     style={styles.styleImage}
                     source={require('../../../assets/images/postbg.png')} />
             </View>
             <ScrollView>
                 <Text style={styles.postTitle}>{postTitle}</Text>
                 <Text style={styles.postDescription}>{postDescription}</Text>
            </ScrollView>
            
             <View style={styles.innerSubContainer}>
                 <View style={styles.iconContainer}>
                     <Icon name="thumbs-o-up" size={25} color="black" />
                     <View>
                        <Text style={styles.likeText}>{likes}</Text>
                     </View>
                 </View>

                <View style={styles.iconContainer}>
                 <Icon name="comments-o" size={25} color="black" />
                    <View>
                     <Text style={styles.likeText}>{`${comments} comments`}</Text>
                     </View>
                 </View>

                 <View style={styles.iconContainer}>
                    
                     <Icon name="clock-o" size={25} color="black" />
                     <View>
                         <Text style={styles.likeText}>{time}</Text>
                     </View>
                 </View> 
             </View>
        </View>
    )
}

