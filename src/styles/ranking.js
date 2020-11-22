import {StyleSheet} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    rankingBox: {
        width: px2dp(345),
        height: px2dp(120),
        minWidth: px2dp(120),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginVertical: px2dp(6),
    },
    leftBox: {
        width: px2dp(100),
        height: px2dp(100),
        borderRadius: px2dp(10),
        overflow: 'hidden',
        // backgroundColor: 'red',
    },
    image: {
        width: px2dp(100),
        height: px2dp(100),
    },
    rightBox: {
        marginLeft: px2dp(20),
        height: px2dp(100),
        maxHeight: px2dp(120),
        width: px2dp(200),
        alignItems: 'center',
        justifyContent: 'center',
        padding: px2dp(2),
    },
    text: {
        lineHeight: px2dp(26),
    },
});

export default styles;
