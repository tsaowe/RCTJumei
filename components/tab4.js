/**
 * Created by tsaowe on 16/6/20.
 */
var React = require('react-native');
var {
    Animated,
    Easing,
    View,
    StyleSheet,
    Text
} = React;

var Demo = React.createClass({
    getInitialState() {
        return {
            fadeInOpacity: new Animated.Value(0), // 初始值
            left: new Animated.Value(0),
            fontSize:new Animated.Value(0)
        };
    },
    componentDidMount() {
        Animated.parallel(['fadeInOpacity','left','fontSize'].map((prop,i)=>{
            if(i === 0){
                return Animated.timing(this.state[prop],{
                    toValue:1,
                    duration:1000
                })  
            }else{
                return Animated.timing(this.state[prop],{
                    toValue:1,
                    duration:2000,
                    decay:4000
                })
            }
           
        })).start();
    },
    render() {

        return (
            <Animated.View style={[styles.demo, {
                    opacity: this.state.fadeInOpacity.interpolate({
                        inputRange:[0,1],
                        outputRange:[0,1]
                    }),
                    left:this.state.left.interpolate({
                        inputRange:[0,1],
                        outputRange:[-100,100]
                    })
                }
            ]}>
                <Text style={[styles.text]}>悄悄的，我出现了</Text>
            </Animated.View>
        );
        
    }
});

var styles = StyleSheet.create({
    demo: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        position:'relative'
    },
    text: {
        fontSize: 30
    }
});

export default Demo;