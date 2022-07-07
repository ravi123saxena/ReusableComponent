import styled from 'styled-components/native';
import { Fonts, Color } from '../styles/themes';

/**
 * Text
 * @description Wrapped React-native Text component with styled-components. Please use this component instead React native's
 * @param {string} fontType - 'black' | 'blackItalic' | 'bold' | 'boldItalic' | 'book' | 'bookItalic' | 'extraBold' | 'extraBoldItalic' | 'light' | 'lightItalic' | 'medium' | 'mediumItalic'
 * @param {string} color - 'critical' | 'important' | 'informational' | 'success' | 'error'
 * @param {number} size
 */
const Text = styled.Text(
  props => `
  font-family: ${
    props.fontType ? Fonts.fonts[props.fontType] : Fonts.fonts.bold
  };
  color: ${props.color ? Color.status[props.color] : '#303030'};
  font-size: ${props.size || 16}
`,
);

export default Text;
