import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default Header = ({ goBack }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container} >
            {!!goBack ? <TouchableOpacity
                onPress={!!goBack ? goBack : () => navigation.goBack()}
            >
            <Text>GoBack</Text>
            </TouchableOpacity> : <Text />}
        </View>
    );
};