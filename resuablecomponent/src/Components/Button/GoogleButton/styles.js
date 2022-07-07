import {ScaledSheet} from 'react-native-size-matters';

export default styles = ScaledSheet.create({

    MainContainer: {
        flex: 1,
    },
    GooglePlusStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#dc4e41',
        borderWidth: '0.5@ms',
        borderColor: '#fff',
        height: '40@ms',
        borderRadius: '5@ms', 
        margin: '40@ms',

    },
    ImageIconStyle: {
        padding: '10@ms',
        margin: '5@ms',
        height: '25@ms',
        width: '25@ms',
        resizeMode: 'contain',

    },
    TextStyle: {
        color: "#fff",
        marginBottom: '4@ms',
        textAlign:'center',
        marginHorizontal:'10@ms'
    },
    SeparatorLine: {
        backgroundColor: '#fff',
        width: '1@ms',
        height: '40@ms'
    }
});

// import { StyleSheet } from "react-native";
// import {scale, verticalScale , moderateScale } from 'react-native-size-matters';

// export default styles = StyleSheet.create({

//     MainContainer: {
//         flex: 1,
//     },
//     GooglePlusStyle: {
//         flexDirection: 'row',
//         alignItems: 'center',
//         backgroundColor: '#dc4e41',
//         borderWidth: .5,
//         borderColor: '#fff',
//         height: 40,
//         borderRadius: 5,
//         margin: 5,

//     },
//     ImageIconStyle: {
//         padding: 10,
//         margin: 5,
//         height: 25,
//         width: 25,
//         resizeMode: 'stretch',

//     },
//     TextStyle: {
//         color: "#fff",
//         marginBottom: 4,
//         marginRight: 20,
//     },
//     SeparatorLine: {
//         backgroundColor: '#fff',
//         width: 1,
//         height: 40
//     }
// });