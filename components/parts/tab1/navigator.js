/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert,Dimensions} = ReactNative;

import list from './navigatorData';


import colors from '../../common/color';
import size from '../../common/size';

let {height, width} = Dimensions.get('window');




const generateX = (windowWidth,widths,Xs,index)=>{
    let maxX = widths.reduce((a, b)=>(a + b)) - windowWidth;
    let minX = 0;
    let currentElementCenterX = Xs[index] + widths[index] / 2;
    let elementScrollX = currentElementCenterX - windowWidth / 2;
    let left = elementScrollX;
    if(elementScrollX < minX){
        left = 0;    
    }
    if(elementScrollX > maxX){
        left = maxX;
    }
    return left;
};


const styles = StyleSheet.create({
    scrollView: {
        height: size.navigatorHeight,
        backgroundColor: '#f9f9f9',
        paddingTop: 7
    },
    text: {
        fontSize: 15,
        color: '#838383',
        height:22 - 1 / ReactNative.PixelRatio.get()

    },
    innerView: {
        paddingLeft: 10,
        paddingRight: 10,
        height:22
    },
    touchable:{
        height:22
    },
    touchableHighLight:{
        borderBottomWidth:1,
        borderBottomColor:colors.JMRed
    }
});

var Component = React.createClass({

    getInitialState: function () {
        return {
            active: 0,
            width: [],
            x: []
        }
    },
    setActive: function (index) {
        this.setState({
            active: index
        });
        
        setTimeout(function () {
            this.refs.scrollView.scrollTo({
                x: generateX(width,this.state.width,this.state.x,index)
            });
        }.bind(this), 10);
    }
    ,
    render: function () {
        return (
            <ScrollView
                ref="scrollView"
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                horizontal={true}
                style={[styles.scrollView]}>
                {list.map(function (text, i) {
                    return (
                        <TouchableOpacity
                            ref={'T'+i}
                            key={i}
                            onPress={this.setActive.bind(this,i)}
                            onLayout={(event) => {
                                 let {x, y, width, height} = event.nativeEvent.layout;
                                 this.setState(function(state) {
                                        state.width[i] = width;
                                        state.x[i] = x;
                                    });
                             }}
                            style={[styles.touchable]}>
                            <View style={[styles.innerView]}>
                                <View style={(i === this.state.active ) ? styles.touchableHighLight:{}}>
                                    <Text
                                        style={[styles.text,((i === this.state.active )? {color : colors.JMRed,transform: [{'scale':1.02}]} : {})]}>{text}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    );
                }.bind(this))}
            </ScrollView>
        );
    }
});
export default Component;