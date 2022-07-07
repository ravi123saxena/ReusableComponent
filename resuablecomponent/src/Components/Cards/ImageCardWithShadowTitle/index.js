import React from 'react';
import {
  Text,
  View,
  ImageBackground,
} from 'react-native';

import styles from './styles';

export default ImageCardWithShadowTitle = ({Image_url, text1, text2}) => {
  
  return (
      <View>
        <ImageBackground style={styles.imageContainer} source={{uri:Image_url}}>
            <View style={styles.textViewImage}>
                <Text style={styles.textImage}>{text1}</Text>
            </View>
        </ImageBackground>
        <View style={styles.textView}>
            <Text style={styles.text2style}>{text2}</Text>
        </View>
      </View>
  );
};
