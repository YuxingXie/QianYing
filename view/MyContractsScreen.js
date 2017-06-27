import React from 'react';
import {
    AppRegistry,

    View,ListView,ScrollView,
    Text,
    Button,
    Image
} from 'react-native';
import styles from '../src/Styles';
class MyNotificationsScreen extends React.Component {
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
        tabBarLabel: '联系人',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/image/icon/icon2.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <ScrollView style={{backgroundColor:'#eeeeee',paddingTop:30}}>
                <View style={{backgroundColor:'#000',flex:1,flexDirection:'row',alignItems:'center',height:25}}>
                    <View style={{flex:7}}>
                        <Text style={{color:'#fff',marginLeft:14}}>求助(27)</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:15,height:15}} source={require('../static/image/icon/icon4.png')}/>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:15,height:15}} source={require('../static/image/icon/plus_inverse.png')}/>
                    </View>
                </View>
            <View style={{flex: 1, paddingTop: 22}}>

                {/*<ListView*/}
                    {/*removeClippedSubviews={false}*/}
                    {/*dataSource={this.state.dataSource}*/}
                    {/*renderRow={(rowData) =>*/}
                    {/*<View style={styles.row}>*/}
                    {/*<Image style={{width:30,height:30}} source={{uri:rowData.photo}} />*/}
                        {/*<Text style={{paddingLeft:10,paddingTop:5}}>{rowData.name}</Text></View>}*/}
                {/*/>*/}

            </View>
            </ScrollView>

        );
    }
}

export default MyNotificationsScreen;