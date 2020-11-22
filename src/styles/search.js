import {px2dp, height} from '../utils/px2dp';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    textInput: {
        width: px2dp(280),
        alignSelf: 'center',
        height: px2dp(30),
        borderWidth: px2dp(0.5),
        borderColor: '#ddd',
        paddingHorizontal: px2dp(8),
        marginHorizontal: px2dp(6),
        borderRadius: px2dp(15),
    },
    searchHistory: {
        marginTop: px2dp(10),
        marginLeft: px2dp(24),
        marginRight: px2dp(24),
    },
    itemBox: {
        marginTop: px2dp(3),
        flexDirection: 'row',
    },
    item: {
        width: px2dp(60),
        height: px2dp(26),
        borderRadius: 3,
        marginLeft: px2dp(6),
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'solid',
        textAlign: 'center',
        lineHeight: px2dp(26),
    },
    searchContentBox: {
        width: px2dp(345),
        paddingTop: px2dp(12),
        alignSelf: 'center',
    },
    searchItemBox: {
        width: px2dp(345),
        alignSelf: 'center',
        marginTop: px2dp(10),
        flexDirection: 'row',
        paddingVertical: px2dp(6),
        alignItems: 'center',
    },
    img1v1Url: {
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(6),
    },
    name: {
        marginHorizontal: px2dp(6),
    },
    searchInputBox: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: px2dp(1),
        borderColor: '#eee',
        borderStyle: 'solid',
        borderRadius: px2dp(6),
    },
    searchSubmit: {
        width: px2dp(48),
        height: px2dp(36),
        alignItems: 'center',
        justifyContent: 'center',
        borderTopRightRadius: px2dp(6),
        borderBottomEndRadius: px2dp(6),
    },
    searchText: {},
    topWrap: {
        marginTop: px2dp(10),
        width: px2dp(345),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    back: {
        width: px2dp(18),
        height: px2dp(18),
    },
    colse: {
        color: '#d3d3d3',
        fontSize: px2dp(14),
    },
    placeholderStyle: {
        alignItems: 'center',
        paddingTop: px2dp(60),
        height: height,
    },
    placeholderText: {
        color: '#333',
        fontSize: 16,
    },
});
export default styles;
