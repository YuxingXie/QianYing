import React from 'react';
import {

    View,
    Text,
    Button,
    Image
} from 'react-native';
import styles from '../src/Styles';
class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'meTab',
        tabBarIcon: ({ tintColor }) => (
            <Image
                source={require('../static/image/icon/icon3.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Text>个人资料（卡片式）、千应事情、个人信誉、养成系统，成就图鉴、设置</Text>
        );
    }
}

export default MyNotificationsScreen;