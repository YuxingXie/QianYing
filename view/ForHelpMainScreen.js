import React from 'react';
import {
    StyleSheet,
    View,ListView,ScrollView,
    Text,
    TouchableHighlight,TextInput,
    Image
} from 'react-native';
import styles from '../src/Styles';
import store from '../src/Store';
import * as Actions from '../src/Actions';
import BaiduMapDemo from './BaiduMapDemo';
export default class ForHelpMainScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text:null,
            word:null,
            sendDisable:true
        };
        this.onSendMessage=this.onSendMessage.bind(this);
    }
    static navigationOptions = ({ navigation }) => ({
        // headerTitle: ({ state }) => {`${state.params.user}:${state.params.title}`},
        headerTitle: `${navigation.state.params.type==='urgent'?'紧急求助':'求助'}${navigation.state.params.title?'：'+navigation.state.params.title:''}`,
        tabBarVisible:false
    });
    onSendMessage() {
        store.dispatch(Actions.sendGroupChatMessage('1','userId',this.state.word));
        this.setState({word:null,sendDisable:true})
    }
    render() {
        const { params } = this.props.navigation.state;
        return (


    <View style={{flex: 1}}>
        <View>
            <Text>您创建了求救房间，请等待附近的人进入</Text>
        </View>
        <ScrollView>
            <View style={{position:'absolute',top:0,bottom:0,left:0,right:0}}>
                <BaiduMapDemo word={''}/>
            </View>
        </ScrollView>

        <View style={{position: 'absolute', left: 12, right: 12, bottom: 12,flex:1,flexDirection:'row'}}>
            {/*<Image source={require('./image/icon/icon7.png')} style={{width:20,height:20,flex:1}}/>*/}
            <TextInput autoCorrect={false} autoFocus={true} multiline={true}
                        value={this.state.word}
                       onChangeText={ (text) => this.setState({word:text,sendDisable:false})}
                       style={styles.textInput} maxLength={200}/>
            <TouchableHighlight style={styles.sendButton} disabled={false} onPress={this.onSendMessage}>
                <Text
                    style={[styles.sendButtonText,this.state.sendDisable?styles.sendButtonTextDisable:styles.sendButtonTextEnable]}
                >发送</Text>
            </TouchableHighlight>
        </View>
    </View>
        );
    }
}
