/**
 * Created by tsaowe on 6/15/16.
 */
var React = require('react');
var ReactNative = require('react-native');
import Icon from 'react-native-vector-icons/Ionicons';

import color from './common/color';
import icons from './common/icons';

import size from './common/size';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

var {
    StyleSheet,
    TabBarIOS,
    TabBar,
    Text,
    View,
    StatusBar
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
                    title={icons[0].text}
                    iconName={icons[0].icon}
                    selectedIconName={icons[0].icon}>

                    <View style={styles.tabContent}>
                        <Tab1/>
                    </View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,1)}
                    selected={this.state.active === 1}
                    title={icons[1].text}
                    iconName={icons[1].icon}
                    selectedIconName={icons[1].icon}>
                    <Tab2/>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,2)}
                    selected={this.state.active === 2}
                    title={icons[2].text}
                    iconName={icons[2].icon}
                    selectedIconName={icons[2].icon}>
                        <Tab3 />
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,3)}
                    selected={this.state.active === 3}
                    title={icons[3].text}
                    badge="4"
                    iconName={icons[3].icon}
                    selectedIconName={icons[3].icon}>
                    <View style={styles.tabContent}><Text>{icons[3].icon}</Text></View>
                </Icon.TabBarItem>

                <Icon.TabBarItem
                    onPress={this.changeTab.bind(this,4)}
                    selected={this.state.active === 4}
                    title={icons[4].text}
                    iconName={icons[4].icon}
                    selectedIconName={icons[4].icon}>
                    <View style={styles.tabContent}><Text>{icons[4].icon}</Text></View>
                </Icon.TabBarItem>
            </TabBarIOS>
        );
    }

});

var styles = StyleSheet.create({
    tabContent: {
        flex: 1,
        marginTop:size.statusHeight
    }
});

export default MainTabView;