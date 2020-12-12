import {StyleSheet} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    persoanlHeaderContainer: {
        height: px2dp(200),
        width: px2dp(375),
        backgroundColor: '#EE7548',
    },
    avatarBox: {
        width: px2dp(345),
        flexDirection: 'row',
        alignItems: 'center',
    },
    avatar: {
        marginLeft: px2dp(40),
        marginTop: px2dp(20),
        width: px2dp(60),
        height: px2dp(60),
        borderRadius: px2dp(30),
        backgroundColor: '#fff',
    },
    username: {
        marginTop: px2dp(40),
        marginLeft: px2dp(10),
        fontWeight: '800',
        color: '#fff',
    },
    personalList: {
        width: px2dp(335),
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: px2dp(52),
        borderBottomColor: '#f8f8f8f8',
        borderBottomWidth: px2dp(1),
        paddingHorizontal: px2dp(6),
    },
    image: {
        width: px2dp(22),
        height: px2dp(22),
    },
});

export default styles;
