import React, {Component} from "react";
import  {Image} from "react-native";
import {connect} from 'react-redux';
import ForHelpHomeScreen from './home/container'
import ForHelpMainScreen from "./main/container";
import { StackNavigator,addNavigationHelpers} from "react-navigation";
import styles from '../../../src/Styles'



export const ForHelpStackNavigator= StackNavigator({
    ForHelpHome: {
        screen: ForHelpHomeScreen,
    },
    ForHelpMain: {
        screen: ForHelpMainScreen,
    },
});
class s extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount() {


    }
    componentWillUnmount() {


    }
    render() {
        return (
            <ForHelpStackNavigator screenProps={{rooms:this.props.rooms,socket:this.props.socket}}
                navigation={addNavigationHelpers({ dispatch: this.props.dispatch,state: this.props.forHelpNav, })}/>
        );
    }
};

const mapStateToProps = (state) => ({
    forHelpNav: state.forHelpNav,
    rooms:state.forHelp.groupChatRooms,
    socket:state.forHelp.socket,
});
s.navigationOptions = {
    header:null,
    tabBarLabel: '求救',
    tabBarIcon: ({ tintColor }) => (
        <Image
            source={require('../../../static/image/icon/icon4.png')}
            style={[styles.icon, {tintColor: tintColor}]}
        />
    ),
};
export default connect(mapStateToProps)(s);
// export default connect()(ForHelpMainScreen)