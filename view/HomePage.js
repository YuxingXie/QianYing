import React from 'react';
import {addNavigationHelpers} from 'react-navigation';
import {AppNavigator} from '../src/Store';
import {Provider,connect} from 'react-redux';
import store from '../src/Store';

class App extends React.Component {
    render() {
        return (
            <AppNavigator navigation={addNavigationHelpers({
                dispatch: this.props.dispatch,
                state: this.props.nav
            })}
            />
        );
    }
}

function getCurrentRouteName(navigationState) {
    if (!navigationState) {
        return null;
    }
    const route = navigationState.routes[navigationState.index];
    // dive into nested navigators
    if (route.routes) {
        return getCurrentRouteName(route);
    }
    return route.routeName;
}


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

const mapStateToProps = (state) => ({
    nav: state.nav
});

// connect就是将store中的必要数据作为props传递给React组件来render，并包装action creator用于在响应用户操作时dispatch一个action。
const AppWithNavigationState = connect(mapStateToProps)(App);