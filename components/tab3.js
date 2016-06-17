/**
 * Created by tsaowe on 16/6/17.
 */
import React from 'react';
import {
    View,
    Navigator,
    Text,
    TouchableOpacity
} from 'react-native';

class SecondPageComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    _pressButton() {
        const { navigator } = this.props;
        if(navigator) {
            //很熟悉吧，入栈出栈~ 把当前的页面pop掉，这里就返回到了上一个页面:FirstPageComponent了
            navigator.pop();
        }
    }

    render() {
        return (
            <View style={{flex:1,backgroundColor:'cyan'}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)}>
                    <Text>点我跳回去</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    _pressButton() {
        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent
            })
        }
    }
    render() {
        return (
            <View style={{flex:1,backgroundColor:'yellow'}}>
                <TouchableOpacity onPress={this._pressButton.bind(this)} >
                    <View >
                        <Text>首屏,点击跳转第二屏</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default class SampleComponent extends React.Component {
    render() {
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return (
            <Navigator
                initialRoute={{ name: defaultName, component: defaultComponent }}
                configureScene={(route) => {
                return Navigator.SceneConfigs.FloatFromRight;
              }}
                renderScene={(route, navigator) => {
                let Component = route.component;
                return <Component {...route.params} navigator={navigator} />
              }} />
        );
    }
} 