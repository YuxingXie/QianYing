import React from 'react';
import {View,Text,TouchableHighlight,TextInput,Image} from 'react-native';
import styles from '../../../../src/Styles';
import {view as BaiduMap} from '../../../bdMap';
function getRoomByHost(host, rooms) {
    for(room of rooms){
        if(host===room.host) {
            return room;
        }
    }
}
function ForHelpMainScreen({host,rooms,chatInputMessage,sendDisable,onSendMessage,onInputMessage}){
    const room=getRoomByHost(host,rooms);
    return (
        <View style={{flex: 1}}>
            <View>
                <Text>您创建了求救房间，请等待附近的人进入</Text>
            </View>
            <View style={{position:'absolute',top:25,bottom:0,left:0,right:0}}>
                <BaiduMap />
            </View>
            <View style={{position: 'absolute', left: 12, right: 12, bottom: 12,flex:1,flexDirection:'row'}}>
                <Image source={require('../../../../static/image/icon/icon7.png')} style={{width:20,height:20,flex:1}}/>
                <TextInput autoCorrect={false} autoFocus={true} multiline={true}
                           onChangeText={onInputMessage} value={chatInputMessage}
                           style={styles.textInput} maxLength={200}/>
                <TouchableHighlight style={styles.sendButton} disabled={sendDisable} onPress={onSendMessage}>
                    <Text style={[styles.sendButtonText,sendDisable?styles.buttonDisabled:styles.buttonEnabled]}
                    >发送</Text>
                </TouchableHighlight>
            </View>
        </View>
    );
}
ForHelpMainScreen.navigationOptions = ({ navigation }) => ({
    headerTitle: `${navigation.state.params.type==='urgent'?'紧急求助':'求助'}${navigation.state.params.title?'：'+navigation.state.params.title:''}`,
    tabBarVisible:false
});
export default ForHelpMainScreen;