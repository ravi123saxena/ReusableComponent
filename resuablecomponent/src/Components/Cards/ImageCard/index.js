import React from 'react';
 import {
   Text,
   View,
   Image,
 } from 'react-native';

import styles from './styles';

 export default  ImageCard = ({text1, text2, type="two", color_text2, image_src}) => {
    
   return (
    <View style={{...styles.container, backgroundColor:type=="one"?color_text2:"white"}}>
        <View style={styles.imageView}>
            <Image style={styles.imageStyle} source={{uri:image_src}}/>
        </View>
        <View style={styles.text1_view}>
            <Text style={{...styles.text1_style, color:type=="one"?'white':"black"}}>{text1}</Text>
        </View>
        <View style={styles.text2_view2}>
            <View style={{...styles.text2_view,borderColor:color_text2}}>
                <Text style={{...styles.text2_style, color:color_text2}}>{text2}</Text>
            </View>
        </View>
    </View>
   );
 };
 

 