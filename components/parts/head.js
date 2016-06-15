/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import dismissKeyboard from 'react-native-dismiss-keyboard';
let {
    View,
    Text,
    TextInput,
    StyleSheet
} = ReactNative;

const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        height:50,
        flexDirection:'row',
        justifyContent:'center',
        paddingLeft:5,
        paddingRight:5
    },
    leftIcon:{
        width:30,
        height:50
    },
    textInput:{
        flex:1,
        borderColor:'red',
        borderWidth:1,
        height:30
    }
    ,
    rightIcon:{
        width:30,
        height:50
    }
});


export default React.createClass({
    render:function () {
        return (
            <View style={styles.viewStyle}>
                <Icon name="ios-star" size={30} style={styles.leftIcon}/>
                <TextInput
                    onEndEditing={dismissKeyboard}
                    autoCapitalize="none"
                    autoCorrect={false}
                    clearButtonMode="always"
                    placeholder="Search..."
                    testID="explorer_search"
                    style={styles.textInput}/>
                <Icon name="ios-football" size={30} style={styles.rightIcon}/>
            </View>
        );
    }
});

