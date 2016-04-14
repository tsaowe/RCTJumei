/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';
var React = require('react-native');
var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
    } = React;


var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#05a5d1'
    } ,
    welcome:{
        fontSize:20,
        color:'#fff'
    }
});

var RCTJumei = React.createClass({
    render:function(){
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    欢迎来到全新的native APP世界
                </Text>
                <Image
                    style={{width:50,height:50,resizeMode:Image.resizeMode.contain}}
                    source={{uri:'https://facebook.github.io/react-native/img/header_logo.png'}}
                />
            </View>
        )
    }
});

AppRegistry.registerComponent('RCTJumei', () => RCTJumei);
