import thunk from 'redux-thunk';
import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { NeedsReducer } from "./reduxReducer/NeedsReducer"
import { LoginReducer } from './reduxReducer/LoginReducer';

const initialState = {

};

const reducer = combineReducers({
    Needs_patient: NeedsReducer,
    UserLogin:LoginReducer
});
const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducer,
    initialState,
    ComposeEnhancer(applyMiddleware(thunk)));

export default store;
