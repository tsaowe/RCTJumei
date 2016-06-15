/**
 * Created by tsaowe on 16/6/15.
 */
import React from 'react';
var ReactNative = require('react-native');
let {ScrollView,Text,StyleSheet,View} = ReactNative;
import Head from './parts/tab1/head';
import Navi from './parts/tab1/navigator';
import Body from './parts/tab1/body';

export default React.createClass({
    render:()=>(
        <View>
            <Head />
            <Navi />
            <Body />
        </View>
    )
});