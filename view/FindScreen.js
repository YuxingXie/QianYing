import React from 'react';
import {
    StyleSheet,
    View,ScrollView,
    Text,
    Button,Alert,TouchableHighlight,
    Image
} from 'react-native';
import { StackNavigator} from "react-navigation";
import ForHelpListScreen from "./ForHelpListScreen";
import styles from '../src/Styles';
export class FindScreen extends React.Component {
    static navigationOptions = {
        header:null,
        tabBarLabel: '发现',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/image/icon/icon3.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render(){
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
                <View
                    style={{flex:1,flexDirection:'row',marginTop:10,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('ForHelpList')} style={{flex:1}}>
                        <Text style={{color:'#000',marginLeft:12,fontSize:12}}>求助信息</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:1,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <Text style={{color:'#000',marginLeft:12,fontSize:12}}>摇一摇</Text>
                </View>
                <View
                    style={{flex:1,flexDirection:'row',marginTop:10,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('ForHelpList')} style={{flex:1}}>
                        <Text style={{color:'#000',marginLeft:12,fontSize:12}}>附近的人</Text>
                    </TouchableHighlight>
                </View>
            </ScrollView>

        );
    }
}


export const FindStack = StackNavigator({
    FindHome: {
        screen: FindScreen,
    },
    ForHelpList: {
        screen: ForHelpListScreen,
    },
});
