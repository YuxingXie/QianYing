import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import AppWithNavigationState from './src/navigators/AppNavigator';
import store from './src/Store';

class QianYing extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
AppRegistry.registerComponent('QianYing', () => QianYing);
