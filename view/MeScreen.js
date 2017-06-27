import React from 'react';
import {
    StyleSheet,
    View,ScrollView,
    Text,
    Button,Alert,TouchableHighlight,
    Image
} from 'react-native';
import { StackNavigator} from "react-navigation";
import PersonalProfileScreen from "../view/PersonalProfileScreen";
import styles from '../src/Styles';
export class MeScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        header:null,
        tabBarLabel: '我',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/image/icon/icon5.png')}
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
                    <TouchableHighlight  onPress={() => {
                        // console.log(JSON.stringify(this.props.navigation));
                        this.props.navigation.navigate('PersonalProfile');
                    }} style={{flex:1}}>
                        <Text style={{color:'#000',marginLeft:12,fontSize:12}}>个人资料</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:1,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <Text style={{color:'#000',marginLeft:12,fontSize:12}}>千应事情</Text>
                </View>

                <View
                    style={{flex:1,flexDirection:'row',marginTop:10,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('PersonalProfile')} style={{flex:1}}>
                        <Text style={{color:'#000',marginLeft:12,fontSize:12}}>个人信誉</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:1,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <Text style={{color:'#000',marginLeft:12,fontSize:12}}>养成系统</Text>
                </View>

                <View
                    style={{flex:1,flexDirection:'row',marginTop:10,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <TouchableHighlight  onPress={() => this.props.navigation.navigate('ForHelpList')} style={{flex:1}}>
                        <Text style={{color:'#000',marginLeft:12,fontSize:12}}>成就图鉴</Text>
                    </TouchableHighlight>
                </View>
                <View style={{flex:1,flexDirection:'row',marginTop:1,backgroundColor:'#fff',paddingTop:5,paddingBottom:5,paddingLeft:20}}>
                    <Image source={require('../static/image/icon/icon5.png')}
                           style={{width:15,height:15}}/>
                    <Text style={{color:'#000',marginLeft:12,fontSize:12}}>设置</Text>
                </View>
            </ScrollView>

        );
    }
}

export const MeStack = StackNavigator({
    MeHome: {
        screen: MeScreen,
    },
    PersonalProfile: {
        screen: PersonalProfileScreen,
    },
});
