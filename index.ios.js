var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity
} = React;

import custumeStyle from './style/index';
import Welcome from './components/welcome';

AppRegistry.registerComponent('RCTJumei', () => Welcome);
