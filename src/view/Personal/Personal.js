import React, {useState} from 'react';
import styles from '../../styles/persoal';
import NavigationUtil from '../../utils/NavigationUtil';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import ArrowRight from '../../images/svg/arrowRight.svg';

const menu_list = [
    {_id: 1, name: '设置'},
    {_id: 1, name: '记录'},
    {_id: 1, name: '分享'},
];

const Persoanl = (props) => {
    const [name, setName] = useState('执念');
    const goLogin = () => {
        NavigationUtil.goPage({}, 'LoginPage');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.persoanlHeaderContainer}>
                <View style={styles.avatarBox}>
                    <TouchableOpacity onPress={goLogin} style={styles.avatar}></TouchableOpacity>
                    <Text style={styles.username}>{name}</Text>
                </View>
            </View>
            {menu_list &&
                menu_list.map((item) => (
                    <TouchableOpacity key={item._id} style={styles.personalList} onPress={() => null} activeOpacity={1}>
                        <Text>{item.name}</Text>
                        <Image style={styles.image} source={require('../../images/personal/arrowRight.png')} />
                    </TouchableOpacity>
                ))}
        </SafeAreaView>
    );
};

export default Persoanl;
