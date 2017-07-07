import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {store} from '../src/Store.js';
import {AppNavigator} from '../src/NavReducer.js';
import {Provider,connect} from 'react-redux';


function App({dispatch,nav}){
    let navigation=addNavigationHelpers({
        dispatch: dispatch,
        state:nav
    });
    return (
        <AppNavigator navigation={navigation} screenProps={{tintColor: 'blue'}}
        />
    );
}

const mapStateToProps = (state) => ({
    nav: state.nav
});

// connect就是将store中的必要数据作为props传递给React组件来render，并包装action creator用于在响应用户操作时dispatch一个action。
const AppWithNavigationState = connect(mapStateToProps)(App);
export default class Root extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <AppWithNavigationState
                />
            </Provider>

        )
    }
}
