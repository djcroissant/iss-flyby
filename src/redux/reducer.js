import { combineReducers } from 'redux';
import alerts from './reducers/alerts.js';
import api from './reducers/api.js';

export default combineReducers({
    alerts,
    api,
});