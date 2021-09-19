import React from 'react';
import {SafeAreaView, StatusBar, View, ViewPropTypes} from 'react-native';
import {useTheme} from 'react-native-themed-styles';
import themedStyles from './styles';
import PropTypes from 'prop-types';
const CustomView = props => {
  const {style} = props;
  const [styles, themed] = useTheme(themedStyles);
  return (
    <SafeAreaView style={[styles.safeArea, style]}>
      <StatusBar
        barStyle={'dark-content'}
        translucent
        backgroundColor="transparent"
      />
      {props.children}
    </SafeAreaView>
  );
};
export default CustomView;
CustomView.defaultProps = {
  style: {},
};
CustomView.propTypes = {
  style: PropTypes.oneOfType([
    ViewPropTypes.style,
    PropTypes.arrayOf(ViewPropTypes.style),
  ]),
};
