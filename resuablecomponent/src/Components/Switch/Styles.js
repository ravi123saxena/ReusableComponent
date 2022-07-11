
import { StyleSheet } from 'react-native';
import { Fonts, Color } from '../../Components/styles/themes';
import {
  normalizeVerticaly,
  normalizeHorizontaly,
} from '../../constants/constants';

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: normalizeVerticaly(15),
    paddingLeft: normalizeHorizontaly(15),
    backgroundColor: Color.action.default,
    borderWidth: 1,
    borderColor: Color.borderColors.containerBorder,
    borderRadius: 5,
  },
  switchStyle: {
    marginRight: normalizeHorizontaly(15),
  },
  switchTitleStyle: {
    flex: 1,
  },
  subtitleStyle: {
    fontFamily: Fonts.fonts.medium,
    fontSize: Fonts.fontSizes.fontSize_12,
    color: Color.action.dark300,
    marginTop: normalizeVerticaly(10),
  },
  switchTextParentContainerStyle: {
    paddingVertical: normalizeVerticaly(4.5),
  },
});
export default styles;
