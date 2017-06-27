import {combineReducers,createStore} from 'redux';
import initData from '../src/InitData';
import Reducer from '../src/Reducer';
import MyContractsScreen from '../view/MyContractsScreen'
import {ForHelpStack} from '../view/ForHelpScreen'
import {FindStack} from '../view/FindScreen'
import {MeStack} from '../view/MeScreen'
import MyHomeScreen from '../view/MyHomeScreen'
import {TabNavigator} from 'react-navigation';
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
/**
 * 因为reducer依赖视图(分开会导致AppNavigator.router为undefined)，导致这里reducer和view无法拆分
 */
const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
const navReducer=  (state = initialState, action) => {
    // console.log('initialState:');
    // console.log(JSON.stringify(initialState));
    /*
     initialState:格式见initialState.json
     */
    const nextState = AppNavigator.router.getStateForAction(action, state);

    // Simply return the original `state` if `nextState` is null or undefined.
    // console.log('nextState:');
    // console.log(JSON.stringify(nextState));
    return nextState || state;
};

console.log(!navReducer);
const appReducer = combineReducers({
    app:Reducer,
    nav: navReducer,

});
export default createStore(appReducer,initData);
