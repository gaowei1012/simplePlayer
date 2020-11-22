import React, {useState} from 'react';
import {SafeAreaView, View, Text, TextInput, Image, TouchableOpacity, ScrollView} from 'react-native';
import {search, songUrl} from '../../expand/api';
import styles from '../../styles/search';
import {request} from '../../expand/request';
import NavigationUtil from '../../utils/NavigationUtil';

const Search = (props) => {
    const [value, setValue] = useState('');
    const [data, setData] = useState([]);

    const onChangeText = (value) => {
        setValue(value);
    };

    const handleSubmit = () => {
        const url = search + value;
        request(url, '')
            .then((ret) => {
                if (ret.code === 200) {
                    const result = ret.result.songs;
                    setData(result);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const goToPalyer = (id) => {
        NavigationUtil.goPage({id: id}, 'Player');
        // const url = `${songUrl}?id=${id}`;
        // console.log(url);
        // request(url, '')
        //     .then((ret) => {
        //         console.log('ret', ret);
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     });
        // console.log('id', id);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topWrap}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => {
                        NavigationUtil.goBack(props.navigation);
                    }}>
                    <Image style={styles.back} source={require('../../images/common/back.png')} />
                </TouchableOpacity>
                <TextInput
                    style={styles.textInput}
                    onChangeText={(value) => onChangeText(value)}
                    clearTextOnFocus={true}
                    placeholder="搜索"
                    blurOnSubmit={false}
                />
                <TouchableOpacity onPress={handleSubmit} activeOpacity={1}>
                    <Text style={styles.colse}>搜索</Text>
                </TouchableOpacity>
            </View>
            <View>
                {data.length === 0 ? (
                    <View style={styles.placeholderStyle}>
                        {/* <Text style={styles.placehnameolderText}>请输入关键字查询</Text> */}
                    </View>
                ) : (
                    <ScrollView>
                        {data &&
                            data.map((item) => {
                                console.log(item);
                                return (
                                    <TouchableOpacity
                                        style={styles.searchItemBox}
                                        key={item.id}
                                        activeOpacity={1}
                                        onPress={() => goToPalyer(item.id)}>
                                        <Image style={styles.img1v1Url} source={{uri: item.artists[0].img1v1Url}} />
                                        <Text style={styles.name}>{item.name}</Text>
                                    </TouchableOpacity>
                                );
                            })}
                    </ScrollView>
                )}
            </View>
        </SafeAreaView>
    );
};

export default Search;
