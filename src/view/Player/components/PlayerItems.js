import React from 'react';
import {TouchableOpacity, StyleSheet, Image} from 'react-native';
import {px2dp} from '../../../utils/px2dp';

function PlayerItems({icon, handleFunc}) {
    return (
        <TouchableOpacity style={styles.playerItemBox} onPress={handleFunc} activeOpacity={1}>
            {icon}
        </TouchableOpacity>
    );
}

export default PlayerItems;

const styles = StyleSheet.create({
    playerItemBox: {
        flexDirection: 'column',
        width: px2dp(24),
        height: px2dp(24),
    },
});
