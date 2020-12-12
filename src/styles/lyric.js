import {StyleSheet} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    lyricContainer: {
        flex: 1,
    },
    lyricContentBox: {
        width: px2dp(345),
        alignSelf: 'center',
    },
    lycBox: {
        alignItems: 'center',
        marginVertical: px2dp(3),
    },
    lycText: {
        color: '#333',
        fontSize: px2dp(14),
    },
});

export default styles;
