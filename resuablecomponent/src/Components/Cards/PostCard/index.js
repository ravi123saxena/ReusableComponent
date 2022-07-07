import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './styles'

export default PostCard = () =>  {
    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <View style={styles.image1Viewstyle}>
                    <Image style={styles.image1style}
                        source={{ uri: "https://cdn-icons-png.flaticon.com/512/149/149071.png" }} />
                </View>
                <View style={styles.viewName}>
                    <View>
                        <Text style={styles.title}>John Doe</Text>
                    </View>
                    <View>
                        <Text style={styles.dateStyle}>Dec 10, 2019</Text>
                    </View>
                </View>
            </View>
            <View style={styles.viewImage}>
                <Image style={styles.styleImage} source={{ uri: "https://img.traveltriangle.com/blog/wp-content/uploads/2018/07/San-Blas-panama-Islands.jpg" }} />
            </View>
            <View>
                <Text style={styles.postTitle}>Hotel Panama Garden</Text>
            </View>
            <View>
                <Text style={styles.postDescription}>Descrition text about the post like location, speciality.</Text>
            </View>

            <View style={styles.container2}>
                <View style={styles.container3}>
                    <Image style={styles.iconStyle}
                        source={{uri:"https://cdn-icons.flaticon.com/png/512/1062/premium/1062675.png?token=exp=1654687427~hmac=196b07044654d52678b0c442fe85184c"}} />
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

