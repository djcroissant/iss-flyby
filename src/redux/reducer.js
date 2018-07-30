import { combineReducers } from 'redux';

import issApi from './reducers/issApi.js';

const rootReducer = combineReducers({
    issApi: issApi
})

export default rootReducer