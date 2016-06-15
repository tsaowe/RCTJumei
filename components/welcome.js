var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;


var TabBarExample = React.createClass({

    getInitialState:function () {
        return {
            active:0
        }  
    },

    render: function () {
        return (
            <TabBarIOS>
                <Icon.TabBarItem
                    selected = {this.state.active === 0}
                    title="ios-home-outline"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home-outline">

                    <View style={styles.tabContent}><Text>ios-home-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    selected = {this.state.active === 1}
                    title="123"
                    iconName="ios-archive-outline"
                    selectedIconName="ios-archive-outline">
                    <View style={styles.tabContent}><Text>ios-archive-outline</Text></View>
                </Icon.TabBarItem>

            </TabBarIOS>
        );
    }

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        alignItems: 'center'
    },
    tabText: {
        color: 'black',
        margin: 50
    }
});
export default TabBarExample;