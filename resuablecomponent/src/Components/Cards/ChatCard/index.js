import React from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

import styles from './styles';

export default ChatCard = ({image_path, title, subtitle, numMsgs}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{uri:image_path}} />
      <View style={styles.innerContainer}>
        <View style={styles.viewTitles}>
          <Text style={styles.textTitle}>{title}</Text>
          <Text style={styles.textSubTitle}>{subtitle}</Text>
        </View>
        <View style={styles.viewNum}>
          <Text style={styles.messageNum}>{numMsgs}</Text>
        </View>
      </View>
    </View>
  );
};