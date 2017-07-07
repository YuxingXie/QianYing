import {combineReducers,createStore, applyMiddleware, compose} from 'redux';
import initData from './InitData';
import Reducer from '../src/Reducer';
import {reducer as forHelpReducer} from './forHelp'
import {navReducer} from './AppNavigatorReducers';
import {stackReducer as forHelpStackReducer} from './forHelp';
import thunkMiddleware from 'redux-thunk';
const middlewares = [thunkMiddleware];
// import Perf from 'react-addons-perf'

// const win = window;
// win.Perf = Perf
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    // (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
let reducers  = combineReducers({
    app:Reducer,
    nav: navReducer,
    forHelp:forHelpReducer,
    forHelpNav:forHelpStackReducer,
});
export default createStore(reducers,initData,storeEnhancers);
