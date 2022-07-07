
import { moderateScale, verticalScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flexDirection: "row", 
        margin: moderateScale(20),
        justifyContent: 'space-between', 
        height: verticalScale(42)
    },
});