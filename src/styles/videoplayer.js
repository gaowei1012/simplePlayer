import {StyleSheet} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    playBtn: {
        width: px2dp(50),
        height: px2dp(50),
        // backgroundColor:'#fff',
        borderRadius: 50,
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginLeft: -25,
        marginTop: -25,
        zIndex: 999,
    },
    sliderWrap: {
        position: 'absolute',
        bottom: px2dp(30),
        width: px2dp(345),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    sliderBox: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        // marginBottom: px2dp(80),
        // backgroundColor: '#fff',
    },
    allWrap: {
        alignItems: 'center',
    },
    all: {
        color: '#fff',
        paddingHorizontal: px2dp(4),
        fontSize: px2dp(12),
    },
});

export default styles;
