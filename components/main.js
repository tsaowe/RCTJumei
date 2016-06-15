/**
 * Created by tsaowe on 6/15/16.
 */
var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';
import color from './common/color';
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
            <TabBarIOS
                tintColor={color.JMRed}>
                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,0)}
                    selected={this.state.active === 0}
                    title="首页"
                    iconName="ios-home-outline"
                    selectedIconName="ios-home-outline">

                    <View style={styles.tabContent}><Text>ios-home-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,1)}
                    selected={this.state.active === 1}
                    title="名品特卖"
                    iconName="ios-archive-outline"
                    selectedIconName="ios-archive-outline">
                    <View style={styles.tabContent}><Text>ios-archive-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,2)}
                    selected={this.state.active === 2}
                    title="直播社区"
                    iconName="ios-camera-outline"
                    selectedIconName="ios-camera-outline">
                    <View style={styles.tabContent}><Text>ios-camera-outline</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,3)}
                    selected={this.state.active === 3}
                    title="购物车"
                    iconName="md-briefcase"
                    selectedIconName="md-briefcase">
                    <View style={styles.tabContent}><Text>md-briefcase</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,4)}
                    selected={this.state.active === 4}
                    title="我的"
                    iconName="ios-person"
                    selectedIconName="ios-person">
                    <View style={styles.tabContent}><Text>ios-person</Text></View>
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