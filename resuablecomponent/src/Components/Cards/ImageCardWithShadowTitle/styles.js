import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    imageContainer:{
        height: verticalScale(300),
        weight: moderateScale(300),
        marginTop: verticalScale(10),
        marginHorizontal:moderateScale(10),
        justifyContent:"flex-end",
        elevation:30
    },
    textViewImage:{
        paddingHorizontal:moderateScale(20),
        paddingBottom: verticalScale(20),
        opacity:0.25,
        backgroundColor:"#000"
    },
    textImage:{
        color:"white",
        marginTop:verticalScale(20),
        fontSize:scale(26),
        fontWeight:"500"
    },
    textView: {
        marginHorizontal:moderateScale(10),
        padding:moderateScale(15),
        borderWidth:1,
        borderColor:"grey"
    },
    text2style:{
        fontSize:scale(14),
        fontWeight:"700"
    }
});
