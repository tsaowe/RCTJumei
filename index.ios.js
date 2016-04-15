/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

var React = require('react-native');
var {
    StyleSheet,
    Text,
    AppRegistry,
    View,
    Image,
    TouchableOpacity,
    } = React;

var imgs = [
    "http://p3.jmstatic.com/product/000/640/640073_std/640073_160_160.jpg",
    "http://p1.jmstatic.com/product/000/013/13051_std/13051_160_160.jpg",
    "http://p2.jmstatic.com/product/001/951/1951962_std/1951962_160_160.jpg",
    "http://p0.jmstatic.com/product/000/185/185540_std/185540_160_160.jpg",
    "http://p2.jmstatic.com/product/000/777/777257_std/777257_160_160.jpg",
    "http://p3.jmstatic.com/product/000/670/670323_std/670323_160_160.jpg",
    "http://p3.jmstatic.com/product/001/353/1353468_std/1353468_160_160.jpg",
    "http://p1.jmstatic.com/product/000/230/230856_std/230856_160_160.jpg",
    "http://p3.jmstatic.com/product/000/231/231258_std/231258_160_160.jpg",
    "http://p2.jmstatic.com/product/000/017/17542_std/17542_160_160.jpg",
    "http://p3.jmstatic.com/product/000/015/15228_std/15228_160_160.jpg",
    "http://p0.jmstatic.com/product/001/095/1095430_std/1095430_160_160.jpg",
    "http://p0.jmstatic.com/product/000/006/6935_std/6935_160_160.jpg",
    "http://p1.jmstatic.com/product/001/602/1602226_std/1602226_160_160.jpg",
    "http://p3.jmstatic.com/product/000/009/9878_std/9878_160_160.jpg",
    "http://p1.jmstatic.com/product/000/923/923266_std/923266_160_160.jpg",
    "http://p3.jmstatic.com/product/000/980/980263_std/980263_160_160.jpg",
    "http://p0.jmstatic.com/product/000/006/6935_std/6935_160_160.jpg"
];
var MyImage = React.createClass({
    getInitialState: function(){
        var imgs = this.props.imgs;
        return {
            imgs: imgs,
            count: 0
        };
    },
    goNext: function(){
        var count = this.state.count;
        count ++;
        if(count < imgs.length){
            this.setState({
                count: count
            });
        }
    },
    goPreview: function(){
        var count = this.state.count;
        count --;
        if(count >= 0){
            this.setState({
                count: count
            });
        }
    },
    render: function(){
        return(
            <View style={[styles.flex]}>
                <View style={styles.image}>
                    <Image style={styles.img}
                        source={{uri: this.state.imgs[this.state.count]}}
                        resizeMode="contain"
                    />
                </View>
                <View style={styles.btns}>
                    <TouchableOpacity onPress={this.goPreview}>
                        <View style={styles.btn}>
                            <Text>上一张</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.goNext}>
                        <View style={styles.btn}>
                            <Text>下一张</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});

var App = React.createClass({
    render: function(){
        return(
            <View style={[styles.flex, {marginTop:40}]}>
                <MyImage imgs={imgs}></MyImage>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    flex:{
        flex: 1,
        alignItems:'center'
    },
    image:{
        borderWidth:1,
        width:300,
        height:199,
        borderRadius:5,
        borderColor:'#ccc',
        marginBottom:5
    },
    img:{
        height:201,
        width:300,
        paddingBottom:5
    },
    btns:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop:20
    },
    btn:{
        width:60,
        height:30,
        borderColor: '#0089FF',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems:'center',
        borderRadius:3,
        marginRight:20,
    },
});
AppRegistry.registerComponent('RCTJumei', () => App);
