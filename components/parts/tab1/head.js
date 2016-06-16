/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import dismissKeyboard from 'react-native-dismiss-keyboard';

import size from '../../common/size';

let {
    View,
    Text,
    TextInput,
    StyleSheet
} = ReactNative;

const iconSize = 20;

const verticalHeight = size.header;

const styles = StyleSheet.create({
    viewStyle:{
        flexDirection:'row',
        borderBottomColor:'#999',
        borderBottomWidth:1 / ReactNative.PixelRatio.get(),
        paddingTop:verticalHeight.marginTop,
        paddingBottom:verticalHeight.marginTop
    },
    leftIcon:{

    },
    textInput:{
        flex:1,
        height:verticalHeight.textHeight,
        borderRadius:15,
        backgroundColor:'#f5f5f5',
        paddingLeft:40,
        paddingTop:2,
        fontSize:15
    }
    ,
    rightIcon:{

    },
    search:{
        position:'absolute',
        left:44,
        top:10,
        color:'#999',
        width:30,
        height:verticalHeight.textHeight,
        backgroundColor:'rgba(0,0,0,0)',
        transform: [{'translate':[0,0,1]}]
        
    },
    leftAndRight:{
        width:30,
        height:20,
        color:'#999',
        position:'relative',
        left:7,
        top:5
    }
});


export default React.createClass({

    render:function () {
        return (
            <View style={styles.viewStyle}>
                <Icon name="ios-star" size={iconSize} style={[styles.leftIcon,styles.leftAndRight]}/>
                <Icon name="ios-search" size={20} style={styles.search}/>
                <TextInput
                    onEndEditing={dismissKeyboard}
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    placeholder="搜索商品 分类 功效 用户"
                    testID="explorer_search"
                    style={styles.textInput}/>
                <Icon name="ios-football" size={iconSize} style={[styles.rightIcon,styles.leftAndRight]}/>
            </View>
        );
    }
});

