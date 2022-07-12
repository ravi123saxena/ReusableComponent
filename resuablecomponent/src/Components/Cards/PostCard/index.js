import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default PostCard = ({title , subTitle}) =>  {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.image1Viewstyle}>
                    <Image style={styles.image1style}
                        source={require('../../../assets/images/userhead.png')} />
                </View>
                <View style={styles.viewName}>
                    <View>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <View>
                        <Text style={styles.dateStyle}>{subTitle}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewImage}>
                <Image style={styles.styleImage} source={require('../../../assets/images/postbg.png')} />
            </View>
            <View>
                <Text style={styles.postTitle}>Hotel Panama Garden</Text>
            </View>
            <View>
                <Text style={styles.postDescription}>Descrition text about the post like location, speciality.</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Icon name="thumbs-o-up" size={25} color="black" />
                    <View>
                        <Text style={styles.c3text}>1.5k Likes</Text>
                    </View>
                </View>

                <View style={styles.container3}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons-png.flaticon.com/512/1380/1380338.png"}} />
                    <View>
                        <Text style={styles.c3text}>4 comments</Text>
                    </View>
                </View>

                <View style={styles.container3}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons-png.flaticon.com/512/992/992700.png"}} />
                    <View>
                        <Text style={styles.c3text}>11h ago</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

