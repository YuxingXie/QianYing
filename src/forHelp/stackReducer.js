import {ForHelpStackNavigator} from './views/container'
const initialState = ForHelpStackNavigator.router.getStateForAction(ForHelpStackNavigator.router.getActionForPathAndParams('ForHelpHome'));
export default  (state = initialState, action) => {
    // console.log('stackReducer')
    // console.log(JSON.stringify(initialState))
    const nextState = ForHelpStackNavigator.router.getStateForAction(action, state);
    return nextState || state;
};