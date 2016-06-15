/**
 * Created by tsaowe on 6/15/16.
 */
var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
var {
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} = ReactNative;


var MainTabView = React.createClass({
    getInitialState:function () {
        return {
            active:0
        }
    },
    changeTab:function (index) {
        this.setState({
            active:index
        })
    },
    render: function() {
        return (
            <TabBarIOS>
                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,0)}
                    selected={this.state.active === 0}
                    title="1"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home-outline">

                    <View style={styles.tabContent}><Text>ios-home-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,1)}
                    selected={this.state.active === 1}
                    title="2"
                    iconName="ios-archive-outline"
                    selectedIconName="ios-archive-outline">
                    <View style={styles.tabContent}><Text>ios-archive-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,2)}
                    selected={this.state.active === 2}
                    title="3"
                    iconName="ios-arrow-dropright"
                    selectedIconName="ios-arrow-dropright">
                    <View style={styles.tabContent}><Text>ios-arrow-dropright</Text></View>
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        marginTop:50
    },
    tabText: {
        color: 'black',
        margin: 50
    }
});

export default MainTabView;