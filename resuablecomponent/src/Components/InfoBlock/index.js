import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

const defaultProps = {
  title: 'Title',
  description: 'Description',
};

const InfoBlock = ({ title, description, titleTextStyle, descriptionTextStyle, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.titleText, titleTextStyle]}>{title}</Text>
      <Text style={[styles.descriptionText, descriptionTextStyle]}>{description}</Text>
    </View>
  );
};

InfoBlock.propTypes = propTypes;
InfoBlock.defaultProps = defaultProps;

export default InfoBlock;
