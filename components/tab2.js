/**
 * Created by tsaowe on 16/6/17.
 */
import React from 'react';
var ReactNative = require('react-native');
let {ScrollView,Text,StyleSheet,View,Alert} = ReactNative;

const styles = StyleSheet.create({
    outer: {
        flex:1,
        backgroundColor:'green'
    }
}) ;

export default React.createClass({
    getInitialState:function () {
        return {
            height:0
        }
    },
    render:function () {
        return (
            <View style={styles.outer}
                  onLayout={(event) => {
                                 let {x, y, width, height} = event.nativeEvent.layout;
                                 this.setState(function(state) {
                                    state.height = height;
                                });
                             }}
            >
            </View>
        );
    },
    componentDidMount:function () {
        setTimeout( () =>{
            Alert.alert('高度',''+this.state.height);
        },1000);
    }
});