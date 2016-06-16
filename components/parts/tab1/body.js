/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity,TouchableHighlight, Alert,Dimensions,ListView} = ReactNative;
import Icon from 'react-native-vector-icons/Ionicons';

let {height, width} = Dimensions.get('window');

import size from '../../common/size';
import color from '../../common/color';

import ImageSlider from '../../common/imageSlider';

const styles = StyleSheet.create({
    iconView:{
        height:40,
        width:40,
        backgroundColor:'#999',
        position:'absolute',
        bottom:40,
        right:30,
        borderRadius:20,
        borderWidth:3,
        borderColor:'#888'
    },
    iconViewTouched:{
        opacity:.6    
    }
    ,
    text:{
        
    },
    up:{
        backgroundColor:'rgba(0,0,0,0)',
        position:'relative',
        left:7,
        top:3
    },
    viewCharacter:{
        width:width / 8,
        height:width / 8,
        borderRadius: width / 16,
        backgroundColor:color.JMRed,
        marginTop:10,
        marginBottom:10
        
    },
    textCharacter:{
        color:'#fff',
        backgroundColor:'rgba(0,0,0,0)',
        position:'relative',
        top:7,
        left:8,
        fontSize:25
    }
});

const hashCode = function(str) {
    var hash = 15;
    for (var ii = str.length - 1; ii >= 0; ii--) {
        hash = ((hash << 5) - hash) + str.charCodeAt(ii);
    }
    return hash;
};
const LOREM_IPSUM = 'Lorem ipsum dolor sit amet, ius ad pertinax oportere accommodare, an vix civibus corrumpit referrentur. Te nam case ludus inciderint, te mea facilisi adipiscing. Sea id integre luptatum. In tota sale consequuntur nec. Erat ocurreret mei ei. Eu paulo sapientem vulputate est, vel an accusam intellegam interesset. Nam eu stet pericula reprimique, ea vim illud modus, putant invidunt reprehendunt ne qui.';

export default React.createClass({
    _renderRow: function (rowData, sectionID, rowID, highlightRow) {
        var rowHash = Math.abs(hashCode(rowData));
        if (rowID == 0) {
            return (<ImageSlider images={[
                'http://mp1.jmstatic.com/c_zoom,w_640,q_70/mobile/card_material/item_55324_1520_622-ipad2048_1465803130.jpg?t=1465803130',
                'http://mp1.jmstatic.com/c_zoom,w_640,q_70/mobile/card_material/item_55577_1520_622-ipad2048_1465898474.jpg?t=1465898474',
                'http://mp1.jmstatic.com/c_zoom,w_640,q_70/mobile/card_material/item_55326_1520_622-ipad2048_1465813054.jpg?t=1465813054'
            ]}/>);
        } else if(rowID == 1){
            return (
                <View style={{flex:1,flexDirection:'row',justifyContent:'space-around'}}>
                    <View style={styles.viewCharacter}><Text style={styles.textCharacter}>约</Text></View>
                    <View style={styles.viewCharacter}><Text style={styles.textCharacter}>会</Text></View>
                    <View style={styles.viewCharacter}><Text style={styles.textCharacter}>明</Text></View>
                    <View style={styles.viewCharacter}><Text style={styles.textCharacter}>星</Text></View>
                </View>
            )    
        } else if(rowID == 2){
            return (
                <View style={{height:10,flex:1,backgroundColor:'#f5f5f5'}}/>
            )
        }else {
            return (
                <TouchableHighlight>
                    <View>
                        <View style={styles.row}>
                            <Text >
                                {rowData + ' - ' + rowID + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                            </Text>
                        </View>
                    </View>
                </TouchableHighlight>
            );
        }

    },

    _genRows: function(pressData){
        var dataBlob = [];
        for (var ii = 0; ii < 100; ii++) {
            var pressedText = pressData[ii] ? ' (pressed)' : '';
            dataBlob.push('Row ' + ii + pressedText);
        }
        return dataBlob;
    },
    getInitialState:function () {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        return {
            dataSource: ds.cloneWithRows(this._genRows({})),
            top:0,
            touched:false
        };
    },
    scrollTop:function () {
        this.refs.listView.scrollTo({
            y:0,
            animated:true
        });
        this.setState({
            touched:true
        });
        setTimeout(function () {
            this.setState({
                touched:false
            });
        }.bind(this),1000);
    },
    handleScroll:function (event) {
        this.setState(function (state) {
            state.top = event.nativeEvent.contentOffset.y;
        });
    },
    render:function () {
        return (
            <View>
                <ListView
                    scrollEventThrottle={2}
                    ref="listView"
                    scrollsToTop={true}
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    onScroll={this.handleScroll}
                    style={{height:size.scrollViewHeight}}
                />

                {
                    this.state.top > 10 ?
                    (
                    <TouchableOpacity
                        onPress={this.scrollTop}
                        activeOpacity={.7}
                        style={[styles.iconView,this.state.touched ? styles.iconViewTouched : {}]}>
                            <Icon
                            name='md-arrow-up'
                            size={30}
                            color='#fff'
                            style={styles.up}
                            />
                    </TouchableOpacity>
                    ):null
                }
                
            </View>
        )
    }
});