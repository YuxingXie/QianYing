import React from 'react';
import {
    StyleSheet,
    View,ListView,
    Text,
    Button,
    Image
} from 'react-native';
import styles from '../src/Styles';
class ForHelpListScreen extends React.Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([
                {"name":"女大学生","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
                {"name":"Joel","photo":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=695501802,258418055&fm=117&gp=0.jpg"},
                {"name":"James","photo":"https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=407576570,4111165499&fm=58"},
                {"name":"Jimmy","photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497269392247&di=1711dd5a0bbf2f135823580013c83cc1&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F14%2F26%2F61%2F19k58PICmdI_1024.jpg"},
                {"name":"Jackson","photo":"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497269392246&di=09e6c767d11635a065981a1e697be08b&imgtype=0&src=http%3A%2F%2Fpic.58pic.com%2F58pic%2F13%2F78%2F46%2F49J58PIC6kT_1024.jpg"},
                {"name":"Jillian","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
                {"name":"Julie","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"},
                {"name":"Devin","photo":"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg"}
            ])
        };
    }
    static navigationOptions = {
        headerTitle: '千应圈',
        tabBarVisible:false
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Image style={{flex:1,flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-end'}}
                       source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1497350095154&di=2d472f2c6ccf58637ed8d1b95e919808&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F9e3df8dcd100baa186f41d954d10b912c9fc2ec7.jpg'}}>
                    <Text style={{fontSize:11,marginRight:30,padding:3,borderRadius:9}}>学生妹妹</Text>
                    <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg'}}
                           style={{width:60,height:60}}>
                    </Image>
                </Image>
                <ListView
                    removeClippedSubviews={false}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) =>
                    <View style={{flex:1,flexDirection:'row',marginTop:20,padding:10,backgroundColor:'#fff'}}>
                        <View style={{flex:1}}>
                            <Image style={{width:30,height:30}} source={{uri:rowData.photo}} />
                        </View>
                        <View style={{flex:7,flexDirection:'column'}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <Text style={{flex:2,color:'#8ac6cf',fontSize:12}}>{rowData.name}</Text>
                                <Text>----------------</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'column'}}>
                                <Text style={{padding:5}}>谁有车经过创业大楼，求带</Text>
                                <View style={styles.imageContainer}>
                                    <Image style={styles.image} source={{uri:rowData.photo}}/>
                                </View>

                                <Text style={{fontSize:10,margin:10}}>17分钟前</Text>
                            </View>
                        </View>
                        <View style={{flex:2,flexDirection:'column'}}>
                            <Text style={{flex:1}}>[生活类]</Text>
                            <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end'}}>
                                <Image source={require('../static/image/icon/icon1.png')}
                                       style={{width:22,height:22,alignSelf:'flex-end',margin:10}}/>
                            </View>

                        </View>
                    </View>

                    }
                />
            </View>

        );
    }
}


export default ForHelpListScreen;