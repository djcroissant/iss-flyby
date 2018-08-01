import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducer.js';
import thunk from 'redux-thunk'

export const store = createStore(
    rootReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);