import {StyleSheet} from 'react-native';
import {px2dp} from '../utils/px2dp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: px2dp(345),
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        color: '#333',
        padding: px2dp(10),
        marginTop: px2dp(40),
    },
    textinput: {
        width: px2dp(315),
        height: px2dp(40),
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 6,
        borderStyle: 'solid',
        marginTop: px2dp(25),
        paddingLeft: px2dp(6),
        alignSelf: 'center',
    },
    submit: {
        width: px2dp(315),
        height: px2dp(42),
        backgroundColor: '#333',
        borderRadius: 6,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.6,
        marginTop: px2dp(40),
    },
    submitText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default styles;
