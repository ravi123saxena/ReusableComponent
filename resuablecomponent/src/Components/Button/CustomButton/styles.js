
import { verticalScale , moderateScale } from 'react-native-size-matters';
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnStyle: {
        width:'60%',
        height: verticalScale(42),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: moderateScale(5)
    }
});