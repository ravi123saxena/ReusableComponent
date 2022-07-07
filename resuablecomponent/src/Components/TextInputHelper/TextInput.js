import styled from 'styled-components/native';
import { Color, Fonts } from '../styles/themes';

/**
 * Text
 * @description Wrapped React-native TextInput component with styled-components. Please use this component instead React native's
 * @param {string} fontType - 'normal' | 'blackItalic' | 'bold' | 'boldItalic' | 'book' | 'bookItalic' | 'extraBold' | 'extraBoldItalic' | 'light' | 'lightItalic' | 'medium' | 'mediumItalic'
 * @param {string} borderColor - 'active' | 'inactive' | 'error'
 * @param {string} textType - 'active' | 'inactive'
 */

const TextInput = styled.TextInput`
  font-family: ${props =>
    props.fontType ? Fonts.fonts[props.fontType] : Fonts.fonts.medium};
  font-size: 16px;
  color: ${props =>
    props.textType
      ? Color.textFieldTextColors[props.textType]
      : Color.textFieldTextColors.active};
  paddingVertical: ${props => (props.isPadding ? 5 : 0)}
  height: ${props => (props.height ? '110%' : '100%')};
`;

export default TextInput;
