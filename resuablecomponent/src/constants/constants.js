import { Dimensions, Platform } from "react-native";
import ExtraDimensions from "react-native-extra-dimensions-android";
export const DEFAULT_DRAGGABLE_SPACING = 60;
export const DEFAULT_DRAG_HEIGHT = 20;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;
export const DEVICE_WIDTH =
  Platform.OS === 'android'
    ? ExtraDimensions.get('REAL_WINDOW_WIDTH')
    : Dimensions.get('window').width;
export const DEVICE_HEIGHT =
  Platform.OS === 'android'
    ? ExtraDimensions.get('REAL_WINDOW_HEIGHT') -
      ExtraDimensions.get('SOFT_MENU_BAR_HEIGHT')
    : Dimensions.get('window').height;

export const normalizeHorizontaly = (size) =>
  (DEVICE_WIDTH / guidelineBaseWidth) * size;

export const normalizeVerticaly = (size) =>
  (DEVICE_HEIGHT / guidelineBaseHeight) * size;

export const VIEW_NON_EDITABLE_HEIGHT = 56;
export const TEXT_INPUT_CONTAINER_HEIGHT = 70;
export const FORM_TEXT_INPUT_CONTAINER_HEIGHT = 56;


export const KEYBOARD_TYPES = {
  default: 'default',
  numberPad: 'number-pad',
  decimalpad: 'decimal-pad',
  numeric: 'numeric',
  emailAddress: 'email-address',
  phonePad: 'phone-pad',
  numbersAndPunctuation: 'numbers-and-punctuation',
};

export const FONT_TYPES = {
  black: 'black',
  blackItalic: 'blackItalic',
  bold: 'bold',
  boldItalic: 'boldItalic',
  book: 'book',
  bookItalic: 'bookItalic',
  extraBold: 'extraBold',
  extraBoldItalic: 'extraBoldItalic',
  light: 'light',
  lightItalic: 'lightItalic',
  medium: 'medium',
  mediumItalic: 'mediumItalic',
};

export const STATUS = {
  active: 'active',
  inactive: 'inactive',
  success: 'success',
  error: 'error',
  normal: 'normal',
  important: 'important',
};

export const ALERT = {
  cancel: 'cancel',
  ok: 'ok',
};