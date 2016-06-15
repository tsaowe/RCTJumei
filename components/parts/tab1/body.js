/**
 * Created by tsaowe on 16/6/15.
 */
var React = require('react');
var ReactNative = require('react-native');
let {ScrollView, Text, StyleSheet, View, TouchableOpacity,TouchableHighlight, Alert,Dimensions,ListView} = ReactNative;
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
    iconView:{
        height:40,
        width:40,
        backgroundColor:'#999',
        position:'absolute',
        bottom:100,
        right:30,
        borderRadius:20
    },
    text:{
        
    },
    up:{
        backgroundColor:'rgba(0,0,0,0)',
        position:'relative',
        left:10,
        top:5
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
    _renderRow: function(rowData, sectionID, rowID, highlightRow) {
    var rowHash = Math.abs(hashCode(rowData));
    return (
        <TouchableHighlight>
            <View>
                <View style={styles.row}>
                    <Text >
                        {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
                    </Text>
                </View>
            </View>
        </TouchableHighlight>
    );
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
            top:0
        };
    },
    scrollTop:function () {
        this.refs.listView.scrollTo({
            y:0,
            animated:true
        });
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
                    ref="listView"
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    onScroll={this.handleScroll}
                    style={{height:500}}
                />

                {
                    this.state.top > 5 ?
                    (
                    <TouchableOpacity
                        onPress={this.scrollTop}
                        style={styles.iconView}>
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