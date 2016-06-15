/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity, Alert} = ReactNative;

import list from './navigatorData';


import colors from '../../common/color';

const styles = StyleSheet.create({
    scrollView: {
        height: 30,
        backgroundColor: '#f9f9f9',
        paddingTop: 7
    },
    text: {
        fontSize: 15,
        color: '#838383'

    },
    innerView: {
        paddingLeft: 10,
        paddingRight: 10
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
        let all = this.state.width.reduce((a, b)=>(a + b));
        let left = this.state.width.filter(function (value, i) {
            return i < index;
        });
        if (left.length) {
            left = left.reduce(function (a = 0, b = 0) {
                return a + b;
            });
        } else {
            left = 0;
        }
        setTimeout(()=> {
            this.refs.scrollView.scrollTo({
                x: left
            });
        }, 10);
    }
    ,
    render: function () {
        return (
            <ScrollView
                ref="scrollView"
                automaticallyAdjustContentInsets={false}
                showsHorizontalScrollIndicator={false}
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
                                    return state;
                                });
                             }}>
                            <View style={styles.innerView}>
                                <Text
                                    style={[styles.text,((i === this.state.active )? {color : colors.JMRed,transform: [{'scale':1.02}]} : {})]}>{text}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                }.bind(this))}
            </ScrollView>
        );
    }
});
export default Component;