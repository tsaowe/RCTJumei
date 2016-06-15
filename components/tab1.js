/**
 * Created by tsaowe on 16/6/15.
 */
import React from 'react';
var ReactNative = require('react-native');
let {ScrollView,Text,StyleSheet,View} = ReactNative;
import Head from './parts/tab1/head';
import Navi from './parts/tab1/navigator';

export default React.createClass({
    render:()=>(
        <View>
            <Head />
            <Navi />
        </View>
    )
});