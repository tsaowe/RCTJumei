/**
 * Created by tsaowe on 16/6/16.
 */
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert,Dimensions} = ReactNative;

let {height, width} = Dimensions.get('window');

var size = {
    tabBarHeight:60,
    statusHeight:20,
    navigatorHeight:30,
    header:{
        marginTop:5,
        textHeight:30,
        borderBottomWidth:1 / ReactNative.PixelRatio.get()
    }
};
var scrollViewHeight = height - size.statusHeight - size.tabBarHeight - (size.header.marginTop * 2 + size.header.textHeight + size.header.borderBottomWidth) - size.navigatorHeight + 10;
export default Object.assign({},size,{
    scrollViewHeight:scrollViewHeight
})