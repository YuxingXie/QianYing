import React from 'react';
import {
    ScrollView,
    View,ListView,
    Text,
    Image
} from 'react-native';
import styles from '../../../src/Styles'
export const MyHomeScreen = ({ navigation,forHelpTopics }) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    const dataSource=ds.cloneWithRows(forHelpTopics);
    return (
    <ScrollView style={{backgroundColor:'#eeeeee',paddingTop:30}}>
        <View style={{backgroundColor:'#000',flex:1,flexDirection:'row',alignItems:'center',height:25}}>
            <View style={{flex:7}}>
                <Text style={{color:'#fff',marginLeft:14}}>求助(27)</Text>
            </View>
            <View style={{flex:1}}>
                <Image style={{width:15,height:15}} source={require('../../../static/image/icon/icon4.png')}/>
            </View>
            <View style={{flex:1}}>
                <Image style={{width:15,height:15}} source={require('../../../static/image/icon/plus_inverse.png')}/>
            </View>
        </View>
        <View style={{flex: 1, paddingTop: 22}}>

            <ListView
                removeClippedSubviews={false}
                dataSource={dataSource}
                renderRow={(rowData) =>
                    <View style={styles.row}>
                        <Image style={{width:30,height:30}} source={{uri:rowData.host.photo}} />
                        <View style={{flex:1,flexDirection:'column'}}>
                            <Text style={{paddingLeft:10,paddingTop:0}}>{rowData.roomName}</Text>

                            <Text style={{fontSize:10,fontWeight:'200',paddingLeft:10,paddingTop:5}}>{rowData.chatMessages?rowData.chatMessages[rowData.chatMessages.length-1]:''}</Text>
                        </View>
                    </View>}/>

        </View>
    </ScrollView>
)};

MyHomeScreen.navigationOptions = {
    tabBarLabel: '会话',
    tabBarIcon: ({ tintColor }) => (
        <Image source={require('../../../static/image/icon/icon1.png')} style={[styles.icon, {tintColor: tintColor}]}/>
    ),
};
