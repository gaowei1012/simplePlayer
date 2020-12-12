import {StyleSheet, Platform} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#5A5464',
    },
    // 音乐播放
    playerAndminWrap: {
        marginTop: px2dp(100),
        alignItems: 'center',
    },
    playerAndminBox: {
        width: px2dp(320),
        height: px2dp(320),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: px2dp(320 / 2),
        backgroundColor: '#606373',
    },
    playerAndminBorder: {
        width: px2dp(320 - 46),
        height: px2dp(320 - 46),
        borderRadius: px2dp(320 / 2),
        alignItems: 'center',
        borderColor: '#ddd',
        backgroundColor: '#5A5464',
    },
    playerAndminImageBox: {
        width: '100%',
        height: '100%',
        borderRadius: px2dp(274 / 2),
    },
    // 播放icon菜单
    likeItemBox: {
        marginTop: px2dp(100),
        width: px2dp(316),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    imgBox: {
        width: px2dp(30),
        height: px2dp(30),
    },
    // 进度条
    playerSilderBox: {
        marginTop: px2dp(40),
        width: px2dp(320),
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    playerStart: {
        color: '#d5d5d5',
    },
    playerEnd: {
        color: '#d5d5d5',
    },
    // 底部播放区域
    playerFooterBox: {
        width: px2dp(320),
        marginTop: px2dp(40),
        flexDirection: 'row',
        alignSelf: 'center',
        justifyContent: 'space-between',
    },
    fotterImgBox: {
        width: px2dp(30),
        height: px2dp(60),
    },
    topHeader: {
        width: px2dp(345),
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Platform.OS === 'ios' ? px2dp(6) : px2dp(12), // fix android 顶部距离
    },
    name: {
        color: '#ddd',
        fontSize: px2dp(12),
        marginTop: px2dp(3),
        marginRight: px2dp(3),
    },
    titleBox: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        fontSize: px2dp(16),
        fontWeight: '600',
        color: '#fff',
    },
    svgStyles: {
        width: px2dp(22),
        height: px2dp(22),
        backgroundColor: 'red',
    },
    // 分享
    sharge: {
        color: '#fff',
        fontSize: px2dp(12),
    },
    image: {
        width: px2dp(26),
        height: px2dp(26),
    },
});

export default styles;
