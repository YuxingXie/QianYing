import React from 'react';
import { StackNavigator,addNavigationHelpers} from "react-navigation";
import ForHelpMainScreen from "./main/container";
import ForHelpHomeScreen from "./home/container";
import {connect} from 'react-redux';
export default StackNavigator({
    ForHelpHome: {
        screen: ForHelpHomeScreen,
    },
    // ForHelpMain: {
    //     screen: ForHelpMainScreen,
    // },
});
// function App({dispatch,nav}){
//     let navigation=addNavigationHelpers({
//         dispatch: dispatch,
//         state:nav
//     });
//     return (
//         <Stack navigation={navigation} screenProps={{tintColor: 'blue'}}/>
//     );
// }
// const mapStateToProps = (state) => ({
//     nav: state.forHelpStackNav
// });
// export default connect(mapStateToProps)(App);


