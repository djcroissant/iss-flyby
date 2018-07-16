import { combineReducers } from 'redux';
import alerts from './reducers/alerts.js';
import api from './reducers/api.js';
import authUser from './reducers/authUser.js';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    alerts,
    api,
    authUser,
    router: routerReducer
});