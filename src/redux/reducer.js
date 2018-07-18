import { combineReducers } from 'redux';

import homeForm from './reducers/homeForm.js';

const rootReducer = combineReducers({
    home: homeForm
})

export default rootReducer