import React from 'react';
import {
    View,ScrollView,TextInput,
    Text,
    Button,
    Image
} from 'react-native';
import styles from '../src/Styles';
export default class PersonalProfileScreen extends React.Component {
    constructor(props) {
        super(props);

    }
    static navigationOptions = {
        headerTitle: '个人资料',
        tabBarVisible:false
    };

    render() {
        return (
            <ScrollView style={{flex: 1,flexDirection:'column',paddingTop:25}}>
                <View style={{flex: 1,flexDirection:'row',marginTop:12}}>
                    <Text style={{fontSize:11}}>姓名：</Text>
                    <TextInput value='学生妹妹' style={{width:200,fontSize:11,backgroundColor:'#fff'}}>
                    </TextInput>
                </View>
                <View style={{flex: 1,flexDirection:'row',marginTop:12}}>
                    <Text style={{fontSize:11}}>头像：</Text>
                    <Image source={{uri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2656881601,2258550211&fm=117&gp=0.jpg'}}
                           style={{width:60,height:60}}>
                    </Image>
                </View>
            </ScrollView>


        );
    }
}

