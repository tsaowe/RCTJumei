var React = require('react-native');
import {
    Image,
    Text,
    View,
    StatusBar
} from 'react-native';

import styles from '../style/welcome';

export default React.createClass({
    render: function () {
        var { app } = this.props;
        return (
            <View style={styles.imageContainer}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                    hidden={true}
                />

                <Image
                    style={styles.image}
                    source={{uri: 'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1465873576&di=b5cf262bf4b2d031457ef4276e554b3b&src=http://img4.duitang.com/uploads/item/201502/07/20150207101056_tGZfA.thumb.700_0.jpeg'}}
                >
                    <Text style={styles.absText}>{app.time}</Text></Image>

            </View>
        );
    },
    componentDidMount() {
        var {countDown} = this.props;
        countDown();
    }
})