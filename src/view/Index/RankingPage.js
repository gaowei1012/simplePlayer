import * as React from 'react';
import {View, Text, Image, SafeAreaView, TouchableOpacity, FlatList} from 'react-native';
import {connect} from 'react-redux';
import actions from '../../redux/actions/index';
import {rakingListDeatil} from '../../expand/api';
import TopNavigationBar from '../../common/TopNavigationBar';
import {GoBack} from '../../utils/GoBack';
import styles from '../../styles/ranking';
import NavigationUtil from '../../utils/NavigationUtil';
import SpinnerLoading from '../../components/Spinner';

// 排行榜
class RankingPage extends React.Component {
    state = {
        loadingTitle: '加载中...',
    };
    componentDidMount() {
        this.getData();
    }
    /**
     * 获取数据
     */
    getData() {
        const {onLoadTopListData} = this.props;
        onLoadTopListData(rakingListDeatil);
    }
    /**
     * 渲染头部
     */
    _renderTopBar = () => {
        let statusbar = {
            backgroundColor: '#ffffff',
            barStyle: 'dark-content',
        };
        return (
            <TopNavigationBar
                title="排行榜"
                statusBar={statusbar}
                style={{backgroundColor: '#ffffff'}}
                leftButton={GoBack(this.props, 'dark')}
            />
        );
    };

    _renderItem(data) {
        const item = data.item;
        const id = item.id;
        return (
            <TouchableOpacity
                key={item.id}
                onPress={() => {
                    NavigationUtil.goPage({id}, 'RankingDetail');
                }}
                style={styles.rankingBox}>
                <View style={styles.leftBox}>
                    <Image style={styles.image} source={{uri: item.coverImgUrl}} />
                    {/* <LazyloadImage
            style={styles.image}
            source={{uri: item.coverImgUrl}}
          /> */}
                </View>
                <View style={styles.rightBox}>
                    <Text style={styles.text}>{item.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }
    _renderContent = () => {
        const toplist = this.props.topList.item;
        if (!toplist) {
            return <SpinnerLoading />;
        }
        return <FlatList data={toplist} renderItem={this._renderItem} />;
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {this._renderTopBar()}
                {this._renderContent()}
            </SafeAreaView>
        );
    }
}

export default connect(
    ({topList}) => ({
        topList,
    }),
    (dispatch) => ({
        onLoadTopListData(url) {
            dispatch(actions.onLoadTopListData(url));
        },
    })
)(RankingPage);
