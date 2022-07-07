import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles'

 const GoogleButton = () => {
    return (
        <View style={styles.MainContainer}>
            <TouchableOpacity style={styles.GooglePlusStyle} activeOpacity={0.5}>
                <Image
                    source={require('../../../assets/images/google.png')}
                    style={styles.ImageIconStyle}
                />
                <View style={styles.SeparatorLine} />
                <Text style={styles.TextStyle}> Login Using Google Plus </Text>
            </TouchableOpacity>
        </View>
    )
}

export default GoogleButton;
