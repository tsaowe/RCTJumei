/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView,Text,StyleSheet,View,TouchableOpacity} = ReactNative;

import list from './navigatorData';


import colors from '../../common/color';

// const textColor = '#838383';

const styles = StyleSheet.create({
    scrollView:{
        height:30,
        backgroundColor:'#f9f9f9',
        paddingTop:7
    },
    text:{
        fontSize:15,
        color:'#838383'
        
    },
    innerView:{
        paddingLeft:10,
        paddingRight:10
    }
});

var Component =  React.createClass({

    getInitialState:function () {
        return {
            active:0
        }
    },
    setActive:function (index) {
        this.setState({
            active:index
        })   
    }
    ,
    render:function(){
        return (
            <ScrollView
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                style={[styles.scrollView]}>
                {list.map(function(text,i){
                    return (
                        <TouchableOpacity
                            key={i}
                            onPress={this.setActive.bind(this,i)}>
                            <View style={styles.innerView}>
                                <Text style={[styles.text,((i === this.state.active )? {color : colors.JMRed} : {})]} >{text}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }.bind(this))}
            </ScrollView>
        )

    }
});
export default Component;