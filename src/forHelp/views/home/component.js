
import React from 'react';
import {
    StyleSheet,
    View,ListView,ScrollView,
    Text,TextInput,
    Button,TouchableHighlight,
    Image
} from 'react-native';
// import { StackNavigator} from "react-navigation";
// import ForHelpMainScreen from "../main/container";
import styles from '../../../Styles';
// let socket = io.connect('http://127.0.0.1:8000', {jsonp: false, transports: ['websocket']});
// let socket = io('http://127.0.0.1:8000');
// window.navigator.userAgent = 'react-native';
// export function ForHelpHome({navigation,roomTitle,onChangeText}) {

export default function ForHelpHome({navigation,roomTitle,onChangeText}) {
        // console.log(JSON.stringify(navigation))
        return (
            <View>

            <ScrollView style={{backgroundColor:'#eeeeee',paddingTop:30}}>
                <View style={{backgroundColor:'#000',flex:1,flexDirection:'row',alignItems:'center',height:25}}>
                    <View style={{flex:7}}>
                        <Text style={{color:'#fff',marginLeft:14}}>求助(27)</Text>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:15,height:15}} source={require('../../../../static/image/icon/icon4.png')}/>
                    </View>
                    <View style={{flex:1}}>
                        <Image style={{width:15,height:15}} source={require('../../../../static/image/icon/plus_inverse.png')}/>
                    </View>
                </View>

                <View style={{paddingTop:30,padding:15,flex:1}}>
                    <Text style={{color:'orange'}}>
                        如果您遭遇危及生命安全的突发情况，可以不输入求助标题直接点击"紧急求助"，
                        但我们仍希望您输入简单信息以方便施救者施救。
                        系统会将紧急求助信息突出显示在"会话"栏。
                    </Text>
                    <View style={{marginTop:12}}>
                        <Text style={{padding:5}}>求助标题：</Text>
                        <TextInput
                            onChangeText={ onChangeText }
                                   style={{height: 16,backgroundColor:'#fff',fontSize:12}} maxLength={200}
                                   placeholder="简要描述您遭遇的状况" />
                    </View>

                    <TouchableHighlight style={{flex:1,margin:5,marginTop:15}}  onPress={()=>
                    {navigation.navigate('ForHelpMain', { user: 'Lucy',title:roomTitle,type:'normal' })}} >
                        <Text style={{padding:5,width:200,backgroundColor:'blue',color:'white',alignSelf:'center',textAlign:'center'}}>求救</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={{flex:1,margin:5}}  onPress={()=>
                    {
                        navigation.navigate('ForHelpMain', { user: 'Lucy',title:roomTitle,type:'urgent' })
                    }}>
                        <Text style={{padding:5,width:200,backgroundColor:'red',color:'white',alignSelf:'center',textAlign:'center'}}>紧急求救</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>
            </View>
        );

}
ForHelpHome.navigationOptions = {
    header:null,
    tabBarLabel: '求救',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../../static/image/icon/icon4.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
};

