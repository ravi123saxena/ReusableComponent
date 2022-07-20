import { StyleSheet } from 'react-native';

import styleConstants from '../styles/styleConstants';

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#892cdc', 
        paddingTop: 10 
    },

    title: { 
        color: 'white', 
        fontSize: 28, 
        fontWeight: '700' 
    },

    scrollContainer: { 
        flex: 1, 
        flexDirection: 'row', 
        paddingHorizontal: 20 
    },

    scrollDataTitle: {
        fontSize: 22,
        color: 'white',
        fontWeight: '600',
        marginBottom: 12
    },
    description: {
        fontSize: 18,
        color: 'white'
    },

    animContainer: {
            height: '100%',
            width: 6,
            backgroundColor: '#52057b',
            borderRadius: 8
    },
  
});

export default styles;
