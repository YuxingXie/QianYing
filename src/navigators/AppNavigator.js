import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, TabNavigator } from 'react-navigation';
import {FindStack} from '../../view/FindScreen'
import {MeStack} from '../../view/MeScreen'
import {view as MyHomeScreen} from '../home'
import {view as MyContractsScreen} from '../contracts';
import {view as ForHelpStack} from '../forHelp'
export const AppNavigator = TabNavigator({
    Home: {
        screen: MyHomeScreen,
    },
    Contracts: {
        screen: MyContractsScreen,
    },

    ForHelp: {
        screen: ForHelpStack,
    },
    Find: {
        screen: FindStack,
    },
    Me: {
        screen: MeStack,
    },
}, {
    tabBarOptions: {
        activeTintColor: '#93c97e',
    },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);
