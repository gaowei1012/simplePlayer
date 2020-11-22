import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TextInput, TouchableOpacity} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import {px2dp} from '../../utils/px2dp';
import DeviceStorage from '../../utils/DeviceStorage';
import {Toast} from '../../utils/Toast';
import styles from '../../styles/login';
import {request} from '../../expand/request';
import constant from '../../expand/api';

const {login} = constant;

/**
 * 暂定只能使用手机号登录
 *  没有注册功能
 *  微信登录暂时没有
 */
const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {}, []);

    const onChangeNameText = (val) => {
        setUserName(val);
    };

    const onChangePasswordText = (val) => {
        setPassword(val);
    };

    const handleSubmit = () => {
        console.log(username);
        console.log(password);
        const phone = 13666683140;
        const password = 'qq12345..**';
        const url = `${login}?phone=${phone}&password=${password}`;
        console.log(url);
        request(url, {})
            .then((ret) => {
                if (ret.code === 502) {
                    Toast.showWaring(ret.message);
                }
                console.log(ret);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>账号密码登录</Text>
            <View style={{marginTop: px2dp(80)}}>
                <TextInput
                    style={styles.textinput}
                    placeholder="请输入用户名"
                    onChangeText={(val) => onChangeNameText(val)}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder="请输入密码"
                    secureTextEntry={true}
                    onChangeText={(val) => onChangePasswordText(val)}
                />
            </View>
            <TouchableOpacity activeOpacity={1} style={styles.submit} onPress={handleSubmit}>
                <Text style={styles.submitText}>登录</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default Login;
