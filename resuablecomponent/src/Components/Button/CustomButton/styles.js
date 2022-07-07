
import { normalizeVerticaly } from '../../../constants/constants';
import { StyleSheet } from 'react-native';
import { Color } from '../../styles/themes';

export default styles = StyleSheet.create({
    viewButton: {
        backgroundColor: Color.action.default,
        flex:1,
       // position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        height: normalizeVerticaly(80),
        //bottom: 0,
        //left: 0,
        //right: 0,
      },
      buttonStyle: {
        width: '88%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
      },
});